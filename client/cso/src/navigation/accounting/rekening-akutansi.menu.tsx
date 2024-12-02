import { Menubar, MenubarContent, MenubarItem, MenubarTrigger } from "@/components/ui/menubar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { MenubarMenu } from "@radix-ui/react-menubar";
import { FC } from "react";

export const RekeningAkuntansiMenuBar: FC = () => {
    return (
        <Menubar className={cn("rounded-none border-none")}>
            <MenubarMenu>
                <SidebarTrigger/>
                <label className={cn("pr-8 font-semibold")}>Kode rekening</label>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Data</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Import</MenubarItem>
                    <MenubarItem>Export</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}