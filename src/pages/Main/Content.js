import React from 'react';
import styled from 'styled-components';

const Content = ({ house }) => {
  const { img_url, title, subtitle, location, running_date } = house;
  return (
    <ContentBox>
      <Image src={img_url} alt="content" />
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Rest>
        {location}
        <br />
        <br />
        {running_date}
      </Rest>
    </ContentBox>
  );
};

const ContentBox = styled.div`
  width: calc(100% / 4 - 15px);
  height: 500px;
  margin-right: 12px;
  &:nth-child(4n) {
    margin-right: 0;
  }
`;
const Image = styled.img`
  height: 60%;
  object-fit: cover;
`;
const Title = styled.h2`
  height: 50px;
  margin: 10px 0;
  color: #212121;
  font-size: 18px;
  font-weight: bold;
  font-family: SourceHanSerifK, serif;
  line-height: 1.33;
  text-align: left;
`;
const SubTitle = styled.h3`
  height: 70px;
  margin-bottom: 20px;
  color: #212121;
  font-size: 13px;
  font-weight: 400;
  font-style: normal;
  font-family: Gotham, 'Noto Sans Kr', 'Roboto', sans-serif;
  line-height: 1.58;
  text-align: left;
`;
const Rest = styled.p`
  padding-top: 5px;
  border-top: 1px solid #ddd;
  color: #757575;
  font-size: 12px;
  font-family: Gotham, 'Noto Sans KR';
  text-align: left;
`;
export default Content;
