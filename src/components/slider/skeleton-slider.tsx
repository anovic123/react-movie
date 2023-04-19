import { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const SkeletonSlider: FC = () => (
  <ContentLoader
    style={{ borderRadius: 10 }}
    speed={3}
    width={538}
    height={309}
    viewBox="0 0 538 309"
    backgroundColor="#060d17"
    foregroundColor="#ecebeb"
  >
    <rect x="216" y="267" rx="0" ry="0" width="1" height="3" />
    <rect x="186" y="439" rx="0" ry="0" width="1" height="1" />
    <rect x="26" y="620" rx="0" ry="0" width="409" height="324" />
    <rect x="0" y="0" rx="0" ry="0" width="538" height="309" />
  </ContentLoader>
);
