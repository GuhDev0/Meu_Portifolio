import styles from './Card.module.css';
import Image from 'next/image'
export default function Card(props){
    return(
        <div className={styles.card}>
            <div className={styles.container_img}>
                
            </div>
            <div>
                <p></p>
            </div>
        </div>
    )
}