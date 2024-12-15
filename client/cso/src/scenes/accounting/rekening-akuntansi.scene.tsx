import { DataTable } from "@/components/accounting-ui/data-table"
import { RekeningAkuntansiColumns } from "@/components/accounting-ui/rekening-akuntansi-columns"
import { IQueryParamFilters } from "@/features/entities/query-param-filters";
import { useGetDaftarRekeningAkuntansiQuery } from "@/services/accounting.api"
import { FC, useState } from "react"
import _ from "lodash"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormItem } from "@/components/ui/form";

export const RekeningAkuntansiScene: FC = () => {
  const [openFormulir, setOpenFormulir] = useState<boolean>(false);
  const [filter, setFilter] = useState<IQueryParamFilters>({
    pageNumber: 0,
    pageSize: 25,
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
          <Button 
            size="sm" 
            className="my-1"
            onClick={() => {
              setOpenFormulir((prev) => {
                return !prev
              })
            }}
          >
              <Plus/>New
          </Button>
          <Drawer modal={true} direction="right">
            <DrawerTrigger asChild>
              <Button size="sm" className="my-1">
                <Plus/>Drawer New
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
        </div>        
      </header>
      <div className="md:flex">
        {openFormulir ? (
          <div className="invisible w-0 h-0 md:visible md:w-1/3">
            <Card className="m-2">
              <CardHeader>
                <CardTitle>Formulir rekening akuntansi</CardTitle>
                <CardDescription>Penambahan rekening akutansi baru ke sistem.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form>
                  <FormField 
                    control={}
                    name=""
                    render={() => (
                      <FormItem>
                        
                      </FormItem>
                    )}
                  />
                </Form>
              </CardContent>
            </Card>
          </div>):null
        }
        <div className="grow">
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
        </div>
      </div>
    </SidebarInset>
  )
}