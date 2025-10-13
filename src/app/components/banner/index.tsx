'use client';
import Image from 'next/image';
import styles from './styles.module.scss';
import { FaWhatsapp } from 'react-icons/fa';

export default function Banner() {
    return (
        <section>
            <div className={styles.banner} >
                <Image
                    src="/logo-direito.png"
                    alt="Banner"
                    width={220}
                    height={182}
                    className={styles.image}
                />

                <div className={styles.content}>
                    <h1>Atendimento emeregencial 24h.</h1>
                    {/* <a
                        className={styles.btnWhatsapp}
                        href="https://wa.me/5599999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><FaWhatsapp size={22} /> Quero fala com um especialista</a> */}
                </div>
            </div>
        </section>
    );
} 