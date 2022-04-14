import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Item = ({ name, url }) => {
  return <StyledLink to={`/mypage/${url}`}>{name}</StyledLink>;
};

export default Item;

const StyledLink = styled(Link)`
  display: block;
  padding-top: 10px;
  font-size: 15px;
  font-weight: 300;
  color: #212121;
  cursor: pointer;
`;
