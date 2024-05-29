import Image from "next/image";
import styles from "../styles/header.module.css";
export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <Image
                            src={"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"}
                            width={150}
                            height={50}
                        /></li>
                    <li>
                        <p className={styles.frase}>Fake Amazon: o xing ling também é produto!</p>
                    </li>
                    <li>
                        <button className={styles.header}>Novo Produto</button>
                    </li>
                    <li>
                        <Image className={styles.carrinho}
                            src={"data:image/png;base64,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"}
                            width={150}
                            height={50}
                        />
                    </li>

                </ul>
            </nav>
        </header>
    )
}