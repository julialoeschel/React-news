import React from 'react';
import type { ReactNode } from 'react';

type TitleProps = {
  children: ReactNode;
};

function Title({ children }: TitleProps): JSX.Element {
  return <h1>{children}</h1>;
}

export default Title;
