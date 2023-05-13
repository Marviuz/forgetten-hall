import { Footer } from '@/components/Feature/Footer';
import { Header } from '@/components/Feature/Header';
import { NavigationRoutes } from '@/constants/NavigationRoutes';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className="text-white">
        <div className="flex flex-col">
          <Link href={`${NavigationRoutes.Hall}/1`}>1</Link>
          <Link href={`${NavigationRoutes.Hall}/2`}>2</Link>
          <Link href={`${NavigationRoutes.Hall}/3`}>3</Link>
          <Link href={`${NavigationRoutes.Hall}/4`}>4</Link>
          <Link href={`${NavigationRoutes.Hall}/5`}>5</Link>
          <Link href={`${NavigationRoutes.Hall}/6`}>6</Link>
          <Link href={`${NavigationRoutes.Hall}/7`}>7</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
