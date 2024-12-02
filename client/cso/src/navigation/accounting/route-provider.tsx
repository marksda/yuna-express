import { BukuBesarScene } from "@/scenes/accounting/buku-besar.scene";
import { BukuPembantuScene } from "@/scenes/accounting/buku-pembantu";
import { HomeScene } from "@/scenes/accounting/home.scene";
import { JurnalScene } from "@/scenes/accounting/jurnal.scene";
import { RekeningAkuntansiScene } from "@/scenes/accounting/rekening-akuntansi.scene";
import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router"

// interface IAccountingRouteProvider {
//     mainPath: string;
// }

const AccountingRouteProvider: FC = () => {
    const router = createBrowserRouter([
        {
            path: '/beranda',
            element: (<HomeScene />),
            children: [
                {
                    path: "/beranda/accounting/jurnal",
                    element: (<JurnalScene />),
                },
                {
                    path: "/beranda/accounting/buku_besar",
                    element: (<BukuBesarScene />),
                },
                {
                    path: "/beranda/accounting/buku_pembantu",
                    element: (<BukuPembantuScene />),
                },
                {
                    path: "/beranda/accounting/rekening_akuntansi",
                    element: (<RekeningAkuntansiScene />),
                },
            ]
        },
    ])

    return <RouterProvider router={router} />; 
}


export default AccountingRouteProvider