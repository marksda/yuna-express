import { DataTable } from "@/components/accounting-ui/data-table"
import { RekeningAkuntansiColumns } from "@/components/accounting-ui/rekening-akuntansi-columns"
import { IQueryParamFilters } from "@/features/entities/query-param-filters";
import { useGetDaftarRekeningAkuntansiQuery } from "@/services/accounting.api"
import { FC, useState } from "react"
import _ from "lodash"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SidebarTrigger } from "@/components/ui/sidebar";

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
      <div className="flex px-2 pt-2 justify-between">
        <div className="flex items-center">
          <SidebarTrigger />
          <h3 className="font-semibold">Kode rekening</h3>
        </div>        
        <Dialog modal={false}>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus />New
            </Button>  
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>        
      </div>         
      <DataTable 
        columns={RekeningAkuntansiColumns} 
        data={data == undefined? []:data} 
        pageNumber={filter.pageNumber}
        pageSize={filter.pageSize}
        setPageNumber={setPageNumber} 
        setPageSize={setPageSize}
        isPagination={true}
        title="Data kode rekening"
      />
    </>
  )
}