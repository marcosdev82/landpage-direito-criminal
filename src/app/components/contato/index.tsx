import styles from './styles.module.scss'
import { Mail, PhoneIcon } from "lucide-react";

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
            <div className={styles.container}>
                <div className={styles.infor}>
                    <div className={styles.box}>
                        <p><PhoneIcon size={36}/>(11) 1234-5678</p>
                    </div>
                    <div className={styles.box}>
                        <p><Mail size={36}/>contato@empresa.com.br</p>
                    </div>
                </div>
            </div>
        </section>
    )
}