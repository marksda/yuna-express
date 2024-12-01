import { HomeScene } from "@/scenes/accounting/home.scene";
import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router"

interface IAccountingRouteProvider {
    mainPath: string;
}

const AccountingRouteProvider: FC<IAccountingRouteProvider> = ({mainPath}) => {
    const router = createBrowserRouter([
        {
            path: '/',
            // path: `/${mainPath}`,
            element: (<HomeScene />),
            // children: [
            //     {
            //         path: "jurnal",
            //         element: (<div style={{color: 'black'}}>Tes laporan</div>),
            //     },
            // ]
        },
    ])

    return <RouterProvider router={router} />; 
}


export default AccountingRouteProvider