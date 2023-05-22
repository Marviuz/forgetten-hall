import { faker } from '@faker-js/faker';
import { HallChart } from '@/components/organisms/HallChart';
import CHARACTERS from '@/constants/characters';
import { PageProps } from '@/utils/PageRoute';
import { HallRoute } from '../HallRoute';

export default function HallPageChartSection({ params }: PageProps<HallRoute>) {
  return (
    // TODO add filters
    <HallChart
      chartTitle={`Hall #${params.hall}`}
      data={CHARACTERS.map((character) => ({
        data: faker.number.int({ min: 1000, max: 10000000 }),
        label: character.name,
      })).sort((a, b) => b.data - a.data)}
    />
  );
}
