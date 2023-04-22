import { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const SkeletonSlider: FC = () => (
  <ContentLoader
    speed={5}
    width={409}
    height={620.5}
    viewBox="0 0 409 620"
    backgroundColor="#202735"
    foregroundColor="#7e889c"
  >
    <rect x="26" y="620" rx="0" ry="0" width="409" height="324" />
    <rect x="0" y="0" rx="0" ry="0" width="409" height="620" />
  </ContentLoader>
);
