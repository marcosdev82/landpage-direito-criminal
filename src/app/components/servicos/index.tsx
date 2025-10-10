import styles from "./styles.module.scss";
import Card from "../cards";
import { FileText, Folder, Users, Eye, Lock, User, Scale, ChevronsDown } from "lucide-react";

export default function Servicos() {
    const servicos = [
        { titulo: "Habeas Corpus", Icon: FileText },
        { titulo: "Intimação à delegacia", Icon: Folder },
        { titulo: "Acompanhamento em sede policial", Icon: Users },
        { titulo: "Flagrante 24hs", Icon: Eye },
        { titulo: "Execução da pena", Icon: Lock },
        { titulo: "Tribunal do Júri", Icon: User },
        { titulo: "Audiência de custódia", Icon: Scale },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.arrowDown}><ChevronsDown size={26} /></div>
            <h1>Serviços</h1>
            <h2>Como podemos te ajudar?</h2>
            <div className={styles.listCards}>
                {servicos.map(({ titulo, Icon }, index) => (
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
        </div >
    );
}
