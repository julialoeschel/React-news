import React from 'react';
import DetailsCard from './DetailsCard';

export default {
  title: 'Component/DetailsCard',
  component: DetailsCard,
};

export const detailCard = (): JSX.Element => (
  <DetailsCard
    name="Title"
    description="lorem ipsum und so lalalalala lorem lorem Bum Bum lorem ipsum und so lalalalala lorem lorem Bum Bum "
    categories={['tanzen', 'singen', 'fröhlich sein']}
  />
);
