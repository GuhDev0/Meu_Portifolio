import styles from "./Card_Projeto.module.css";
import Image from "next/image";
import Link from "next/link";

export default function CardProjeto(props) {
  return (
    <div className={styles.card_projeto}>
      <p>{props.title}</p>
      <div className={styles.container_img}>
        <Image src={props.image} width={237} height={242} alt={props.title} />
      </div>

      {props.link ? (
        <Link className={styles.btn_link} href={props.link} target="_blank">
          {props.btn_projeto}
        </Link>
      ) : (
        <p>Link não disponível</p>
      )}
    </div>
  );
}
