import React from 'react';
import Tag from './Tag';

export default {
  title: 'Component/Tag',
  component: Tag,
};

export const longTag = (): JSX.Element => <Tag>Jonglieren im Winter</Tag>;
export const regularTag = (): JSX.Element => <Tag>Tanzen</Tag>;
