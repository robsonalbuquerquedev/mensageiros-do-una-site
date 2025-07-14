"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full min-h-[calc(100vh-200px)] bg-[#02203b] flex flex-col items-center justify-start text-white">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-16 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          Bem-vindo aos
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-[#da6500]">
          Mensageiros do Una
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-8 w-full max-w-5xl px-4"
      >
        <Image
          src="/background.jpg"
          alt="Clube Mensageiros do Una"
          width={1200}
          height={700}
          className="w-full object-contain rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Adicional para preencher espaço em telas pequenas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-8 px-6 text-center text-sm md:text-base max-w-md"
      >
        <p className="text-[#d5d2d1] italic">
          &quot;Ninguém o despreze por você ser jovem, mas seja um exemplo para os
          fiéis...&quot; <br />
          <span className="text-white font-semibold">– 1 Timóteo 4:12</span>
        </p>

        <Link href="/sobre">
          <button className="mt-4 bg-[#da6500] hover:bg-[#c35400] text-white font-bold py-2 px-6 rounded-lg transition-colors cursor-pointer">
            Conheça mais sobre nós
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
