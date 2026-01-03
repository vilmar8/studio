export default function Footer() {
    return (
        <footer className="w-full py-6 bg-secondary">
            <div className="container mx-auto text-center text-muted-foreground text-sm">
                <p>&copy; {new Date().getFullYear()} Studio 45. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
