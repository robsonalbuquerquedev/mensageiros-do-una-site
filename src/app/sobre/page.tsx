"use client";

import { Star } from "lucide-react";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

export default function Sobre() {
    return (
        <div className="px-4 py-8 max-w-3xl mx-auto text-[#02203b]">
            <FadeInWhenVisible delay={0.1}>
                <h2 className="text-3xl font-bold text-center text-[#da650c] mb-6">
                    Sobre Nós
                </h2>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
                <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(3)].map((_, i) => (
                        <Star key={i} fill="#da650c" stroke="#da650c" size={24} />
                    ))}
                    <span className="ml-2 text-sm text-[#02203b] font-medium">
                        Classificação: Três Estrelas
                    </span>
                </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
                <div className="bg-[#f7f7f7] rounded-lg p-4 mb-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-[#02203b] mb-2">
                        📍 Localização
                    </h3>
                    <p>Rua Doutor Leopoldo Lins, 191</p>
                    <p>Bairro: Modelo</p>
                    <p>Palmares – PE</p>
                </div>
            </FadeInWhenVisible>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <FadeInWhenVisible delay={0.4}>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-[#da650c] shadow">
                        <h3 className="text-lg font-semibold mb-2">📅 Fundação</h3>
                        <p>30 de março de 2002</p>
                    </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.5}>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-[#da650c] shadow">
                        <h3 className="text-lg font-semibold mb-2">🕘 Reunião</h3>
                        <p>Domingo às 09:30</p>
                    </div>
                </FadeInWhenVisible>
            </div>

            <FadeInWhenVisible delay={0.6}>
                <div className="bg-[#02203b] text-white p-6 rounded-xl shadow-md leading-relaxed">
                    <p className="text-justify">
                        O Clube <strong>Mensageiros do Una</strong> foi fundado há mais de 20 anos
                        e por muito tempo foi referência para os clubes da Associação Pernambucana.
                        A direção do clube foi passada de geração em geração, desbravadores se
                        tornaram diretores. Depois de um longo período de inatividade, o clube
                        Mensageiros está voltando determinado e pronto para{" "}
                        <strong>salvar do pecado e guiar no serviço</strong>.
                    </p>
                </div>
            </FadeInWhenVisible>
        </div>
    );
}
