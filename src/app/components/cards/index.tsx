import styles from './styles.module.scss'

export default function Card({ children }: { children?: React.ReactNode }) {
    return (
        <div className={styles.card}>{children}</div>
    )
}