import { IFilter } from "./filter";
import { ISortOrder } from "./sort-order";

export interface IQueryParamFilters {
    pageNumber: number;
    pageSize: number;
    filters: IFilter[]|null;
    sortOrders: ISortOrder[]|null;
};

export type qFilters = Pick<IQueryParamFilters, "filters">;