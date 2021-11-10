import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type TagProps = {
  children: ReactNode;
};

function Tag({ children }: TagProps): JSX.Element {
  return <TagStyles>{children}</TagStyles>;
}

export default Tag;

const TagStyles = styled.span`
  color: white;
  background: linear-gradient(180deg, #76a79c, #14ad8c);
  padding: 10px;
  border-radius: 0.4em;
  border: solid 2px #1e6e5d;
  margin: 5px;
`;
