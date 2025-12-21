import React from "react";
import Button from "../components/Button";

const Indisponivel = () => {

    return (
        <section className="w-full min-h-screen flex justify-center items-start pt-4 py-16">
            <h1 className="font-bold text-[50px] text-red-600 ">
                Esta indisponivel no momento!
            </h1>
        </section>
    );
};

export default Indisponivel;