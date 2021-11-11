import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../components/Card/Card';
import useFetch from '../../hooks/useFetch';
import type { Thing } from '../../types';

export default function Dashboard(): JSX.Element {
  const things = useFetch<Thing[]>('https://json-server.neuefische.de/stuff');

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
