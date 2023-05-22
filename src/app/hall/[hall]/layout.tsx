import { HallPageHeader } from '@/components/molecules/HallPageHeader';
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
    <div className="w-full max-w-[1920px] px-6 flex flex-col-reverse md:flex-row items-start gap-8 mx-auto my-12">
      <main className="w-full">
        <div className="text-white">
          <div>
            <HallPageHeader>
              Most used characters in Hall #{params.hall}
            </HallPageHeader>
            {props.chart}
          </div>
          <div>{props.mostUsedChars}</div>
          <div>{props.mostUsedTeams}</div>
        </div>
      </main>
      <HallNavigation />
    </div>
  );
}
