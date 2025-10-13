'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function Header() {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            setIsFixed(window.scrollY > 64);
        };

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        <header
            className={`${styles.header} ${isFixed ? styles.fixed : styles.background} ${isFixed ? styles.slideDown : ""
                }`}
        >
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentLogo}>
                        <Link href="/">
                            <Image
                                className={styles['logo-preta']}
                                src="/logotipo.png"
                                alt="Logotipo Thayna Brito"
                                width={200}
                                height={23}
                            />
                        </Link>
                    </div>
                    <nav className={styles.nav}>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/#servicos">Serviços</Link></li>
                            <li><Link href="/#contato">Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
