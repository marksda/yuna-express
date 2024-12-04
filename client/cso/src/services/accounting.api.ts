import { ICredential } from "@/features/entities/accounting/credential";
import { IToken } from "@/features/entities/accounting/token";
import { RootState } from "@/features/ssot/accounting.store";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Mutex } from "async-mutex"
import { resetToken, setToken } from "./acounting.token.reducer";
import { IQueryParamFilters } from "@/features/entities/query-param-filters";
import { IJenisRekeningAkuntansi } from "@/features/entities/accounting/jenis-rekening-akuntansi";

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
    reducerPath: 'accountingApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['JenisRekeningAkuntansi','Kosong'],
    endpoints: builder => {
        return {
            saveJenisRekeningAkuntansi: builder.mutation<IJenisRekeningAkuntansi, Partial<IJenisRekeningAkuntansi>>({
                query: (body) => ({
                    url: '/jenis_rekening_akuntansi',
                    method: 'POST',
                    body,
                }),
                invalidatesTags: (result) => result ? ['JenisRekeningAkuntansi']:['Kosong']
            }),
            getDaftarJenisRekeningAkuntansi: builder.query<IJenisRekeningAkuntansi[], IQueryParamFilters>({
                query: (queryParams) => ({
                    url: `/jenis_rekening_akuntansi?filter=${JSON.stringify(queryParams)}`,
                    method: 'GET',
                }),
                transformResponse: (response: { data: IJenisRekeningAkuntansi[] }, _meta, _arg) => {
                    return response.data;
                },
                providesTags: ['JenisRekeningAkuntansi']
            }),
        }
    }
});

export const {
    useSaveJenisRekeningAkuntansiMutation, useGetDaftarJenisRekeningAkuntansiQuery
} = accountingApi;