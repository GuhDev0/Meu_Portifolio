import styles from './Footer.module.css'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
export default function footer(){
    return(
         <footer className={styles.footer}>
                <div className={styles.container_footer}>
                    <div className={styles.container_paragraph}>
                        <p>© 2025 Gustavo Costa Araujo, Todos os direitos reservados.</p>
                    </div>
                    <div>
                        <nav className={styles.nav_social}>
                            <ul className={styles.list}>
                                <Link href="https://www.linkedin.com/in/gustavo-costa-araujo-174039289/" target='_blank' className={styles.link}>
                                <CiLinkedin className={styles.icon} />
                                </Link>
                                <Link href="https://github.com/GuhDev0" target='_blank' className={styles.link}>
                                <FaGithub className={styles.icon} />
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </div>
        </footer>

    )
}