import Image from "next/image";
import styles from "../styles/footer.module.css";
export default function Footer() {
    return(
    <footer className={styles.footer}>
        <ul>
            <li><p>Instagram</p></li>
            <li><p>Facebook</p></li>
            <li><p>Youtube</p></li>
            <li><p>Twitter</p></li>
        </ul>
        <p>Servindo bem desde 1989</p>

        <Image className={styles.imagelogof}
                    src={"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"}
                    width={150}
                    height={50}
                />
    </footer>
    )
}