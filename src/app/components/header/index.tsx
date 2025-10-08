'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Header() {
    const [top, setTop] = useState(true);

    useEffect(() => {
        const scrollHandler = () => {
            setTop(window.scrollY <= 64);
        };

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentLogo}>
                        <Link href="/">ADVOGADA CRIMINAL</Link>
                    </div>
                    <nav className={styles.nav}>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/#servicos">Serviços</Link>
                            </li>
                            <li>
                                <Link href="/#contato">Contato</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
