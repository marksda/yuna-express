import { AccountingSidebar } from "@/components/accounting-ui/accounting-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { FC } from "react"
import { Outlet } from "react-router"

export const HomeScene: FC = () => {    
    return (
        <SidebarProvider>
            <AccountingSidebar />
            <main>
                <SidebarTrigger/>
                <Outlet />
            </main>
        </SidebarProvider>
    )
}