import { FC } from "react"
import { Book, Notebook, NotebookTabs, LayoutList } from "lucide-react"
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
import { Link } from "react-router"

// menu items
const items = [
    {
        id: "jurnal",
        nama: "Jurnal",
        link: "/beranda/accounting/jurnal",
        icon: <NotebookTabs size={24}/>
    },
    {
        id: "buku_besar",
        nama: "Buku besar",
        link: "/beranda/accounting/buku_besar",
        icon: <Book size={24}/>
    },
    {
        id: "buku_pembantu",
        nama: "Buku pembantu",
        link: "/beranda/accounting/buku_pembantu",
        icon: <Notebook size={24}/>
    },
    {
        id: "akun",
        nama: "Rekening akuntansi",
        link: "/beranda/accounting/rekening_akuntansi",
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
                                            <Link to={item.link}>
                                                {item.icon}
                                                <span>{item.nama}</span>
                                            </Link>
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