import styles from "./Card_Projeto.module.css";
import Image from "next/image";
import Link from "next/link";


export default function CardProjeto(props) {
  
  return (
    <div className={styles.card_projeto}>

      <div className={styles.container_img}>
        <Image src={props.image} fill style={{ objectFit: 'cover' }} alt={props.title} />
      </div>
      <p className="fs-5">{props.title}</p>
      <p>
        {props.descricao}
      </p>

      <div className={styles.container_icon_tech}>
        {(props.listIcon || []).map((icon, index) => (
          <div key={index} className={styles.icon_tech}>
            {icon}
          </div>
        ))}
      </div>
<div className={styles.container_butoes}>
         {props.link ? (
        <Link className={"btn btn-primary"} href={props.link} target="_blank">
          {props.btn_projeto}
        </Link>
      ) : (
        <p>Link não disponível</p>
      )}
      {props.linkDois ? (
        <Link className={"btn btn-primary"} href={props.link} target="_blank">
          {props.btn_projeto}
        </Link>
      ) : (
        <p></p>
      )}
</div>
     
    </div>
  );
}
