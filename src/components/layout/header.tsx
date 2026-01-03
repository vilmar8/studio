import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:p-6 bg-transparent backdrop-blur-sm">
      <Link href="/" className="font-headline text-2xl font-bold tracking-wider text-foreground">
        STUDIO 45
      </Link>
      <Button asChild>
        <Link href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento." target="_blank" rel="noopener noreferrer">
            SOLICITAR CONTATO
        </Link>
      </Button>
    </header>
  );
}
