import styles from './Footer.module.css'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
export default function footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.container_footer}>
                <div className={styles.footer_nameGustavo}>
                    <h4 className={styles.footer_title}>
                        Gustavo costa araujo
                    </h4>
                    <p className={styles.footer_text}>
                        Desenvolvedor Full-Stack
                    </p>
                </div>

                {/* Contact Information Section (Unchanged) */}
                <div className={styles.footer_section}>
                    <h4 className={styles.footer_sectionTitle}>CONTATO</h4>
                    <div className={styles.footer_contactItem}>
                        <p>Email: <a href="contato.devgustavo@gmail.com" className={styles.footer_link}>contato.devgustavo@gmail.com</a></p>
                    </div>
                    <div className={styles.footer_contactItem}>
                        <p>Phone: (55) 11 91479-7992</p>
                    </div>
                </div>

                {/* Social Media Section - NOW WITH ICONS */}
                <div className={styles.footer_section}>
                    <h4 className={styles.footer_sectionTitle}>Redes Sociais</h4>
                    <ul className={styles.footer_socialList}>
                        <li className={styles.footer_socialItem}>
                            <a href="https://linkedin.com/in/gustavocostaaraujo" target="_blank" rel="noopener noreferrer" className={styles.footer_socialLink}>
                                <CiLinkedin size={24} className={styles.footer_icon} />
                            </a>
                        </li>
                        <li className={styles.footer_socialItem}>
                            <a href="https://github.com/gustavocostaaraujo" target="_blank" rel="noopener noreferrer" className={styles.footer_socialLink}>
                                <FaGithub size={24} className={styles.footer_icon} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}