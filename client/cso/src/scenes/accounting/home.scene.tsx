import { AccountingSidebar } from "@/components/accounting-ui/accounting-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { FC } from "react"
import { cn } from "@/lib/utils";
import { Outlet } from "react-router"

export const HomeScene: FC = () => {    
    return (
        <SidebarProvider>
            <AccountingSidebar />
            <main className={cn("w-screen")}>
                <Outlet />
            </main>
        </SidebarProvider>
    )
}