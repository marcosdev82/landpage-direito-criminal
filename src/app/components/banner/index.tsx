'use client';
import styles from './styles.module.scss';
const imageUrl = "./visao-de-escalas-de-justica-3d.jpg";

export default function Banner() {
    return (
        <div
            className={styles.banner}
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
        </div>
    );
} 