import Image from "next/image";
import styles from "./styles.module.scss"
import Link from "next/link";
 
const link = "#"

export default function WhatsAppIcon() {
    return (
        <Link href={link}>
            <Image
                alt="whatsapp"
                src="/whatsapp_icon.gif"
                width={55}
                height={55}
                className={styles.whatsapp}
            />
        </Link>
    )
}