import Image from 'next/image';
import styles from './styles.module.scss'
import Card from '../cards';
import { FileText, Folder, MessagesSquare, Users } from 'lucide-react';

export default function ComoFuncionar() {

    const comoFunciona = [
        { titulo: "Fale Conosco", Icon: MessagesSquare },
        { titulo: "Orientação", Icon: Folder },
        { titulo: "Solução", Icon: Users }
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
                                    <Icon size={32} />
                                </div>
                                <h2>{titulo}</h2>
                                <p>Consulte um especialista</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section >
    );
}