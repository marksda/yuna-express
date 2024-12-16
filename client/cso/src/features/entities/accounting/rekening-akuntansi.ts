import { IJenisRekeningAkuntansi } from "./jenis-rekening-akuntansi";
import { IPerusahaan } from "./perusahaan";

export interface IRekeningAkuntansi {
    _id: string|null;
    kode: string;
    nama: string;
    header: boolean;
    level: number;
    jenis_rekening_akuntansi: {_id: string} & Omit<Partial<IJenisRekeningAkuntansi>, "_id">;
    perusahaan: {_id: string} & Omit<Partial<IPerusahaan>, "_id">;
    urutan: string;
    parent_rekening_akuntansi: ({_id: string} & Omit<Partial<IRekeningAkuntansi>, "_id">)|null;
};