import styles from './styles.module.css'
import CardContato from './card/card'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link'
export default function projeto(){
    return(
        <div className={styles.contato}>
            <div className={styles.container_contato}>
                    <h2>
                        Entre em Contato
                    </h2>
                    <div className={styles.container_card}>
                        <CardContato
                        title={"Email"}
                        contato={"contato.devgustavo@gmail.com"}
                        />
                        <CardContato
                        title={"Telefone"}
                        contato={"(11)94992-6051"}
                        />
                        <h3>social</h3>
                        <div className={styles.container_icon}>
                           
                            <Link href="https://www.linkedin.com/in/gustavo-costa-araujo-174039289/" target='_blank' className={styles.link}>
                                    <CiLinkedin className={styles.icon} />
                                    </Link>
                                    <Link href="https://github.com/GuhDev0" target='_blank' className={styles.link}>
                                    <FaGithub className={styles.icon} />
                                    </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}