import Image from "next/image";
import styles from "../styles/main.module.css";

const response = await fetch("https://fakestoreapi.com/products/", {
  cache: "no-cache",
});
const data = await response.json();

export default function Main() {
  return (
    <main className={styles.main}>
      {data.map((products) => (
        <div className={styles.card} key={products.id}>
          <p>{products.title.slice(0, 6)}...</p>
          <Image width={300} height={300} src={products.image} />
          <p>{products.category}</p>
          <p className={styles.description}>
            {products.description.slice(0, 250)}...
          </p>
          <p>US${products.price}</p>
          <p>{products.rating.count}</p>
        </div>
      ))}
    </main>
  );
}
