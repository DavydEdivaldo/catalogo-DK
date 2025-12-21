import React from 'react'
import { motion } from "motion/react"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';


export default function Catalago() {
    const indisponivel = () => toast.error("Indisponível no momento!");

    const projects = [
        {
            title: "Bermuda Mauricinho",
            description: "Feito em tecido confortavel e macio, perfeito para os dias quentes de verão.",
            image: "https://res.cloudinary.com/drx06scsw/image/upload/v1766186580/IMG_0913-Editar-3_rhhqpy.jpg",
            link: "/mauricinho"
        },
        {
            title: "Bermuda Sport fino",
            description: "Bermuda em tecido brim, com modelagem sofisticada e detalhes de alfaiataria.",
            image: "",
            onClick: indisponivel
        },
        {
            title: "Bermuda Brim Cargo",
            description: "Bermuda moderna com bolso cargo.",
            image: "",
            onClick: indisponivel
        }
    ];
    function useIsMobile() {
        const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

        useEffect(() => {
            const handleResize = () => setIsMobile(window.innerWidth <= 800);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return isMobile;
    }

    const isMobile = useIsMobile();

    return (
        <>
            <section className="flex w-full min-h-screen justify-center items-center flex-col  py-16 px-4" id='Portifolio'>
                <motion.div className="max-w-6xl mx-auto text-center mb-5"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}>
                    <h1 className="max-xl:text-xl mb-2 ">Catálogo</h1>
                    <p className="">
                        Veja mais de nossas peças.
                    </p>
                </motion.div>
                <div className="w-[87vw] h-auto">
                    <div className="w-[87vw] grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#FFFFFF]/70 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] hover:shadow-xl transition-transform duration-300"
                                initial={{ opacity: 0, x: isMobile ? -200 : index === 0 ? 300 : index === 2 ? -300 : 0, y: isMobile ? 0 : index === 1 ? 40 : 0, }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeInOut', delay: index * 0.15 }}
                                viewport={{ once: false, amount: 0.4 }}

                            >

                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                                <div className="p-5">
                                    <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                    {project.link ? (
                                        <Link
                                            to={project.link}
                                            className="inline-block text-[#40c9ff] hover:text-blue-300 font-medium"
                                        >
                                            Ver mais →
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={project.onClick}
                                            className="inline-block text-[#40c9ff] hover:text-blue-300 font-medium"
                                        >
                                            Ver mais →
                                        </button>
                                    )}

                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    );
}