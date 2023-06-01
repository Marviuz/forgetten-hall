import 'react-loading-skeleton/dist/skeleton.css';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
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
      <body className="overflow-x-hidden">
        <NextTopLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
