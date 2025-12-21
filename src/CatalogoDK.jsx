import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./components/ui/dialog";
import { Carousel } from "./components/ui/carousel";
import Header from "./components/Header";

//Mock de produtos 
const produtos = { bermudas: [{ id: 1, nome: "Bermuda Mauricinho Tradicional", descricao: "Grade 38–48, Cores sortidas", imagens: ["./img/mauricinho-trad.jpeg", "./img/mauricinho-sortido.jpeg"], }, { id: 2, nome: "Bermuda Mauricinho Premium", descricao: "Grade 38–48, Cores sortidos", imagens: ["./img/mauricinho-premium.jpeg", "./img/mauricinho-sortido.jpeg"], },{id: 3, nome: "Bermuda Cargo", descricao: "Grade P-GG, cores sortidas", imagens: ["./img/bermuda-cargo.jpeg", "./img/cargo-sortido.jpeg"]},], };

export default function CatalogoDK() {
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

    return (<div className="min-h-screen flex flex-col"> {/* Header */}
        <Header></Header>

        {/* Conteúdo principal */}
        <main className="flex-1 p-6 space-y-12">
            {/* Seção Bermudas */}
            <section id="bermudas">
                <h2 className="text-2xl font-semibold mb-6">Bermudas Mauricinho</h2>
                <div className="flex space-x-4 overflow-x-auto pb-4 mt-5 gap-2">
                    {produtos.bermudas.map((p) => (
                        <Card key={p.id} className="min-w-[250px] shadow hover:shadow-lg transition">
                            <CardContent className="p-2">
                                <img src={p.imagens[0]} alt={p.nome} className="rounded-xl w-full h-48 object-cover" />
                                <h3 className="font-semibold mt-2">{p.nome}</h3>
                                <p className="text-sm text-gray-600">{p.descricao}</p>
                                <Button onClick={() => setProdutoSelecionado(p)} className="mt-2 w-full bg-blue-500 hover:bg-blue-600">
                                    Ver detalhes
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </main>

        {/* Footer */}
        <footer id="contato" className="bg-blue-100 text-blue-900 p-4 text-center">
            <p>© 2025 Catálogo Têxtil | WhatsApp: (11) 99999-9999</p>
        </footer>

        {/* Modal de detalhes do produto */}
        <Dialog open={!!produtoSelecionado} onOpenChange={() => setProdutoSelecionado(null)}>
            <DialogContent className="max-w-lg">
                {produtoSelecionado && (
                    <>
                        <DialogHeader>
                            <DialogTitle>{produtoSelecionado.nome}</DialogTitle>
                        </DialogHeader>
                        <Carousel className="flex responsive">
                            {produtoSelecionado.imagens.map((img, i) => (
                                <img key={i} src={img} alt="Foto do produto" className="rounded-xl w-full h-64 object-cover" />
                            ))}
                        </Carousel>
                        <p className="mt-2 text-gray-700">{produtoSelecionado.descricao}</p>
                        <Button className="mt-4 w-full bg-green-500 hover:bg-green-600">
                            Pedir orçamento no WhatsApp
                        </Button>
                    </>
                )}
            </DialogContent>
        </Dialog>
    </div>

    );
}