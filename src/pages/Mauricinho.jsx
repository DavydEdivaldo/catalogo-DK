import React from 'react';
import listaProdutos from '../../produtos.json';

export default function Produtos() {
  
 
  const formatarMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="min-h-screen w-full bg-[#121214] !text-white !pt-32 !pb-16 !px-4 !sm:px-6 !lg:px-8 !font-sans">
      
      {/* Cabeçalho */}
      <div className="!max-w-7xl mx-auto !mb-10">
        <span className="!text-xs uppercase tracking-[0.3em] !text-neutral-400 !font-semibold block !mb-2">
          Catálogo Completo
        </span>
        <h1 className="!text-3xl !md:text-4xl !font-light !tracking-tight">
          de <span className="!font-medium bg-clip-text text-transparent bg-gradient-to-r !from-white !to-neutral-400">Shorts Mauricinho</span>
        </h1>
      </div>

      
      <main className="!max-w-7xl !mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 !gap-4">
          
          {listaProdutos.map((produto) => (
            <div 
              key={produto.id} 
              className="bg-[#1e1e22] !rounded-xl !overflow-hidden !shadow-md !hover:shadow-2xl !hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border !border-neutral-800 !group cursor-pointer"
            >
              {/* Imagem do Produto */}
              <div className="w-full bg-[#29292e] aspect-square flex items-center justify-center overflow-hidden !p-4 relative">
                <img 
                  src={produto.imagem} 
                  alt={produto.nome}
                  className="object-cover w-full h-full !group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Informações do Card */}
              <div className="!p-4 flex flex-col flex-grow justify-between bg-[#1e1e22]">
                <div className="!space-y-1">
                  
                  <h3 className="!text-sm !font-light !text-neutral-200 !line-clamp-2 !tracking-wide !leading-snug !group-hover:text-white transition-colors">
                    {produto.nome}
                  </h3>
                  
                  {/* Preço Original (Riscado se houver desconto) */}
                  {produto.desconto && (
                    <span className="!text-xs !text-neutral-500 line-through block">
                      {formatarMoeda(produto.precoOriginal)}
                    </span>
                  )}
                </div>

                <div className="!pt-3 !space-y-1.5">
                  {/* Preço Atual e Tag de Desconto */}
                  <div className="flex items-baseline !gap-2 flex-wrap">
                    <span className="!text-xl !font-normal !text-white !tracking-tight">
                      {formatarMoeda(produto.preco)}
                    </span>
                    {produto.desconto && (
                      <span className="!text-xs !font-semibold !text-emerald-400 !tracking-wide">
                        {produto.desconto}
                      </span>
                    )}
                  </div>

                  {/* Parcelamento Simulado */}
                  <span className="!text-xs !text-neutral-400 block !font-light">
                    ou 10x de {formatarMoeda(produto.preco / 10)} sem juros
                  </span>

                  {/* Benefícios (Frete Grátis / Full) */}
                  <div className="flex flex-col !gap-1 !pt-1">
                    {produto.freteGratis && (
                      <span className="!text-xs !font-medium !text-emerald-400 flex items-center !gap-1">
                        Frete grátis
                      </span>
                    )}
                    {produto.full && (
                      <span className="text-[10px] !font-black italic !bg-emerald-500 !text-black !px-1.5 !py-0.5 !rounded w-max !tracking-wider uppercase">
                        ⚡ FULL
                      </span>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>
      </main>
    </div>
  );
}