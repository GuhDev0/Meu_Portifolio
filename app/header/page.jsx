import sytles from "./Header.module.css";
import Link from 'next/link'

export default function Header(){
    return(
        <header className={sytles.header}>
            <div className={sytles.container_header}>
                <div className={sytles.container_title}>
                    <Link  href="/" className={sytles.link_title}
                    style={{
                            background: "linear-gradient(90deg, rgba(99, 51, 242, 1) 8%, rgba(142, 106, 250, 1) 50%, rgba(62, 117, 243, 1) 90%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: "transparent"
                        }}>Gustavo Costa </Link>
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