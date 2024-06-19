import Link from "next/link";

export default function Header() {
    return (
        <div className="fixed top-0 left-0 p-4 flex items-start justify-between w-full gap-2">
            <Link href="/" className="flex items-center justify-start">
                Home
            </Link>
            <div className="flex items-end justify-end gap-2 flex-wrap">
                <a href="https://github.com/zachfeld" target="_blank">
                    Github
                </a>
            </div>
        </div>
    )
}

