import React from 'react';
import styled from 'styled-components';

const ProgressHouse = ({ house }) => {
  const { img_url, title, subtitle, location, closed_date } = house;

  return (
    <Content>
      <Img src={`${img_url}`} alt="house" />
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Location>{location}</Location>
      <Date> 마감날짜 : {closed_date}</Date>
    </Content>
  );
};

const Content = styled.div`
  margin: 0 auto;
  padding: 20px;
  border-top: 1px solid #ddd;
`;
const Img = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
`;
const Title = styled.h1`
  margin-top: 20px;
  color: #212121;
  font-size: 18px;
  font-weight: bold;
  font-family: Gotham, 'Noto Sans KR';
`;
const SubTitle = styled.p`
  width: 400px;
  margin-top: 20px;
  color: #212121;
  font-size: 13px;
  font-family: Gotham, 'Noto Sans KR';
  line-height: 5;
`;
const Location = styled.p`
  width: 400px;
  padding: 20px 20px 20px 0;
  color: #212121;
  border-top: 1px solid #ddd;
  font-size: 13px;
  font-family: Gotham, 'Noto Sans KR';
`;
const Date = styled.p`
  width: 400px;
  color: #212121;
  font-size: 13px;
  font-family: Gotham, 'Noto Sans KR';
`;
export default ProgressHouse;
