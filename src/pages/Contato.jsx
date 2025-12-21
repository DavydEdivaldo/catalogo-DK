import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const texto = `
Olá! 👋

Nome: ${form.nome}
Email: ${form.email}

Mensagem:
${form.mensagem}
    `;

    const numero = "5581992384292"; // seu WhatsApp
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    toast.success("Redirecionando para o WhatsApp 🚀");

    window.open(url, "_blank");
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section
      id="contato"
      className="w-full min-h-screen flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false }}
        className="w-full max-w-md bg-[#E6E6E6]/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-2 text-center">
          Fale com a gente
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Preencha o formulário e fale direto no WhatsApp
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="nome"
            required
            placeholder="Seu nome"
            value={form.nome}
            onChange={handleChange}
            className="bg-white rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Seu email"
            value={form.email}
            onChange={handleChange}
            className="bg-white rounded-xl px-4 py-3 outline-none"
          />

          <textarea
            name="mensagem"
            required
            rows="4"
            placeholder="Sua mensagem"
            value={form.mensagem}
            onChange={handleChange}
            className="bg-white rounded-xl px-4 py-3 outline-none resize-none"
          />

          <button
            type="submit"
            className="bg-green-500 text-black font-semibold py-3 rounded-full hover:bg-green-400 transition flex flex-rol justify-center gap-4"
         >
            Enviar no WhatsApp <FaWhatsapp size={20} />
          </button>
        </form>
      </motion.div>
    </section>
  );
}
