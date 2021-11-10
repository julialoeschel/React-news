import React from 'react';
import Card from '../../components/Card/Card';
import type [ Thing ] from '../../types'

export default function Dashboard(): JSX.Element {

    const [things, setThings]=usestate<Thing[]>([])


    
  return (
    <main>
      <h1>Dashboard</h1>
      <Card title={'dsfdfd'} description={'dsfsdghztkjuhrgfer'} />
      <Card
        title={'dlsdkcmrhfiu'}
        description={'omdhfrkwnchrkaylcmjeuhedzcbuevrfzhsbfu'}
      />
    </main>
  );
}
