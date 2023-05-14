import './globals.css';
import { Footer } from '@/components/feature/Footer';
import { Header } from '@/components/feature/Header';

// TODO something better
export const metadata = {
  title: 'HSR Forgotten Hall Stats',
  description: 'HSR Forgotten Hall Stats',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="text-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
