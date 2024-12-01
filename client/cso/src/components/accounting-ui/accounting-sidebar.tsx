import { FC } from "react"
import { Book, Home, Notebook, NotebookTabs, LayoutList } from "lucide-react"
import { 
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

// menu items
const items = [
    {
        id: "jurnal",
        nama: "Jurnal",
        link: "/home/pembukuan/jurnal",
        icon: <NotebookTabs size={24}/>
    },
    {
        id: "buku_besar",
        nama: "Buku besar",
        link: "/home/pembukuan/buku_besar",
        icon: <Book size={24}/>
    },
    {
        id: "buku_pembantu",
        nama: "Buku pembantu",
        link: "/home/pembukuan/buku_pembantu",
        icon: <Notebook size={24}/>
    },
    {
        id: "akun",
        nama: "Kode rekening",
        link: "/home/pembukuan/akun",
        icon: <LayoutList size={24}/>
    },
]

export const AccountingSidebar: FC = () => {
    return (
        <Sidebar side="left" collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Pembukuan</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map(
                                (item) => (
                                    <SidebarMenuItem key={item.id}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.link}>
                                                {item.icon}
                                                <span>{item.nama}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>                                    
                                )
                            )}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Pelaporan</SidebarGroupLabel>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}