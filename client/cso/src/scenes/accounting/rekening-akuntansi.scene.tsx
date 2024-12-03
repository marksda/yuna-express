import { DataTable } from "@/components/accounting-ui/data-table";
import { JenisRekeningAkuntansiColumns } from "@/components/accounting-ui/jenis-rekening-akuntansi-columns";
import { IJenisRekeningAkuntansi } from "@/features/entities/accounting/jenis-rekening-akuntansi";
import { RekeningAkuntansiMenuBar } from "@/navigation/accounting/rekening-akutansi.menu";
import { FC } from "react";

export const RekeningAkuntansiScene: FC = () => {
    const data: IJenisRekeningAkuntansi[] = [
        {
            _id: '1213',
            nama: 'Nominal',
            keterangan: 'bla bla bla'
        }
    ]
    return (
        <>
            <RekeningAkuntansiMenuBar />
            <DataTable columns={JenisRekeningAkuntansiColumns} data={data} />
        </>
    )
}