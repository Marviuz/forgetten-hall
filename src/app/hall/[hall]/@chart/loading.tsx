import Color from 'color';
import Skeleton from 'react-loading-skeleton';
import { tw } from '@/utils/tw';

export default function Loading() {
  return (
    // issue https://github.com/vercel/next.js/issues/49243
    <Skeleton
      className="w-full mt-5 aspect-video"
      baseColor={tw.theme?.colors?.secondary as string}
      highlightColor={Color(tw.theme?.colors?.secondary as string)
        .darken(0.3)
        .toString()}
    />
  );
}
