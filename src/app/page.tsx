import { ImagePaths } from '@/constants/ImagePaths';
import { NavigationRoutes } from '@/constants/NavigationRoutes';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-around">
      {Array.from(Array(7)).map((_, i) => (
        <Link
          href={`${NavigationRoutes.Hall}/${i + 1}`}
          className="relative w-14 aspect-square"
          key={i}
        >
          <Image src={ImagePaths.StarRailLogo} alt="sample image" fill></Image>
        </Link>
      ))}
    </div>
  );
}
