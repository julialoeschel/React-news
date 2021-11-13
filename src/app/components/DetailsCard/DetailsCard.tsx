import React from 'react';
import Tag from '../Tag/Tag';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

type DetailsCardProps = {
  name: string;
  description: string;
  categories: string[];
};

function DetailsCard({
  name,
  description,
  categories,
}: DetailsCardProps): JSX.Element {
  async function deleteThing() {
    console.log('delete');
    const { userId } = useParams();
    await fetch(`https://json-server.neuefische.de/stuff/${userId}`, {
      method: 'DELETE',
    }).then(() => console.log(`Delete successful ${userId}`));
  }

  return (
    <CardStyle>
      <h2>{name}</h2>
      <span>{description}</span>
      <br />
      <Link to={'/'}>
        <ButtonStyled>back</ButtonStyled>
      </Link>
      <br />
      <ButtonDeleteStyled onClick={deleteThing}>Delete</ButtonDeleteStyled>
      <TagConteinerStyle>
        {categories?.map((category) => (
          <Tag key={category}>{category}</Tag>
        ))}
      </TagConteinerStyle>
    </CardStyle>
  );
}

export default DetailsCard;

const ButtonStyled = styled.button`
  background-color: #735a63;
  border-radius: 0.4em;
  border: solid 2px #59464d;
  padding: 3px 10px;
  color: #e6d6d0;
  margin-top: 10px;
`;

const CardStyle = styled.div<Partial<DetailsCardProps>>`
  width: 500px;
  background: linear-gradient(180deg, #735a63, #59464d);
  border-radius: 0.4em;
  border: 2px solid #a68376;
  padding: 0 5px 15px 10px;
  color: #e6d6d0;
  margin-bottom: 10px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  position: relative;
`;

const TagConteinerStyle = styled.div<Partial<DetailsCardProps>>`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
`;

const ButtonDeleteStyled = styled.button`
  background-color: #735a63;
  border-radius: 0.4em;
  border: solid 2px #59464d;
  padding: 3px 10px;
  color: #e6d6d0;
  margin-top: 10px;
  position: absolute;
  right: 15px;
  top: 5px;
`;
