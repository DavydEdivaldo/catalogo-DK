import React, { useState } from "react";
import "../index.css";
import "../App.css";
import ImageModal from "../components/Modal";
import { FaWhatsapp } from "react-icons/fa";

/**
 * Otimiza URLs do Cloudinary
 * width padrão:
 * - Grid: 600px
 * - Modal: 1400px
 */
const cloudinaryOptimize = (url, width = 600) => {
  return url.replace(
    "/upload/",
    `/upload/f_auto,q_auto,w_${width}/`
  );
};

export default function Mauricinho() {
  const numero = "5581992384292"; // seu WhatsApp
  const texto = "Olá, quero fazer um pedido";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;


  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    "https://res.cloudinary.com/drx06scsw/image/upload/v1766186576/IMG_0795-Editar_cnibfc.jpg",
    "https://res.cloudinary.com/drx06scsw/image/upload/v1766186575/IMG_0836-Editar_tyxhsq.jpg",
    "https://res.cloudinary.com/drx06scsw/image/upload/v1766186577/IMG_0877-Editar-2_copiar_rnsyjo.jpg",
    "https://res.cloudinary.com/drx06scsw/image/upload/v1766186578/IMG_0880-Editar-3_ybg6o6.jpg",
    "https://res.cloudinary.com/drx06scsw/image/upload/v1766186578/IMG_0888-Editar_dmke3j.jpg",
    "https://res.cloudinary.com/drx06scsw/image/upload/v1766186580/IMG_0913-Editar-2_ym1nrl.jpg",
    "https://res.cloudinary.com/drx06scsw/image/upload/v1766186579/IMG_0900-Editar_n2e3zj.jpg",
  ];

  return (
    <>
      <section className="flex w-full min-h-screen justify-center mt-16 max-[800px]:mt-[15%]">
        <div className="gallery-grid w-[90vw] max-[800px]:w-[95vw]">
          {photos.map((url, index) => (
            <img
              key={index}
              src={cloudinaryOptimize(url, 600)} // GRID OTIMIZADOs
              alt={`foto-${index}`}
              loading="lazy"
              decoding="async"
              className="grid-img cursor-pointer"
              onClick={() =>
                setSelectedImage(cloudinaryOptimize(url, 1400)) // MODAL HQ
              }
              style={{
                backgroundImage: `url(${cloudinaryOptimize(url, 20)})`, // BLUR PLACEHOLDER
                backgroundSize: "cover",
              }}
            />
          ))}
        </div>
      </section>
      <footer>
        <center>
          <hr className="my-3 border-[#F2F2F2] opacity-15 sm:mx-auto lg:my-6 text-center " />
          <span className="block text-sm pb-4 text-[#F2F2F2] text-center dark:text-gray-400">
            <a href={url} target="_blank" className="hover:underline flex flex-row gap-2 justify-center">
              WhatsApp <FaWhatsapp size={20} />
            </a>

          </span>
        </center>
      </footer>

      {selectedImage && (
        <ImageModal
          img={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
