"use client";

import { useState } from "react";
import Image from "next/image";

const fotos = [
    {
        src: "/foto01.jpg",
        titulo: "Reunião de abertura",
        descricao: "Início das atividades do trimestre.",
    },
    {
        src: "/foto02.jpg",
        titulo: "Trilha no mato",
        descricao: "Desbravando a natureza com segurança.",
    },
    {
        src: "/foto03.jpg",
        titulo: "Classe bíblica",
        descricao: "Estudos para fortalecer a fé.",
    },
    {
        src: "/foto04.jpg",
        titulo: "Acampamento",
        descricao: "Um fim de semana cheio de aventuras.",
    },
    {
        src: "/foto05.jpg",
        titulo: "Treinamento em nós",
        descricao: "Aprendendo técnicas de sobrevivência.",
    },
    {
        src: "/foto06.jpg",
        titulo: "Recreação no parque",
        descricao: "Atividades físicas com diversão.",
    },
];

const videos = [
    { src: "/video01.mp4", titulo: "Resumo do Acampamento" },
    { src: "/video02.mp4", titulo: "Atividades de Campo" },
    { src: "/video03.mp4", titulo: "Especial da Classe Bíblica" },
];

export default function Atividades() {
    const [abaAtiva, setAbaAtiva] = useState<"fotos" | "videos">("fotos");

    return (
        <div className="px-4 py-6 max-w-6xl mx-auto text-[#02203b]">
            <h2 className="text-3xl font-bold text-center mb-6 text-[#da650c]">
                Atividades do Clube
            </h2>

            {/* Tabs */}
            <div className="flex justify-center mb-6 space-x-4">
                <button
                    onClick={() => setAbaAtiva("fotos")}
                    className={`cursor-pointer px-4 py-2 font-semibold rounded-lg transition-colors ${abaAtiva === "fotos"
                        ? "bg-[#da650c] text-white"
                        : "bg-[#d5d2d1] text-[#02203b]"
                        }`}
                >
                    Fotos
                </button>
                <button
                    onClick={() => setAbaAtiva("videos")}
                    className={`cursor-pointer px-4 py-2 font-semibold rounded-lg transition-colors ${abaAtiva === "videos"
                        ? "bg-[#da650c] text-white"
                        : "bg-[#d5d2d1] text-[#02203b]"
                        }`}
                >
                    Vídeos
                </button>
            </div>

            {/* Conteúdo das abas */}
            {abaAtiva === "fotos" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {fotos.map((foto, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-md"
                        >
                            <Image
                                src={foto.src}
                                alt={foto.titulo}
                                width={500}
                                height={240}
                                className="w-full h-60 object-contain bg-[#f1f1f1]"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-[#02203b]">
                                    {foto.titulo}
                                </h3>
                                <p className="text-sm text-[#4a4a4a]">{foto.descricao}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-md"
                        >
                            <video
                                controls
                                src={video.src}
                                className="w-full h-64 object-contain bg-black"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-[#02203b]">
                                    {video.titulo}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
