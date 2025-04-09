import styles from './Sobre.module.css';
import Image from 'next/image';
import Card from "./card";

export default function sobre() {
    return (
        <div className={styles.sobreMim}>
            <div className={styles.container_sobreMim}>
                <div className={styles.textSobreMim}>
                    <h3>Sobre Mim</h3>
                    <p>
                    Oi, meu nome é Gustavo, tenho 21 anos e estou em plena transição de carreira. Trabalhei como barbeiro por 3 anos, mas sempre tive o desejo de seguir na área de tecnologia. Atualmente, estou totalmente focado nessa nova jornada, dedicando-me diariamente a adquirir novos conhecimentos e me aprimorar para me tornar um excelente profissional no mercado                   </p>
                    <div>
                        <div className={styles.tecnologias_container_card}>
                            <Card />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}