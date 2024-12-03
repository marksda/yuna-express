import { AccountingSidebar } from "@/components/accounting-ui/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { FC } from "react"
import { Outlet } from "react-router"

export const HomeScene: FC = () => {    
    return (
        <SidebarProvider>
            <AccountingSidebar />
            <main className="w-screen">
                <Outlet />
            </main>
        </SidebarProvider>
    )
}