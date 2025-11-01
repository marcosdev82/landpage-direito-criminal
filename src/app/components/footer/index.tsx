'use client';
import { ChevronsUp } from "lucide-react";
import styles from "./styles.module.scss";
import WhatsAppIcon  from "../whatsapp";

export default function Footer() {

    
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.arrowDown} onClick={handleScrollTop}><ChevronsUp size={26} /></div>
                <div className={styles.footerContent}>
                    <p>&copy; 2025 Minha Empresa - Todos os direitos reservados</p>
                </div>
            </div>
            <WhatsAppIcon />
        </footer>
    );
}