import { ColumnDef } from "@tanstack/react-table"
import { IJenisRekeningAkuntansi } from "@/features/entities/accounting/jenis-rekening-akuntansi";

export const JenisRekeningAkuntansiColumns: ColumnDef<IJenisRekeningAkuntansi>[] = [
    {
        accessorKey: "nama",
        header: "Nama",
    },
    {
        accessorKey: "keterangan",
        header: "Keterangan",
    },
]