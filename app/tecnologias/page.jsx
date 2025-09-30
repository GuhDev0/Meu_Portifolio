import styles from './tecnologia.module.css'
import Card from './card_tecnologia/page'
export default function Tecnologia(){
return(
    <div className={styles.container_tecnologia}>
        <div className={styles.containerTextTecnologia}>
            <h3>
                Tecnologias
            </h3>
            <p>
                Ferramentas e tecnologias que utilizo no desenvolvimento
            </p>
        </div>
        <div className={styles.container_card}>
            <Card
            img={'/node-js-removebg-preview.png'}
            titleTecnologia={"NodeJs"}
            porcentagem={"50"}/>
            <Card
            img={'/git.png'}
            titleTecnologia={"GitHub"}
            porcentagem={"50"}/>
            <Card
            img={'/docker.png'}
            titleTecnologia={"Docker"}
            porcentagem={"30"}/>
            <Card
            img={'/JavaScript-logo.png'}
            titleTecnologia={"JavaScript"}
            porcentagem={"50"}/>
            <Card
            img={'/react-icon.png'}
            titleTecnologia={"React"}
            porcentagem={"50"}/>
            <Card
            img={'/Java_Programmer_Computer_Programming_Logo_PNG-removebg-preview.png'}
            titleTecnologia={"Java"}
            porcentagem={"50"}/>
        </div>
    </div>
)
    
}