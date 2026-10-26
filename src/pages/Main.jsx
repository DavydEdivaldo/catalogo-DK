import React, { useState, useEffect } from "react";
import linho from "../../public/img/linho.jpeg";
import jeans from "../../public/img/jeans.jpeg";
import Button from "../components/Button";

const Main = () => {
  const [slideAtual, setSlideAtual] = useState(0);
  const imagens = [linho, jeans];

  // Alterna as imagens a cada 4 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideAtual((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(intervalo); // Limpeza de memória
  }, [imagens.length]);

  return (
    <section className="relative w-full min-h-screen flex justify-center items-center !pt-4 overflow-hidden" id="Home">
      
      {/* Container do Slide de Imagens */}
      {imagens.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === slideAtual ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay escuro para garantir a leitura do texto */}
      <div className="overlay absolute inset-0 bg-black/40 z-0"></div>

      <div className="w-[87vw] flex flex-col justify-center items-start !gap-4 max-[800px]:h-[500px] max-[800px]:justify-center z-10">
        <h1 className="text-[40px] text-white">Coleção Verão 27</h1>
        <h3 className="text-white">Confira nossa coleção completa de bermudas casuais. Peça direto pelo WhatsApp.</h3>
        <a href="https://wa.link/p5blyy" target="_blank" rel="noopener noreferrer">
          <Button></Button>
        </a>
      </div>
    </section>
  );
};

export default Main;