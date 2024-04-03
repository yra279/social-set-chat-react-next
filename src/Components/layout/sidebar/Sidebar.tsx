import { headers } from 'next/headers'

import Image from "next/image";
import { MessageSquare, Phone, Settings, Sun, Users2 } from 'lucide-react'
import styles from './Sidebar.module.scss'
import Link from "next/link";

export function Sidebar() {
    const headersList = headers()
    const headerUrl = headersList.get('referer')


    return (
        <aside className={styles.sidebar}>
            <Image src='/logo.svg' priority width={50} height={50}/>
            <div>
                <Link href='/friends'>
                    <Users2 size={27} />
                </Link>
                <Link href='/call'>
                    <Phone size={27} />
                </Link>
                <Link href='/chats'>
                    <MessageSquare size={27} />
                </Link>
                <Link href='/settings'>
                    <Settings size={27} />
                </Link>
            </div>
            <Sun />
        </aside>
    );
}