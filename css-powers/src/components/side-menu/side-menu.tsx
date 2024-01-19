import { MenuProps } from "@/types/menu"
import Link from "next/link"



export const SideMenu = ({items}:{
    items: MenuProps[]
}) => {
    return <ul>
        {
            items.map(item => (
                <li key={item.url}>
                    <Link href={item.url}>
                        {item.title}
                    </Link>
                </li>
            ))
        }
    </ul>
}