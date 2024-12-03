export interface IPembayaran {
    jumlah: number;
    status: "tertunda" | "dalam proses" | "sukses" | "gagal";
};