import { object, z } from "zod";

export const CredentialSchema = object({
    email: z.string(),
    password: z.string()
})

export const PropinsiSchema = object({
    _id: z.string().nullable().optional(),
    kode: z.string(),
    nama: z.string(),
})

export const KabupatenSchema = object({
    _id: z.string().nullable().optional(),
    kode: z.string(),
    nama: z.string().nullable(),
    propinsi: PropinsiSchema.required({
        _id: true
    })
})

export const KecamatanSchema = object({
    _id: z.string().nullable().optional(),
    kode: z.string(),
    nama: z.string(),
    kabupaten: KabupatenSchema.required({
        _id: true
    })
})

export const DesaSchema = object({
    _id: z.string().nullable().optional(),
    kode: z.string(),
    nama: z.string().nullable(),
    kecamatan: KecamatanSchema.required({
        _id: true
    })
});

export const PerusahaanSchema = object({
    _id: z.string().nullable().optional(),
    nama: z.string(),
    npwp: z.string(),
    propinsi: PropinsiSchema.required({
        _id: true
    }),
    kabupaten: KabupatenSchema.required({
        _id: true
    }),
    kecamatan: KecamatanSchema.required({
        _id: true
    }),
    desa: DesaSchema.required({
        _id: true
    }),
    detail_alamat: z.string(),
    telepone: z.string(),
    email: z.string().email(),
    tanggal_registrasi: z.string().date()
})

export const JenisRekeningAkuntansiShema = object({
    _id: z.string().nullable().optional(),
    nama: z.string(),
    keterangan: z.string()
})

const baseRekeningAkuntansiSchema = object({
    _id: z.string().nullable().optional(),
    kode: z.string(),
    nama: z.string(),
    header: z.boolean(),
    level: z.number(),
    jenis_rekening_akuntansi: JenisRekeningAkuntansiShema.required({_id: true}),
    perusahaan: PerusahaanSchema.required({_id: true}),
    urutan: z.string().nullable()
})

export const RekeningAkuntansiSchema = baseRekeningAkuntansiSchema.extend({
    parent: baseRekeningAkuntansiSchema.required({_id: true}).nullable()
})