import Image from 'next/image';
import styles from './styles.module.scss'
import Card from '../cards';

const iconContact = "./contact.svg"
const iconSoluction = "./soluctions.svg"
const iconOrientation = "./orientation.svg"

export default function ComoFuncionar() {

    const comoFunciona = [
        { titulo: "Fale Conosco", Icon: iconContact, whatsapp: "", description: "" },
        { titulo: "Orientação", Icon: iconOrientation, whatsapp: "", description: "" },
        { titulo: "Solução", Icon: iconSoluction, whatsapp: "", description: "" }
    ];

    return (
        <section className={styles.section}>
            <h1>Como Funciona</h1>
            <h2>Estamos aqui para te ajudar</h2>
            <div className={styles.container}>
                <div className={styles.listCards}>
                    {comoFunciona.map(({ titulo, Icon }, index) => (
                        <Card key={index}>
                            <div className={styles.cardContent}>
                                <div className={styles.iconWrapp}>
                                    <Image
                                        src={Icon}
                                        alt={titulo}
                                        width={32}
                                        height={32}
                                    // se quiser, ajuste objectFit via css ou prop style
                                    />
                                </div>
                                <h2>{titulo}</h2>
                                <p>Consulte um especialista</p>
                                {/* <p><Icon size={12} /></p> */}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section >
    );
}