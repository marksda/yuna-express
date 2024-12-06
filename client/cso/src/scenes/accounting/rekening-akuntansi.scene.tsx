import { DataTable } from "@/components/accounting-ui/data-table";
import { RekeningAkuntansiColumns } from "@/components/accounting-ui/rekening-akuntansi-columns";
import { RekeningAkuntansiMenuBar } from "@/navigation/accounting/rekening-akutansi.menu";
import { useGetDaftarRekeningAkuntansiQuery } from "@/services/accounting.api";
import { FC } from "react";

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
    const {data} = useGetDaftarRekeningAkuntansiQuery({
        pageNumber: 1,
        pageSize: 25,
        filters: [],
        sortOrders: [
          {
            fieldName: 'id',
            value: 'ASC'
          },
        ],
    })

    return (
        <>
            <RekeningAkuntansiMenuBar />
            <DataTable columns={RekeningAkuntansiColumns} data={data == undefined? []:data} />
        </>
    )
}