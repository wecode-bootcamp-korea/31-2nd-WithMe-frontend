import React from 'react';
import styled from 'styled-components';

const Ex = () => {
  return (
    <ButtonWrap>
      <Button>hi</Button>
      <Button blue>hello</Button>
      <ButtonOn blue>im</ButtonOn>
    </ButtonWrap>
  );
};

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  margin: 200px auto;
`;

const Button = styled.div`
  width: 200px;
  outline: none;
  padding: 30px;
  font-size: 30px;
  font-weight: 700;
  margin: 20px;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  background-color: ${props => (props.blue ? 'blue' : 'black')};
  color: ${props => (props.blue ? 'black' : 'blue')};
  border-bottom: ${props => (props.blue ? 'black' : 'blue')} 10px solid;
`;

const ButtonOn = styled(Button)`
  width: 50px;
`;

export default Ex;
