import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WhatsAppButton from '@/components/whatsapp-button';
import { HeroSection } from '@/components/sections/hero-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { DifferentiatorsSection } from '@/components/sections/differentiators-section';

export default function Home() {
    return (
        <div 
            className="flex flex-col min-h-screen bg-background text-foreground bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('https://i.imgur.com/DAkxvQ8.png')" }}
        >
            <div className="flex flex-col min-h-screen bg-black/50">
                <Header />
                <main className="flex-grow">
                    <HeroSection />
                    <GallerySection />
                    <DifferentiatorsSection />
                </main>
                <Footer />
                <WhatsAppButton />
            </div>
        </div>
    );
}
