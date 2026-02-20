import React from "react";
import Button from "../components/Button";

const Main = () => {
    return (
        <section className="w-full min-h-screen flex justify-center items-center pt-4 bg-background" id="Home">
            <div className="w-[87vw] flex flex-col justify-center items-start gap-4 max-[800px]:h-[500px] max-[800px]:justify-start">
                <h1 className="text-[40px] text-white
                ">Conheça nosso catálogo</h1>
                <h3 className="text-white">Entre em contato e faça seu pedido!</h3> 
                <a href="https://wa.link/r3rrki" target="_blank"><Button></Button></a>
            </div>
        </section>
    );
};

export default Main;

