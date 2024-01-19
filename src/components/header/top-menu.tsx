import { MenuProps } from "@/types/menu";
import Link from "next/link";

const items: MenuProps[] = [
    {
        title: "home",
        url: "/"
    },
    {
        title: "patterns",
        url: "/patterns"
    }
]

export const TopMenu: React.FC = () => {
    return <ul>
        {items.map(item => (
            <li key={item.url}>
                <Link href={item.url}>
                    {item.title}
                </Link>
            </li>
        ))}
    </ul>
}