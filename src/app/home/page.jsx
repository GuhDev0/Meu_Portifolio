import Link from 'next/link';
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
               -
                <Link className={styles.btn_curriculo} href={'https://drive.google.com/file/d/1BO-nD_hO1ZZdjjhn-ZEnoIZDZ0_RCX4F/view'} target='_blank'>
               Curriculo
                </Link>
                
            </div>
        <div className={styles.home_img}>
            
        </div>
        <Image className={styles.img_tecnologia} src={"/tecnologia.webp"} width={500} height={500} />
        </div>
        
    </div>
 )
       
}