import { ITempatUsaha } from "./tempat-usaha";

export interface IToken {
    id: string|null;
    nama: string|null;
    office: Partial<ITempatUsaha>|null;
    token: string|null;
    refresh_token: string|null;
};