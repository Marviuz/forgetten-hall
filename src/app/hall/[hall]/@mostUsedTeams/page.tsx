import { CharacterCard } from '@/components/molecules/CharacterCard';
import { HallPageHeader } from '@/components/molecules/HallPageHeader';
import { ImagePaths } from '@/constants/ImagePaths';

export default function HallPageChartSection() {
  return (
    <>
      <HallPageHeader>Most used characters in Team 1</HallPageHeader>
      <div className="py-6">
        <div className="grid grid-cols-4 gap-4">
          {Array.from(Array(4)).map((_, i) => (
            <CharacterCard
              key={i}
              image={ImagePaths.StarRailLogo}
              name="Star rail logo"
            />
          ))}
        </div>
      </div>
      <HallPageHeader>Most used characters in Team 2</HallPageHeader>
      <div className="py-6">
        <div className="grid grid-cols-4 gap-4">
          {Array.from(Array(4)).map((_, i) => (
            <CharacterCard
              key={i}
              image={ImagePaths.StarRailLogo}
              name="Star rail logo"
            />
          ))}
        </div>
      </div>
    </>
  );
}
