import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-flex;
  width: 1em;
  height: 1em;
  border-radius: 0.25em;
  background-color: #fff;
  background-size: cover;
  background-position: center center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
  span {
    font-size: 0.5em;
    font-weight: bold;
  }
`;

const WrapperRound = styled(Wrapper)`
  border-radius: 50%;
`;

interface Prop {
  size: number;
  name: string;
  imageUrl?: string;
  bgColor: string;
  type?: 'square' | 'round';
}
export const UserProfile = ({ size, name, imageUrl, bgColor, type }: Prop) => {
  const pxSize = `${size}px`;
  const Component = type === 'square' ? Wrapper : WrapperRound;
  return (
    <Component
      style={{ fontSize: pxSize, backgroundImage: imageUrl, backgroundColor: bgColor }}
    >
      <span className={imageUrl ? 'off-grid' : ''}>{name[0]}</span>
      <span className="off-grid">{name.slice(1)}</span>
    </Component>
  );
};
