import React from 'react';
import styled from 'styled-components';

export default function AddThing(): JSX.Element {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <StyleForm action="submit" onSubmit={(event) => handleSubmit(event)}>
      <StyledLabel>
        Name <br />
        <input type="text" />
      </StyledLabel>
      <label>
        Description
        <br />
        <input type="text" />
      </label>
      <button type="submit">Submett Thing</button>
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
