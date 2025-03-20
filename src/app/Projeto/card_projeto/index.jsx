import styles from "./Card_Projeto.module.css";
import Image from "next/image";
import Link from 'next/link';
  
export default function cardProjeto(props){
    return(
        <div className={styles.card_projeto}>
                <p>{props.title}</p>
                <div className={styles.container_img}>
                    <Image src={props.image}/>
                </div>
                <button  className={styles.btn_projeto}>
                    <Link className={styles.btn_link} href={"#"}>{props.btn_projeto}</Link>
                </button>
            </div>
        
    )
}