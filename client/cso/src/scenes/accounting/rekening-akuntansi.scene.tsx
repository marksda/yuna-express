import { DataTable } from "@/components/accounting-ui/data-table"
import { RekeningAkuntansiColumns } from "@/components/accounting-ui/rekening-akuntansi-columns"
import { IQueryParamFilters } from "@/features/entities/query-param-filters";
import { RekeningAkuntansiMenuBar } from "@/navigation/accounting/rekening-akutansi.menu"
import { useGetDaftarRekeningAkuntansiQuery } from "@/services/accounting.api"
import { FC, useState } from "react"
import _ from "lodash"

export const RekeningAkuntansiScene: FC = () => {
  const [filter, setFilter] = useState<IQueryParamFilters>({
    pageNumber: 0,
    pageSize: 2,
    filters: [],
    sortOrders: [
      {
        fieldName: 'urutan',
        value: 'ASC'
      },
    ],
  })

  const setPageNumber = (pageNumber: number) => {
    const tmpFilter = _.cloneDeep(filter)
    tmpFilter.pageNumber = pageNumber
    setFilter(tmpFilter);
  }

  const setPageSize = (pageSize: number) => {
    const tmpFilter = _.cloneDeep(filter)
    tmpFilter.pageSize = pageSize
    setFilter(tmpFilter);
  }

  const {data} = useGetDaftarRekeningAkuntansiQuery(filter)

  return (
    <>
      <RekeningAkuntansiMenuBar />
      <DataTable 
        columns={RekeningAkuntansiColumns} 
        data={data == undefined? []:data} 
        pageNumber={filter.pageNumber}
        pageSize={filter.pageSize}
        setPageNumber={setPageNumber} 
        setPageSize={setPageSize}
        isPagination={true}
      />
    </>
  )
}