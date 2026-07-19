import React from "react";
import video from "../../public/img/bg-hero-dk.mp4"
import Button from "../components/Button";

const Main = () => {
    return (
        <section className="relative w-full min-h-screen flex justify-center items-center !pt-4 overflow-hidden" id="Home">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="bg-video">
                <source src={video} type="video/mp4" />
                Seu navegador não suporta video.
            </video>

            <div className="overlay"></div>

            <div className="w-[87vw] flex flex-col justify-center items-start !gap-4 max-[800px]:h-[500px] max-[800px]:justify-center z-10">
                <h1 className="text-[40px] text-white
                ">Coleção DK Confecções</h1>
                <h3 className="text-white">Confira nossa coleção completa de bermudas casuais. Peça direto pelo WhatsApp.</h3>
                <a href="https://wa.link/r3rrki" target="_blank"><Button></Button></a>
            </div>
        </section>
    );
};

export default Main;

