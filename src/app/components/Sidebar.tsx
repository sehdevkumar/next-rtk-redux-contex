"use server";

import Link from "next/link";

export default async function Sidebar() {
    return (
        <div className="h-screen w-32 bg-gray-200 dark:bg-gray-800 shadow-lg">
            <ul className="divide-y divide-gray-300 dark:divide-gray-700">
                <li className={`py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700`}>
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                </li>
                <li className={`py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700`}>
                    <Link href="/posts">
                        Posts
                    </Link>
                </li>
                <li className={`py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700`}>
                    <Link href="/categories">
                        Categories
                    </Link>
                </li>
                <li className={`py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700`}>
                    <Link href="/users">
                        Users
                    </Link>
                </li>
            </ul>
        </div>
    );
}

