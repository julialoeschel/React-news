import React from 'react';
import Tag from '../Tag/Tag';
import styled from 'styled-components';

type CardProps = {
  title: string;
  description: string;
  showDetail?: boolean;
  TagEntry?: string[]; // evt gibt es das array nicht, daher ein ?
};

function Card({
  title,
  description,
  showDetail = false,
  TagEntry,
}: CardProps): JSX.Element {
  return (
    <CardStyle>
      <h2>{title}</h2>
      <span>{description}</span>
      {showDetail ? (
        <TagConteinerStyle showDetail={showDetail}>
          {TagEntry?.map(
            (
              entry //das ? macht, dass es bei falsy nicht weiter macht -> optional training
            ) => (
              <Tag children={entry} />
            )
          )}
        </TagConteinerStyle>
      ) : (
        ''
      )}
    </CardStyle>
  );
}

export default Card;

const CardStyle = styled.div<Partial<CardProps>>`
  width: 500px;
  background: linear-gradient(180deg, #bee2da, #81f7dd);
  border-radius: 0.4em;
  border: 2px solid #1e6e5d;
  padding: 0 5px 15px 5px;
  color: #1e6e5d;
`;

const TagConteinerStyle = styled.div<Partial<CardProps>>`
  margin-top: 25px;
`;