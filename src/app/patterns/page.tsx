import { SideMenu } from "@/components/side-menu";
import { MenuProps } from "@/types/menu";


const items: MenuProps[] = [
    {
        title: "introduction",
        url: "/patterns"
    },
    {
        title: "split navigation",
        url: "/patterns/split-navigation"
    }
]

export default async function Patterns() {
    return <>
        css patterns goes here
        <br />
        --------
        <SideMenu items={items} />
    </>
}