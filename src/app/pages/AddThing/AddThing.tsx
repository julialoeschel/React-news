import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

export default function AddThing(): JSX.Element {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await fetch('https://json-server.neuefische.de/stuff', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name, description }),
    });
    console.log(name, description);
    navigate('/');
  }

  return (
    <StyleForm action="submit" onSubmit={(event) => handleSubmit(event)}>
      <StyledLabel>
        Name <br />
        <input type="text" onChange={(event) => setName(event.target.value)} />
      </StyledLabel>
      <label>
        Description
        <br />
        <input
          type="text"
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <input type="submit"></input>
    </StyleForm>
  );
}

const StyleForm = styled.form`
  display: grid;
  margin-top: 20px;
  gap: 20px;
  border: solid 2px;
  padding: 10px;
  display: grid;
`;

const StyledLabel = styled.label`
  display: block;
`;
