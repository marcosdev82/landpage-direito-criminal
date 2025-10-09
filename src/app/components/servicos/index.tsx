import styles from "./styles.module.scss";
import Card from "../cards";

export default function Servicos() {
    return (
        <div className={styles.container}>
            <h1>Serviços</h1>
            <div className={styles.listCards}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}