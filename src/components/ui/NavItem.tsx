"use client"

import { NavItemProps } from "@/models/interface";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavItem = ({href, name, ...props}: NavItemProps) => {
    const pathname = usePathname();
    return (
        <li className="header__menu-item" {...props}>
            <Link
                href={href as string}
                className={`header__menu-link ${pathname === href ? 'is-active' : ''}`}>
                {name}
            </Link>
        </li>
    )
}

export default NavItem;