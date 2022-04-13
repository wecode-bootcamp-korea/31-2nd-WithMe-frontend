import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const ContentList = ({ houses }) => {
  return (
    <List>
      {houses && houses.map(house => <Content key={house.id} house={house} />)}
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1140px;
  margin-left: 12px;
`;
export default ContentList;
