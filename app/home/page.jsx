import Link from 'next/link';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";

export default function PageHome() {
    const socialLinks = [
        { icon: <FaGithub />, url: "https://github.com/GuhDev0" },
        { icon: <CiLinkedin />, url: "https://www.linkedin.com/in/gustavo-costa-araujo-/" }
    ];

    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center bg-[#0f131a] text-white px-4 md:px-16">

            {/* Conteúdo central */}
            <div className="text-center">
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[9rem]2xl:text-[11rem] leading-none">
                    Desenvolvedor de software <br /> FullStack
                </h1>


                <p className="mt-4 text-gray-400 text-base sm:text-lg md:text-xl">
                    Construindo soluções web modernas e eficientes <br />
                    com as melhores tecnologias
                </p>

                {/* Botões e redes sociais */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mt-6">

                    <Link
                        href="/Projeto"
                        className="px-6 py-3 bg-[#8E44AD] text-white font-bold rounded-lg text-lg hover:bg-purple-700 transition"
                    >
                        Projetos
                    </Link>

                    <div className="flex gap-4 text-2xl justify-center">
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
            </div>

            {/* Botão seta animada */}
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
                <BsArrowDownCircle size={50} />
            </button>

        </div>
    );
}
