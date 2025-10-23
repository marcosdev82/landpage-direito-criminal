import { ChevronsUp } from "lucide-react";
import styles from './styles.module.scss'

export default function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.arrowDown}><ChevronsUp size={26} /></div>
                 <h1>My App Footer</h1>
            </div>
        </footer>
    );
}