'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import SocialMedia from "../social-midia";
import { scrollToSection } from "@/app/utils/scrollToSection";

export default function Header() {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            setIsFixed(window.scrollY > 64);
        };

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault(); // previne recarregamento
        scrollToSection(sectionId);
    };

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
                            <li>
                                <Link href="/" onClick={(e) => handleScroll(e, "banner")}>Home</Link>
                            </li>
                            <li>
                                <Link href="/#servicos" onClick={(e) => handleScroll(e, "servicos")}>Serviços</Link>
                            </li>
                            <li>
                                <Link href="/#quem-somos" onClick={(e) => handleScroll(e, "quem-somos")}>Quem Somos</Link>
                            </li>
                            <li>
                                <Link href="/#como-funciona" onClick={(e) => handleScroll(e, "como-funciona")}>Como Funciona</Link>
                            </li>
                            <li>
                                <Link href="/#contato" onClick={(e) => handleScroll(e, "contato")}>Contato</Link>
                            </li>
                        </ul>
                        <SocialMedia isFixed={isFixed}/>
                    </nav>

                </div>
            </div>
        </header>
    );
}
