import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import type { Thing } from '../../types';

export default function Stuff(): JSX.Element {
  const { userId } = useParams();
  const [Thing, setThing] = useState<Thing | null>(null);

  useEffect(() => {
    async function fetchThing() {
      const response = await fetch(
        `https://json-server.neuefische.de/stuff/${userId}`
      );
      const fetchedThing = await response.json();
      fetchedThing.name
        ? setThing(fetchedThing)
        : console.error('Error - userId dies not exist');
    }
    fetchThing();
  }, []);

  return (
    <>
      <p>Hallo, you are loged in as {userId}</p>
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
