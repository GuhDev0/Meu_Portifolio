import styles from './styles.module.css'
import CardContato from './card/card'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
export default function projeto() {
    return (
        <div className={styles.contato}>
            <div className={styles.container_contato}>
                <h2 className={styles.contato_title}>
                    Entre em  Contato
                </h2>
                <p className={styles.text_Contato}>
                    Tem um projeto em mente? Vamos conversar sobre como posso ajudar a <br />transformar suas ideias em realidade.
                </p>
                <div className={styles.containerCardContato}>
                    <div className={styles.InformaçõesDeContato}>
                        <h3 className='fs-4'>
                            Informações de Contato
                        </h3>
                        <p>
                            Estou sempre aberto a discutir novos projetos, oportunidades <br /> criativas ou parcerias.
                        </p>
                        <div className={`${styles.contactContainer} ${styles.emailContainer}`}>
                            <i><MdOutlineMail /></i>
                            <div className={styles.informationEmail}>
                                <p>Email</p>
                                <p>contato.devgustavo@gmail.com</p>
                            </div>
                        </div>

                        <div className={`${styles.contactContainer} ${styles.telefoneContainer}`}>
                            <i><FaPhoneAlt /></i>
                            <div className={styles.informationPhone}>
                                <p>Telefone</p>
                                <p>(11) 91479-7992</p>
                            </div>
                        </div>

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


                    <div className={styles.CardEnviarContato}>
                        <form action="">
                            <div className={styles.cardForm}>
                                <label htmlFor="NomeContato">Nome</label>
                                <input type="text" name="NomeContato" id="NomeContato_id" />
                            </div>
                            <div className={styles.cardForm}>
                                <label htmlFor="EmailContato">Email</label>
                                <input type="text" name='EmailContato' id='EmailContato_id' />
                            </div>
                            <div className={styles.cardForm}>
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea
                                    id="mensagem"
                                    name="mensagem"
                                    placeholder="Digite sua mensagem aqui..."
                                    rows="5"
                                    cols="30"
                                ></textarea>
                            </div>
                            <button type="submit">Enviar mensagem</button>
                        </form>
                    </div>

                </div>
                <div>

                </div>




            </div>
        </div>

    )
}