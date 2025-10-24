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
                <h1>My App Footer</h1>
            </div>
            <WhatsAppIcon />
        </footer>
    );
}