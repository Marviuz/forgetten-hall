import { HallNavigation } from '@/components/organisms/HallNavigation';
import { LayoutProps } from '@/utils/PageRoute';
import { HallRoute } from './HallRoute';

type HallLayoutProps = {
  chart: '@chart';
  mostUsedChars: '@mostUsedChars';
  mostUsedTeams: '@mostUsedTeams';
};

export default function HallLayout({
  children,
  params,
  ...props
}: LayoutProps<HallRoute, HallLayoutProps>) {
  return (
    <div className="container flex gap-8 mx-auto my-12">
      <main className="w-full">
        <div className="text-white">
          <div>{props.chart}</div>
          <div>{props.mostUsedChars}</div>
          <div>{props.mostUsedTeams}</div>
        </div>
      </main>
      <HallNavigation />
    </div>
  );
}
