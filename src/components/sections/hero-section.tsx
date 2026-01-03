import { Button } from "@/components/ui/button";
import { BackgroundLines } from "@/components/background-lines";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative flex items-center justify-center h-screen min-h-[600px] text-center px-4 overflow-hidden">
            <BackgroundLines />
            <div className="z-10 flex flex-col items-center">
                <h1 className="font-headline text-4xl md:text-6xl uppercase tracking-widest text-foreground">
                    Precisão. Design. Porcelanato.
                </h1>
                <p className="font-body mt-4 text-lg md:text-xl max-w-2xl text-foreground/80">
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
