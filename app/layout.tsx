import './globals.css';

// Este layout es SOLO para la raíz (que redirige)
// No tiene Navbar ni Footer, solo lo básico para que funcione Next.js
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}