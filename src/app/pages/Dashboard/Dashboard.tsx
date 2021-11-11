import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
          <StyledLink to={`/stuff/${thing.id}`} key={thing.id}>
            <Card name={thing.name} description={thing.description} />
          </StyledLink>
        ))}
    </main>
  );
}

const HStyle = styled.h1`
  text-align: center;
  color: #e6d6d0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
