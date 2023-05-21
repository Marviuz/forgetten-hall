import Image from 'next/image';
import Link from 'next/link';
import { ImagePaths } from '@/constants/ImagePaths';
import { NavigationRoutes } from '@/constants/NavigationRoutes';

// TODO actual routes
const HALL_ROUTES = Array.from(Array(7)).map((_, i) => ({
  hallNumber: i + 1,
  image: ImagePaths.StarRailLogo,
  label: 'sample image',
}));

export default function Home() {
  return (
    <main className="text-white">
      <div className="flex justify-around">
        {HALL_ROUTES.map(({ hallNumber, image, label }, i) => (
          <Link
            href={`${NavigationRoutes.Hall}/${hallNumber}`}
            className="relative w-14 aspect-square"
            key={i}
          >
            <Image src={image} alt={label} fill />
          </Link>
        ))}
      </div>
    </main>
  );
}
