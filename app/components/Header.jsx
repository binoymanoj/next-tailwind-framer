"use client"

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
    { href: "/about", text: "About" },
    { href: "/products", text: "Products" },
    { href: "/contact", text: "Contact" },
    { href: "/me", text: "mypage" },
];

const Header = () => {
    return (
        <div className="flex justify-center fixed content-center mx-auto mt-6 w-full ">
            <nav className="navbar rounded-xl  text-slate-200 mb-5">
                <ul className="flex justify-center py-5 rounded-sm">
                    {links.map((l) => (
                        <li className="pr-[2.5rem]" key={l.href}>
                            <div>
                                <Link className="text-base" href={l.href}>
                                    {l.text}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Header