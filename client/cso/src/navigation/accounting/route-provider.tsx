import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router"

interface IAccountingRouteProvider {
    mainPath: string;
}

const AccountingRouteProvider: FC<IAccountingRouteProvider> = ({mainPath}) => {
    const router = createBrowserRouter([
        {
            path: `/${mainPath}`,
            element: (<AkutansiApp />),
        },
    ])

    return <RouterProvider router={router} />; 
}


export default AccountingRouteProvider