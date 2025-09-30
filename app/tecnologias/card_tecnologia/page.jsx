import Image from "next/image";
import styles from "./card.module.css";

export default function CardTecnologia({ img, titleTecnologia, porcentagem }) {
  return (
    <div className={styles.card}>
      <Image src={img} width={50} height={50} alt={titleTecnologia} />
      <p className={styles.title}>{titleTecnologia}</p>

      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${porcentagem}%` }}
        ></div>
      </div>
      <span className={styles.percent}>{porcentagem}%</span>
    </div>
  );
}
