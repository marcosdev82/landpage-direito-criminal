import styles from './styles.module.scss'

export default function Contato(){
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1>Fale Conosco</h1>
                <h2>Estamos aqui para te ajudar</h2>
                <p>
                    Se você tem dúvidas, precisa de orientação jurídica ou deseja agendar uma consulta, 
                    entre em contato conosco pelo formulário abaixo. 
                    Nossa equipe está pronta para entender o seu caso e oferecer a melhor solução possível, 
                    com atendimento ágil, sigiloso e totalmente personalizado às suas necessidades.
                </p>
            </div>
        </section>
    )
}