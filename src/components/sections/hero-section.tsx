import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative flex items-center justify-center h-screen min-h-[600px] text-center px-4 overflow-hidden">
             <Image
                src="https://i.imgur.com/DAkxvQ8.png"
                alt="Background"
                fill
                className="object-cover"
                style={{ zIndex: -1 }}
                priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="z-10 flex flex-col items-center">
                <h1 className="font-headline text-4xl md:text-6xl uppercase tracking-widest text-white">
                    Precisão. Design. Porcelanato.
                </h1>
                <p className="font-body mt-4 text-lg md:text-xl max-w-2xl text-white/90">
                    A arte do corte em 45º para projetos de alto padrão.
                </p>
                <Button asChild size="lg" className="mt-8 uppercase tracking-wider">
                     <Link href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento." target="_blank" rel="noopener noreferrer">
                        Solicitar Orçamento
                    </Link>
                </Button>
            </div>
        </section>
    );
}
