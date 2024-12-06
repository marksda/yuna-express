import { IJenisRekeningAkuntansi } from "./jenis-rekening-akuntansi";
import { IPerusahaan } from "./perusahaan";

export interface IRekeningAkuntansi {
    kode: string;
    nama: string;
    header: boolean;
    level: number;
    jenis_rekening_akuntansi: Partial<IJenisRekeningAkuntansi>;
    perusahaan: Partial<IPerusahaan>;
    urutan: string;
    parent_rekening_akuntansi: Partial<IRekeningAkuntansi>
};