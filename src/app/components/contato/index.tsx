import styles from './styles.module.scss'

export default function Contato(){
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1>Fale Conosco</h1>
                <h2>Estamos aqui para te ajudar</h2>
                <p>Atuamos em processos criminais com foco na aplicação e interpretação das normas de forma mais favorável aos interesses do cliente.</p>
            </div>
        </section>
    )
}