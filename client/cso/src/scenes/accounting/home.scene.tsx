import { AccountingLeftSidebar } from "@/components/accounting-ui/sidebar-left-accounting"
import { SidebarProvider } from "@/components/ui/sidebar"
import { FC } from "react"
import { Outlet } from "react-router"

export const HomeScene: FC = () => {    
    return (
        <SidebarProvider>
            <AccountingLeftSidebar />
            <Outlet />
        </SidebarProvider>
    )
}