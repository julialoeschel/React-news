import React from 'react';
import Tag from '../Tag/Tag';
import styled from 'styled-components';

type CardProps = {
  name: string;
  description: string;
  categories: string[];
};

function Card({ name, description, categories }: CardProps): JSX.Element {
  return (
    <CardStyle>
      <h2>{name}</h2>
      <span>{description}</span>
      <TagConteinerStyle>
        {categories?.map((category) => (
          <Tag key={category}>{category}</Tag>
        ))}
      </TagConteinerStyle>
    </CardStyle>
  );
}

export default Card;

const CardStyle = styled.div<Partial<CardProps>>`
  width: 500px;
  background: linear-gradient(180deg, #735a63, #59464d);
  border-radius: 0.4em;
  border: 2px solid #a68376;
  padding: 0 5px 15px 10px;
  color: #e6d6d0;
  margin-bottom: 10px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const TagConteinerStyle = styled.div<Partial<CardProps>>`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
`;
