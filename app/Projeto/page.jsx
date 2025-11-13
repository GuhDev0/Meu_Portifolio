import styles from './Projeto.module.css';
import CardProjeto from './card_projeto/CardProjeto'
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
export default function Projeto() {
    return (
        <div className={styles.projeto}>
            <h3 >
                Projeto
            </h3>
            <div className={styles.container_projeto_Front_End}>
                <CardProjeto
                    title={'AlfaTech'}
                    btn_projeto={"Ver Projeto"}
                    btn_codigo={"Ver Codigo"}
                    image={"/ImagemProjeto.png"}
                    descricao={`Site institucional responsivo para empresa fictícia de hospedagem, com apresentação de planos, tabela de preços e informações de contato`}
                    listIcon={[<FaHtml5 key="html" />,<SiCsswizardry  key="css"/>]}
                    link={'https://hospedagem-de-site.netlify.app/#informacoes'}
                    linkDois={''}
                />
                <CardProjeto
                    title={'GestorBarberAPP'}
                    btn_projeto={"Ver Projeto"}
                    btn_codigo={"Ver Codigo"}
                    image={"/gestorAppPrint.png"}
                    descricao={`GestorBarberApp controle completo da sua barbearia. Gerencie clientes, colaboradores, serviços e agendamentos de forma prática e organizada.`}
                    listIcon={[<FaHtml5 key="html" />,<SiCsswizardry  key="css"/>]}
                    link={'https://app-barber-msaq33a86-gustavo-costa-araujos-projects-4ec14e5e.vercel.app/'}
                    linkDois={'https://github.com/GuhDev0/AppBarber'}
                />

            </div>
        </div>
    )
}