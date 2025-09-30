import styles from './Sobre.module.css';
import Image from 'next/image';
import Card from "./card";

export default function Sobre() {
    return (
        <div className={styles.sobreMim}>
            <h3 className='fs-1 fw-bold'>Sobre Mim</h3>
            <div className={styles.container_sobreMim}>
                <div className={styles.container_card_PERFIL}>
                    <div className={styles.card_PERFIL}>
                        <Image width={300}height={10} className={styles.perfil_img} src={"/perfil.jpg"}/>
                    </div>
                </div>
                <div className={styles.textSobreMim}>
                    <h4 className='fs-2  fw-bold' 
                        style={{
                            background: "linear-gradient(90deg, rgba(99, 51, 242, 1) 8%, rgba(142, 106, 250, 1) 50%, rgba(62, 117, 243, 1) 90%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: "transparent"
                        }} >
                        Gustavo - Desenvolvedor de software
                    </h4>
                    <p className='fs-5 ' style={{ color: "#b1b1b1ff" }}>com vocação para soluções completas</p>
                    <p className='fs-6'>
                        Experiência com <b style={{ color: "#7d7979ff" }}>resolução de problemas</b>, atento a código bem estruturado e detalhes que fazem a diferença. Sempre aprendendo e buscando as melhores práticas para criar soluções eficientes e escaláveis.<br />
                        Especialista em tecnologias backend modernas, com foco em desenvolvimento full stack para criar experiências web completas e performáticas.    </p>

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