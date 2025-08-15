import styles from './tecnologia.module.css'
import Card from './card_tecnologia/page'
export default function Tecnologia(){
return(
    <div className={styles.container_tecnologia}>
        <h3>
            Tecnologias
        </h3>
        <div className={styles.container_card}>
            <Card
            img={'/node-js-removebg-preview.png'}/>
            <Card
            img={'/git.png'}/>
            <Card
            img={'/docker.png'}/>
            <Card
            img={'/JavaScript-logo.png'}/>
            <Card
            img={'/react-icon.png'}/>
            <Card
            img={'/Java_Programmer_Computer_Programming_Logo_PNG-removebg-preview.png'}/>
        </div>
    </div>
)
    
}