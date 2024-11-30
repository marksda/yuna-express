import { object, z } from "zod";

export const CredentialSchema = object({
    email: z.string(),
    password: z.string()
});

export const ItemSchema = object({
    _id: z.string().nullable(),
    kode: z.string(),
    title: z.string()
});