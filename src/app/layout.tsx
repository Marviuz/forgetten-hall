import './globals.css';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
