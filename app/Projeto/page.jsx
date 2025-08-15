import styles from './Projeto.module.css';
import CardProjeto from './card_projeto/CardProjeto'
export default function Projeto() {
    return (
        <div className={styles.projeto}>
            <h3>
                Projeto
            </h3>
            <h4 className={styles.title_frondEnd}>
                Front End
            </h4>
            <div className={styles.container_projeto_Front_End}>
                <CardProjeto
                    title={'Titulo'}
                    btn_projeto={"Acessar"}
                    image={"/ImagemProjeto.png"}
                    link={'https://hospedagem-de-site.netlify.app/#informacoes'}
                />

            </div>
            <h4 className={styles.title_backEnd}>
                API'S
            </h4>
            <div className={styles.container_projeto_Back_end}>
               
                <CardProjeto
                    title={'Titulo'}
                    btn_projeto={"Acessar"}
                />
            </div>
        </div>
    )
}