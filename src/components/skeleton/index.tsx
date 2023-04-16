import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    style={{ borderRadius: '10px' }}
    speed={3}
    width={409}
    height={620.5}
    viewBox="0 0 409 620"
    backgroundColor="#202735"
    foregroundColor="#666"
  >
    <rect x="216" y="267" rx="0" ry="0" width="1" height="3" />
    <rect x="186" y="439" rx="0" ry="0" width="1" height="1" />
    <rect x="26" y="620" rx="0" ry="0" width="409" height="324" />
    <rect x="0" y="0" rx="0" ry="0" width="409" height="620" />
  </ContentLoader>
);
