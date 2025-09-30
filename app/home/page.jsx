import Link from 'next/link';
import styles from './Home.module.css';
import Image from 'next/image'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";

export default function PageHome() {
    const socialLinks = [
        { icon: <FaGithub />, url: "https://github.com/GuhDev0" },
        { icon: <CiLinkedin />, url: "https://www.linkedin.com/in/gustavo-costa-araujo-/" }
    ]



    return (
        <div className='h-130 position-relative'>
            <div className='text-center tex-lg '>
                <h1 className=' fw-bold   ' style={{ fontSize: "5em" }}>Desenvolvedor de software <br /> Back / Front</h1>
                <p className='fs-5  fw-bold  ' style={{ color: '#b1b1b1ff' }}>Construindo soluções web modernas e eficientes <br />com as melhores tecnologias</p>

                <div className="flex justify-center items-center gap-6 mt-4">
                    <button
                        type="button"
                        className="btn text-nowrap btn-lg fw-bold"
                        style={{ backgroundColor: '#8E44AD', color: "white" }}
                    >
                        ver projetos
                    </button>

                    <div className="flex gap-4 text-2xl">
                        {socialLinks.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <button type='button' className='btn btn-lg position-absolute bottom-0 start-50 translate-middle-x mb-3 bounce' >
                    <i >
                        <BsArrowDownCircle size={50}/>
                    </i>
                </button>

            </div>

        </div>
    )

}