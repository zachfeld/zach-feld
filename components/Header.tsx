"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {
    const pathname = usePathname()
    return (
        <div className="fixed top-0 left-0 p-4 flex items-start justify-between w-full gap-2">
        {pathname === "/" ?
            <div className="invisible">
                Home
            </div> :
            <Link href="/" className="flex items-center justify-start">
                Home
            </Link>
        }
            <div className="flex items-end justify-end gap-2 flex-wrap">
                <Link href="https://x.com/zachfeldy" target="_blank">
                    X
                </Link>
                <Link href="https://linkedin.com/in/zachfeldy" target="_blank">
                    Linkedin
                </Link>
                <Link href="https://github.com/zachfeld" target="_blank">
                    Github
                </Link>
            </div>
        </div>
    )
}

