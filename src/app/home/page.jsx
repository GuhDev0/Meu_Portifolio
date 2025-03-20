import styles from './Home.module.css';
import Image from 'next/image'
export default function PageHome(){
 return(
    <div className={styles.home}>
        <div className={styles.container_home}>
            <div className={styles.home_text}>
                <h2>
                    Bem-vindo ao meu site
                </h2>
                <h1 className={styles.sobre_text}>
                Eu Sou Gustavo Costa, <br /> desenvolvedor full-stack. 
                </h1>
                <p>
                com paixão por criar soluções completas, do front-end ao <br /> back-end, sempre buscando inovação e qualidade
                </p>
                <button className={styles.btn_curriculo}>
                Meu Curriculo
            </button>
            </div>
        <div className={styles.home_img}>
            <p>
                Imagem aqui
            </p>
        </div>
        </div>
        
    </div>
 )
       
}