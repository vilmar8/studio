import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FadeInOnScroll } from "@/components/fade-in-on-scroll";

export function GallerySection() {
    const galleryImages = PlaceHolderImages;

    return (
        <section id="gallery" className="py-16 md:py-24 bg-secondary">
            <FadeInOnScroll>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {galleryImages.map((image) => (
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
