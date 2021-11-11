import React from 'react';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

export const regularCard = (): JSX.Element => (
  <Card
    name="Title"
    description="lorem ipsum und so lalalalala lorem lorem Bum Bum lorem ipsum und so lalalalala lorem lorem Bum Bum"
  />
);
