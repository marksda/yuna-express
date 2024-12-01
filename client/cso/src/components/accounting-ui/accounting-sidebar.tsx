import { FC } from "react"
import { 
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,} from "@/components/ui/sidebar"

export const AccountingSidebar: FC = () => {
    return (
        <Sidebar side="left" collapsible="icon">
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}