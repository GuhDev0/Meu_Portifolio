import Image from "next/image"
import styles from "./card.module.css"
export default function CardTecnologia(props){
    return(
        <div className={styles.card}>
              <Image src={props.img} width={100} height={100}/> 
        </div>
    )
}