import { HomeScene } from "@/scenes/accounting/home.scene";
import { JurnalScene } from "@/scenes/accounting/jurnal.scene";
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
            ]
        },
    ])

    return <RouterProvider router={router} />; 
}


export default AccountingRouteProvider