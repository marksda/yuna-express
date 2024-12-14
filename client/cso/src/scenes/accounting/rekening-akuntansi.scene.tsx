import { DataTable } from "@/components/accounting-ui/data-table"
import { RekeningAkuntansiColumns } from "@/components/accounting-ui/rekening-akuntansi-columns"
import { IQueryParamFilters } from "@/features/entities/query-param-filters";
import { useGetDaftarRekeningAkuntansiQuery } from "@/services/accounting.api"
import { FC, useState } from "react"
import _ from "lodash"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";

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
    <SidebarInset>      
      <header className="flex h-16 shrink-0 justify-between border-b px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h3 className="font-semibold">Rekening akuntansi</h3>
        </div>        
        <div className="flex items-center gap-2">
          <Drawer modal={true} direction="right">
            <DrawerTrigger asChild>
              <Button size="sm" className="my-1">
                <Plus />Drawer New
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Move Goal</DrawerTitle>
                  <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                </DrawerHeader>
              </div>
            </DrawerContent>
          </Drawer>
          <Dialog modal={false}>
            <DialogTrigger asChild>
              <Button size="sm" className="my-1">
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
      </header>
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
    </SidebarInset>
  )
}