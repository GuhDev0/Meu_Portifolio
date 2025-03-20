import styles from './card.module.css'

export default function cardContato(props){
    return(
        <div className={styles.card}>
            <h3>
        {props.title}
            </h3>
            <div className={styles.icon_card}>
                <p>
                {props.contato}
                </p>
                
            </div>
        </div>
    )
}