'use client';
import Link from "next/link";
import styles from "./styles.module.scss";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const link = "#"
export default function SocialMedia({ isFixed }: { isFixed: boolean }) {
    return(
        <div className={`${styles.socialMedia} ${isFixed ? styles.isFixed : ""}`}>
            <ul className={styles.listSocialMedia}>
                <li><Link href={link}><BsInstagram size={25}/></Link></li>
                <li><Link href={link}><BsFacebook size={25}/></Link></li>
                <li><Link href={link}><BsTwitter size={25}/></Link></li>
                <li><Link href={link}><BsYoutube size={25}/></Link></li>
            </ul>
        </div>
    );
}