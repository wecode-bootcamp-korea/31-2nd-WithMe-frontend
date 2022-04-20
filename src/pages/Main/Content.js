import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Content = ({ house }) => {
  const { id, img_url, title, subtitle, location, running_date } = house;
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/places/detail/${id}`);
  };

  return (
    <ContentBox onClick={goToDetail}>
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
  height: 400px;
  margin-right: 12px;
  cursor: pointer;
  &:nth-child(4n) {
    margin-right: 0;
  }
`;

const Image = styled.img`
  height: 45%;
  object-fit: cover;
`;

const Title = styled.h2`
  font-family: SourceHanSerifK, serif;
  height: 30px;
  margin: 10px 0;
  color: #212121;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.33;
  text-align: left;
`;

const SubTitle = styled.h3`
  height: 50px;
  color: #212121;
  font-size: 13px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.58;
  text-align: left;
`;

const Rest = styled.p`
  padding-top: 15px;
  border-top: 1px solid #ddd;
  color: #757575;
  font-size: 12px;
  text-align: left;
`;
export default Content;
