import PageHome from "./home/page";
import styles from "./page.module.css";
import SobreMim from "./Sobre/page";
import Projeto from "./Projeto/page"
import Contato from './contato/page'

export default function Home() {
  return (
    <div className={styles.homme}>
      <PageHome />
      <SobreMim />
      <Projeto />
      <Contato />
    </div>
      
    
  )
}
