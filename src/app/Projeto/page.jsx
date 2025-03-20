import styles from './Projeto.module.css';
import CardProjeto from './card_projeto'
export default function Projeto(){
    return(
        <div className={styles.projeto}>
            <h3>
                Projeto
            </h3>
            <div className={styles.container_projeto}>
                <CardProjeto 
                 title={'Titulo'}
                 btn_projeto={"Acessar"}
                />
                <CardProjeto 
                title={'Titulo'}
                btn_projeto={"Acessar"}
                />
                
                <CardProjeto 
                title={'Titulo'}
                btn_projeto={"Acessar"}
                />
            </div>
        </div>
    )
}