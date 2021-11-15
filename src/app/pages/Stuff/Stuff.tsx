import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import useFetch from '../../hooks/useFetch';
import type { Thing } from '../../types';

export default function Stuff(): JSX.Element {
  const { userId } = useParams();
  const navigate = useNavigate();

  const Thing = useFetch<Thing>(
    `https://json-server.neuefische.de/stuff/${userId}`
  );

  async function deleteThing() {
    await fetch(`https://json-server.neuefische.de/stuff/${userId}`, {
      method: 'DELETE',
    });
    navigate('/');
  }

  return (
    <>
      {Thing ? (
        <DetailsCard
          name={Thing.name}
          description={Thing.description}
          categories={Thing.categories}
          onDelete={() => deleteThing()}
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
