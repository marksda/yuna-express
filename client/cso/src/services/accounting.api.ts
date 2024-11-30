import { ICredential } from "@/features/entities/accounting/credential";
import { IToken } from "@/features/entities/accounting/token";
import { RootState } from "@/features/ssot/accounting.store";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Mutex } from "async-mutex"
import { resetToken, setToken } from "./acounting.token.reducer";
import { IItem } from "@/features/entities/accounting/item";
import { IQueryParamFilters } from "@/features/entities/query-param-filters";
// import { ICredential } from "../features/entities/inventaris-asset/credential";
// import { IToken } from "../features/entities/inventaris-asset/token";
// import { resetToken, setToken } from "./inventaris-asset-redux-token-slice.service";
// import { IItem } from "../features/entities/inventaris-asset/item";
// import { IQueryParamFilters } from "../features/entities/query-param-filters";

const urlApiSia: string = 'http://localhost/api/v1';

export class TokenAPI {
    static getToken = async (credential: ICredential) => {
        // let data = null;
        return fetch(
            `${urlApiSia}/token`, 
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credential)
            }
        );        
    }
}

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({ 
    baseUrl: urlApiSia,
    prepareHeaders: (headers, { getState }) => {
        const accessToken = (getState() as RootState).persisted.token;
        if(accessToken != null){
            headers.set("authorization", `Bearer ${accessToken}`);
        }            
        return headers;
    },

});

export const baseQueryWithReauth: BaseQueryFn<string|FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    await mutex.waitForUnlock();

    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const refreshToken = (api.getState() as RootState).persisted.token.refresh_token;
                const userId = (api.getState() as RootState).persisted.token.id;
                const refreshResult = await baseQuery(
                    {
                        url: `/token/${userId}`,
                        method: 'PUT',
                        body: refreshToken
                    },
                    api,
                    extraOptions,
                );

                if(refreshResult.data) {
                    api.dispatch(setToken(refreshResult.data as IToken));
                    result = await baseQuery(args, api, extraOptions);
                } 
                else {                    
                    api.dispatch(resetToken(null));
                }

            } catch (error) {
                release();
            } finally {
                release();
            }
        }
        else {
            await mutex.waitForUnlock()
            result = await baseQuery(args, api, extraOptions);
        }
    }

    return result;
};

export const accountingApi = createApi({
    reducerPath: 'aerithApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Item','Kosong'],
    endpoints: builder => {
        return {
            saveItem: builder.mutation<IItem, Partial<IItem>>({
                query: (body) => ({
                    url: '/item',
                    method: 'POST',
                    body,
                }),
                invalidatesTags: (result) => result ? ['Item']:['Kosong']
            }),
            getDaftarItem: builder.query<IItem[], IQueryParamFilters>({
                query: (queryParams) => ({
                    url: `/item?filter=${JSON.stringify(queryParams)}`,
                    method: 'GET',
                }),
                transformResponse: (response: { data: IItem[] }, meta, arg) => {
                    return response.data;
                },
                providesTags: ['Item']
            }),
            updateItem: builder.mutation<IItem, {idLama: string; itemBaru: Partial<IItem>;}>({
                query: ({idLama, itemBaru}) => ({
                    url: `/item/${idLama}`,
                    method: 'PUT',
                    body: itemBaru,
                }),
                invalidatesTags: (result) => result? ['Item']:['Kosong']
            }),
            deleteItem: builder.mutation<Partial<IItem>, {idItem: string}>({
                query: ({idItem}) => ({                  
                    url: `/item/${idItem}`,
                    method: 'DELETE',            
                }),
                invalidatesTags: (result) => result? ['Item']:['Kosong']
            }),
        }
    }
});

export const {
    useSaveItemMutation, useGetDaftarItemQuery, useUpdateItemMutation, useDeleteItemMutation
} = accountingApi;