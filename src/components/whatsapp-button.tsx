import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.044-.53-.044-.315 0-.58.232-.665.487-.272.78-.912 1.865-.912 2.622 0 .64.43 1.284.91 1.93.516.71 1.14 1.425 2.115 2.433.975 1.01 2.26 1.615 3.687 1.615.372 0 .88-.043 1.155-.118.427-.118.975-.232 1.43-.883.455-.65.802-1.316.802-1.566-.002-.25-.3-.372-.687-.372zm-5.421 2.592c-1.475 0-2.82-.503-3.89-1.455l-.27-.25-2.87 1.45.38-2.79-.31-.48c-1.05-1.59-1.59-3.48-1.59-5.46 0-4.78 3.89-8.67 8.67-8.67 4.78 0 8.67 3.89 8.67 8.67 0 4.78-3.89 8.67-8.67 8.67z" />
  </svg>
);


export default function WhatsAppButton() {
  const phoneNumber = "5511999999999"; // Replace with actual number
  const message = "Olá! Gostaria de solicitar um orçamento.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary p-3 shadow-lg hover:scale-110 hover:bg-primary/90 transition-all duration-300 ease-in-out"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8 text-primary-foreground" />
    </Link>
  );
}
