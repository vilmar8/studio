import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FadeInOnScroll } from "@/components/fade-in-on-scroll";

export function InspirationsSection() {
    const inspirationImages = PlaceHolderImages.filter(image => image.id.startsWith("inspiration-"));

    return (
        <section id="inspirations" className="py-16 md:py-24 bg-background">
            <FadeInOnScroll className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <h2 className="font-headline text-3xl md:text-4xl mb-12 uppercase tracking-wider">
                        Inspirações
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {inspirationImages.map((image) => (
                            <div key={image.id} className="relative aspect-square">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                    className="object-cover"
                                    data-ai-hint={image.imageHint}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </FadeInOnScroll>
        </section>
    );
}
