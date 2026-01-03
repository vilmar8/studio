import { FadeInOnScroll } from "@/components/fade-in-on-scroll";

const differentiators = [
    "Execução milimétrica em Meia Esquadria.",
    "Estruturação reforçada para cubas e bancadas.",
    "Acabamento artesanal invisível."
];

export function DifferentiatorsSection() {
    return (
        <section id="differentiators" className="py-16 md:py-24 bg-background">
            <FadeInOnScroll className="container mx-auto px-4 max-w-3xl">
                <div className="flex flex-col items-center text-center">
                    <h2 className="font-headline text-3xl md:text-4xl mb-12 uppercase tracking-wider">
                        Nossos Diferenciais
                    </h2>
                    <ul className="space-y-8 text-lg md:text-xl w-full">
                        {differentiators.map((text, index) => (
                            <li key={index} className="flex items-start">
                                <span className="font-headline text-primary mr-4 text-2xl">
                                    0{index + 1}.
                                </span>
                                <span className="text-left text-foreground/80">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </FadeInOnScroll>
        </section>
    );
}
