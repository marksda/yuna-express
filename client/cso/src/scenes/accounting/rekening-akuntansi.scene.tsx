import { DataTable } from "@/components/accounting-ui/data-table";
import { RekeningAkuntansiColumns } from "@/components/accounting-ui/rekening-akuntansi-columns";
import { IQueryParamFilters } from "@/features/entities/query-param-filters";
import { RekeningAkuntansiMenuBar } from "@/navigation/accounting/rekening-akutansi.menu";
import { useGetDaftarRekeningAkuntansiQuery } from "@/services/accounting.api";
import { FC, useState } from "react";

export const RekeningAkuntansiScene: FC = () => {
    // const data: IJenisRekeningAkuntansi[] = [
    //     {
    //         _id: '1213',
    //         nama: 'Nominal',
    //         keterangan: 'bla bla bla'
    //     },
    //     {
    //         _id: '1212',
    //         nama: 'Nominal 1',
    //         keterangan: 'bla bla bla'
    //     },
    //     {
    //         _id: '1216',
    //         nama: 'Nominal 2',
    //         keterangan: 'bla bla bla'
    //     }
    // ]

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

    const {data} = useGetDaftarRekeningAkuntansiQuery(filter)

    return (
        <>
            <RekeningAkuntansiMenuBar />
            <DataTable columns={RekeningAkuntansiColumns} data={data == undefined? []:data} />
        </>
    )
}