import Image from "next/image";
import styles from "./styles.module.scss"
import Link from "next/link";
 
const link = "#"

export default function WatsApp() {
    return (
        <Link href={link}>
            <Image
                alt="whatsapp"
                src="./whatsapp_icon"
                width={40}
                height={40}
                className={styles.whatsapp}
            />
        </Link>
    )
}