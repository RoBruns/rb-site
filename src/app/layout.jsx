import { Inter, Oswald } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata = {
  title: 'Rodrigo Bruns',
  description: 'Especialista em Formação de Goleiros - Red Bull Bragantino',
  icons: {
    icon: '/favico.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${oswald.variable} dark`} suppressHydrationWarning>
      <body 
        className="w-full min-h-screen bg-obsidian font-sans text-ice selection:bg-electric-blue selection:text-white antialiased" 
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
