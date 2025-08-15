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
                    Sou Gustavo, desenvolvedor back-end com 2 anos de experiência em estudos de programação. Iniciei minha jornada pelo front-end, mas ao conhecer o Node.js, descobri minha vocação para o desenvolvimento back-end. Atualmente, me especializo em Java e curso Análise e Desenvolvimento de Sistemas, buscando minha primeira oportunidade para aplicar meus conhecimentos na prática e contribuir com soluções no mercado de tecnologia.

Além do universo da programação, sou apaixonado por esportes e acredito que disciplina e foco, presentes no esporte, também são essenciais no desenvolvimento de software. Gosto de praticar musculação, jogar futebol e encontrar formas de unir tecnologia e esportes na minha vida</p>
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