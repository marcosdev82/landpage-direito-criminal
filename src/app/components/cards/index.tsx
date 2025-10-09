import styles from './styles.module.scss'
import { FileInputIcon } from 'lucide-react';

export default function Card() {
    return (
        <div className={styles.card}>
            <FileInputIcon size={48} />
            <h2>Card Title</h2>
            <p>Card content goes here.</p>
        </div>
    )
}