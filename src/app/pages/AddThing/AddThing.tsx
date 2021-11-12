import React from 'react';
import styled from 'styled-components';

export default function AddThing(): JSX.Element {
  return (
    <StyleForm>
      <label>
        Name
        <input type="text" />
      </label>
      <label>
        Description
        <input type="text" />
      </label>
      <button>Submitt Thing</button>
    </StyleForm>
  );
}

const StyleForm = styled.form`
  display: grid;
  margin-top: 20px;
`;
