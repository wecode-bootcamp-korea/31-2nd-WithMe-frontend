import React from 'react';
import styled from 'styled-components';

const ProductItem = ({
  img_url,
  main_text,
  sub_text,
  location,
  time,
  price,
}) => {
  return (
    <Container>
      <Img src={img_url} alt="응애사진" />
      <Text>
        <MainText>{main_text}</MainText>
        <SubText>{sub_text}</SubText>
        <BottomText>
          <Location>{location}</Location>
          <Time>{time}</Time>
          <Price>{price}</Price>
        </BottomText>
      </Text>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3 - 10px);
  height: 400px;
  margin-right: 15px;
  margin-top: 50px;
  &:nth-child(3n) {
    margin-right: 0;
  }
`;

const Img = styled.img`
  height: 244px;
`;

const Text = styled.ul`
  margin-top: 10px;
`;

const MainText = styled.dt`
  font-size: 20px;
`;

const SubText = styled.dd`
  margin-top: 10px;
  height: 45px;
  font-size: 15px;
`;

const BottomText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 40px;
  border-top: 1px solid lightgray;
  color: lightgray;
`;

const Location = styled.span`
  margin-top: 8px;
  font-size: 10px;
`;

const Time = styled(Location)``;

const Price = styled.span`
  position: absolute;
  right: 1px;
  bottom: 1px;
`;

export default ProductItem;
