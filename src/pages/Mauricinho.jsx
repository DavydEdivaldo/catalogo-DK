import React, { useState, useEffect } from 'react';
import listaProdutos from '../../produtos.json';
import { FaWhatsapp } from 'react-icons/fa';

export default function Produtos() {
  // Estado para controlar a imagem em destaque (Zoom)
  const [imagemZoom, setImagemZoom] = useState(null);

  // Efeito para remover o scroll da página quando o modal estiver aberto
  useEffect(() => {
    if (imagemZoom) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [imagemZoom]);

  const formatarMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const numeroWhatsApp = "5581992649198";

  return (
    <div className="min-h-screen w-full !pt-32 !pb-16 !px-4 !sm:px-6 !lg:px-8 bg-[var(--paper)] text-[var(--ink)] font-[family-name:var(--body)] relative">
      
      {/* Cabeçalho */}
      <div className="!max-w-7xl !mx-auto !mb-10">
        <span className="!text-xs uppercase tracking-[0.3em] !font-semibold block !mb-2 text-[var(--muted)]">
          Catálogo Completo
        </span>
        <h1 className="!text-3xl !md:text-4xl !font-light !tracking-tight font-[family-name:var(--display)]">
          <span className="!font-bold text-[var(--ink)]">Shorts Mauricinho</span>
        </h1>
        <span className="!text-xs uppercase tracking-[0.3em] !font-semibold block !mt-2 text-[var(--muted)]">
          Peça direto pelo WhatsApp
        </span>
      </div>

      <main className="!max-w-7xl !mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 !gap-4">
          
          {listaProdutos.map((produto) => (
            <div
              key={produto.id}
              className="bg-white border border-[var(--line)] !rounded-xl !overflow-hidden !shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between !group"
            >
              {/* Imagem do Produto (Adicionado onClick e cursor-zoom-in) */}
              <div 
                className="w-full bg-[var(--paper)] border-b border-[var(--line)] aspect-square flex items-center justify-center overflow-hidden relative cursor-zoom-in"
                onClick={() => setImagemZoom(produto.imagem)}
              >
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="object-cover !w-full !h-full group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Ícone ou dica visual de zoom opcional no hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-[var(--ink)] text-xs px-3 py-1 rounded-full font-medium shadow-sm backdrop-blur-sm">
                    Ampliar
                  </span>
                </div>
              </div>

              {/* Informações do Card */}
              <div className="!p-4 flex flex-col flex-grow justify-between cursor-default">
                <div className="!space-y-1">
                  <h3 className="!text-sm !font-medium !line-clamp-2 !tracking-wide !leading-snug text-[var(--ink)] group-hover:text-[var(--tomato)] transition-colors">
                    {produto.nome}
                  </h3>

                  {produto.desconto && (
                    <span className="!text-xs line-through block text-[var(--muted)]">
                      {formatarMoeda(produto.precoOriginal)}
                    </span>
                  )}
                </div>

                <div className="!pt-3 !space-y-1.5">
                  <div className="flex items-baseline !gap-2 flex-wrap">
                    <span className="!text-xl !font-semibold !tracking-tight text-[var(--ink)] font-[family-name:var(--display)]">
                      {formatarMoeda(produto.preco)}
                    </span>
                    {produto.desconto && (
                      <span className="!text-xs !font-bold text-[var(--tomato)] !tracking-wide">
                        {produto.desconto}
                      </span>
                    )}
                  </div>

                  <div className='flex justify-between items-end !pt-1'>
                    <div className="flex flex-col !gap-1 !pt-1">
                      {produto.info && (
                        <span className="!text-xs !font-medium text-[var(--tomato)] flex items-center !gap-1">
                          Oferta exclusiva para atacado!!
                        </span>
                      )}
                      {produto.varejo && (
                        <span className="text-[10px] !font-black italic bg-[var(--ink)] text-[var(--paper)] !px-1.5 !py-0.5 !rounded w-max !tracking-wider uppercase">
                          <a href={produto.varejo} target="_blank" rel="noopener noreferrer">
                            ⚡VAREJO
                          </a>
                        </span>
                      )}
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const mensagem = encodeURIComponent(`Olá! Tenho interesse no ${produto.nome} que vi no catálogo.`);
                        window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, '_blank');
                      }}
                      className="bg-green-500 hover:opacity-80 text-[var(--paper)] !p-2.5 !rounded-full transition-all duration-300 active:scale-90 !shadow-md flex items-center justify-center group-hover:animate-bounce"
                      title="Pedir pelo WhatsApp"
                    >
                      <FaWhatsapp className="w-4 h-4 cursor-pointer" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal de Zoom */}
      {imagemZoom && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setImagemZoom(null)}
        >
          {/* Botão Fechar */}
          <button 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white bg-black/50 hover:bg-white hover:text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setImagemZoom(null);
            }}
          >
            &times;
          </button>
          
          {/* Imagem Ampliada */}
          <img 
            src={imagemZoom} 
            alt="Zoom do Produto" 
            className="max-w-full max-h-full object-contain rounded-md shadow-2xl select-none"
            onClick={(e) => e.stopPropagation()} // Evita fechar se clicar na própria imagem sem querer (opcional, pode remover se preferir que feche ao clicar nela)
          />
        </div>
      )}

    </div>
  );
}