import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Instagram, Facebook } from 'lucide-react';

const SocialIcon = ({ href, icon: Icon, label }: { href: string, icon: React.ElementType, label: string }) => (
    <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary-foreground hover:bg-primary/80">
        <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon className="h-5 w-5" />
        </Link>
    </Button>
);

export default function Footer() {
    return (
        <footer className="w-full py-8 md:py-12 bg-secondary">
            <div className="container mx-auto text-center">
                <div className="flex justify-center items-center space-x-2 md:space-x-4 mb-6">
                    <SocialIcon href="mailto:contato@studio45.com" icon={Mail} label="Email" />
                    <SocialIcon href="https://instagram.com" icon={Instagram} label="Instagram" />
                    <SocialIcon href="https://facebook.com" icon={Facebook} label="Facebook" />
                </div>
                <p className="text-muted-foreground text-sm">
                    &copy; {new Date().getFullYear()} Studio 45. Todos os direitos reservados.
                </p>
                <p className="text-muted-foreground text-xs mt-2">
                    contato@studio45.com | (11) 99999-9999
                </p>
            </div>
        </footer>
    );
}
