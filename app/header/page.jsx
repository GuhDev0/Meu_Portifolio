import sytles from "./Header.module.css";
import Link from 'next/link'

export default function Header(){
    return(
        <header className={sytles.header}>
            <div className={sytles.container_header}>
                <div className={sytles.container_title}>
                    <Link  href="/" className={sytles.link_title}>Gustavo Costa Araujo</Link>
                </div>
                <nav className={sytles.nav_list}>
                    <ul>
                    <li>
                        <Link className={sytles.link} href='/'>
                                Home
                            </Link>
                    </li>
                        <li>
                            <Link   className={sytles.link} href='/Sobre'>
                                Sobre
                            </Link>
                        </li>
                        
                        <li>
                            <Link href='/Projeto' className={sytles.link} >
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link className={sytles.link} href='/contato'>
                                Contato
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};