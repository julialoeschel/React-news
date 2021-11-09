import React from 'react';
import { useParams } from 'react-router-dom';

export default function Stuff(): JSX.Element {
  const params = useParams();

  return <p>{params.userId}</p>;
}
