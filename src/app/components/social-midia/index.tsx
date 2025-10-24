import { Link } from "lucide-react";
import styles from "./styles.module.scss";
// import { Instagram } from "lucide-react";

export default function SocialMedia() {
    return(
        <div className={styles.socialMedia}>
            <ul>
                <li><Link href="">item</Link></li>
            </ul>
        </div>
    );
}