import styles from "./Sobre.module.css";
import Image from "next/image";
import Card from "./card";

export default function Sobre() {
  return (
    <div
      className={`${styles.sobreMim} 
        min-h-screen 
        px-4 sm:px-6 md:px-16 
        py-16 sm:py-20 md:py-28`}
    >
      <div
        className={`${styles.container_sobreMim} 
          flex flex-col lg:flex-row gap-8 lg:gap-16 items-center p-5`}
      >
        {/* Perfil */}
        <div className="relative rounded-full p-1 sm:p-2 md:p-3 lg:p-4 flex justify-center">
          
          {/* Anel brilhante ao redor */}
          <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(142,106,250,0.7)] animate-pulse pointer-events-none"></div>
          
          {/* Imagem */}
          <div className="relative rounded-full overflow-hidden w-[140px] sm:w-[180px] md:w-[220px] lg:w-[300px] h-[140px] sm:h-[180px] md:h-[220px] lg:h-[300px]">
            <Image
              src="/perfil.jpg"
              width={300}
              height={300}
              alt="Foto de perfil"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Texto */}
        <div className={`${styles.textSobreMim} text-center lg:text-left`}>
          <h4
            className="fs-2 fw-bold text-lg sm:text-xl md:text-2xl lg:text-3xl"
            style={{
              background:
                "linear-gradient(90deg, rgba(99, 51, 242, 1) 8%, rgba(142, 106, 250, 1) 50%, rgba(62, 117, 243, 1) 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Gustavo - Desenvolvedor de software
          </h4>

          <p className="fs-5 mt-2 text-sm sm:text-base md:text-lg" style={{ color: "#b1b1b1ff" }}>
            com vocação para soluções completas
          </p>

          <p className="fs-6 mt-4 leading-relaxed text-xs sm:text-sm md:text-base">
            Experiência com{" "}
            <b style={{ color: "#7d7979ff" }}>resolução de problemas</b>, atento a
            código bem estruturado e detalhes que fazem a diferença. Sempre
            aprendendo e buscando as melhores práticas para criar soluções
            eficientes e escaláveis.
            <br /><br />
            Especialista em tecnologias backend modernas, com foco em
            desenvolvimento full stack para criar experiências web completas e
            performáticas.
          </p>

          <div className={`${styles.tecnologias_container_card} mt-6`}>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
