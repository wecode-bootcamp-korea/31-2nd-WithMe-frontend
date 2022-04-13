import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../../styles/Mixin';
const AllHouse = ({ house }) => {
  const { img_url, title, subtitle, location, running_date } = house;
  return (
    <AllHouseContent
      style={running_date === 'is_closed' ? { opacity: 0.2 } : { opacity: 1 }}
    >
      <Img src={`${img_url}`} alt="AllHouse" />
      <ContentRight>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <AddressWrap>
          <Place>장소</Place>
          <Address>{location}</Address>
        </AddressWrap>
      </ContentRight>
    </AllHouseContent>
  );
};

const AllHouseContent = styled.div`
  ${Flex('flex-start', 'center')};
  padding: 20px;
  border-top: 1px solid #ddd;
`;
const Img = styled.img`
  width: 130px;
  height: 90px;
  object-fit: cover;
`;
const ContentRight = styled.div`
  margin-left: 20px;
`;
const Title = styled.h1`
  margin-top: 0;
  color: #212121;
  font-size: 18px;
  font-weight: bold;
  font-family: Gotham, 'Noto Sans KR';
  line-height: 26px;
`;
const SubTitle = styled.p`
  width: 300px;
  margin-top: 10px;
  color: #212121;
  font-size: 13px;
  font-family: Gotham, 'Noto Sans KR';
  line-height: 1.46;
`;
const AddressWrap = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 10px;
`;
const Place = styled.p`
  width: 27px;
  color: #b2b2b2;
  font-size: 13px;
`;
const Address = styled.p`
  margin-left: 20px;
  color: #212121;
  font-size: 13px;
`;
export default AllHouse;
