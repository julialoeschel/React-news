import React from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import useFetch from '../../hooks/useFetch';
import type { Thing } from '../../types';

export default function Stuff(): JSX.Element {
  const { userId } = useParams();

  const Thing = useFetch<Thing>(
    `https://json-server.neuefische.de/stuff/${userId}`
  );

  return (
    <>
      {Thing ? (
        <DetailsCard
          name={Thing.name}
          description={Thing.description}
          categories={Thing.categories}
        ></DetailsCard>
      ) : (
        <DetailsCard
          name={'Error 404'}
          description={'Thing not found'}
          categories={[]}
        ></DetailsCard>
      )}
    </>
  );
}
