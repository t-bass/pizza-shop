import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={500}
    viewBox='0 0 280 500'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='0' y='301' rx='10' ry='10' width='280' height='25' />
    <circle cx='140' cy='140' r='125' />
    <rect x='0' y='344' rx='10' ry='10' width='280' height='88' />
    <rect x='0' y='455' rx='10' ry='10' width='100' height='30' />
    <rect x='140' y='446' rx='20' ry='20' width='140' height='45' />
  </ContentLoader>
);

export default Skeleton;
