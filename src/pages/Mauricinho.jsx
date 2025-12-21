import React, { useState } from "react";
import "../index.css";
import "../App.css";
import ImageModal from "../components/Modal";

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
        <div className="gallery-grid w-[87vw]">
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

      {selectedImage && (
        <ImageModal
          img={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
