import React from 'react';
import { useParams } from 'react-router-dom';

export default function Stuff(): JSX.Element {
  const params = useParams();

  return <p>Hallo, you are loged in as {params.userId}</p>;
}
