import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:p-6 bg-gradient-to-b from-black/60 to-black/0 backdrop-blur-sm">
      <div className="flex-1"></div>
      <Link href="/" className="font-headline text-2xl font-bold tracking-wider text-white flex-shrink-0 text-center">
        STUDIO <span className="inline-block animate-color-cycle">45</span>
      </Link>
      <div className="flex-1 flex justify-end">
        <Button asChild>
          <Link href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento." target="_blank" rel="noopener noreferrer">
              SOLICITAR CONTATO
          </Link>
        </Button>
      </div>
    </header>
  );
}
