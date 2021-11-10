import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/Card';
import type { Thing } from '../../types';

export default function Dashboard(): JSX.Element {
  const [things, setThings] = useState<Thing[] | null>(null);

  useEffect(() => {
    async function fetchThings() {
      const response = await fetch('https://json-server.neuefische.de/stuff');
      const fetchedThings = await response.json();
      setThings(fetchedThings);
    }
    fetchThings();
  }, []);

  return (
    <main>
      <HStyle>Dashboard</HStyle>
      {things &&
        things.map((thing) => (
          <Card
            key={thing.id}
            name={thing.name}
            description={thing.description}
            categories={thing.categories}
          />
        ))}
    </main>
  );
}

const HStyle = styled.h1`
  text-align: center;
  color: #e6d6d0;
`;
