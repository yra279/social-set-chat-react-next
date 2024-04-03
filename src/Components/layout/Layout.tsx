import type { PropsWithChildren } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import styles from './Layout.module.scss'

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
    return (
        <main className={styles.layout}>
            <Sidebar />
            {children}
        </main>
    )
}