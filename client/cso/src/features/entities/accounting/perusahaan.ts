import { IDesa } from "../desa";
import { IKabupaten } from "../kabupaten";
import { IKecamatan } from "../kecamatan";
import { IPropinsi } from "../propinsi";


export interface IPerusahaan {
    _id: string|null;
    nama: string|null;
    npwp: string|null;
    propinsi: {_id: string} & Omit<Partial<IPropinsi>, "_id">;
    kabupaten: {_id: string} & Omit<Partial<IKabupaten>, "_id">;
    kecamatan: {_id: string} & Omit<Partial<IKecamatan>, "_id">;
    desa: {_id: string} & Omit<Partial<IDesa>, "_id">;
    detail_alamat: string|null;
    telepone: string;
    email: string;
    tanggal_registrasi: string|null;
};