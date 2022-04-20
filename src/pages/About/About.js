import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <IntroBox>
        <h1>
          <span>나랑 놀래</span>에 오신 걸<br /> 환영해요
        </h1>
        <img src="/images/Main/friend.png" alt="img" />
      </IntroBox>
      <RulesBox>
        <h1>
          취향이 담긴 개인 공간에 모여
          <br /> 대화를 나누는 커뮤니티
        </h1>
        <h2>
          나랑놀래는 자신의 공간에서 모임을 주최하고 이끌어갈 호스트를 중심으로
          <br />
          취향이 맞는 사람들을 연결해요. 연결된 사람들은 가정집, 작업실,
          동네가게 등<br /> 모임이 진행되는 공간에 모여 공통된 관심사로 대화하며
          취향을 나눠요.
        </h2>
        <HostBox>
          {HOST_INFO.map(data => {
            return (
              <InfoBox key={data.id}>
                <Namebox>
                  <Name>
                    <EngName>{data.role}</EngName>
                    <KoName>{data.name}</KoName>
                  </Name>
                  <img src={data.image} alt="host" />
                </Namebox>
                <Description>{data.info}</Description>
              </InfoBox>
            );
          })}
        </HostBox>
      </RulesBox>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 100vw;
`;
const IntroBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 80px 0 80px;
  background-color: #f8f9f4;

  h1 {
    margin: 0;
    padding: 34px;
    text-align: left;
    font-family: SourceHanSerifK, serif;
    font-size: 34px;
    color: #fe8256;
    line-height: 1.39;
    font-weight: 100;

    span {
      font-weight: 900;
    }
  }

  img {
    width: 300px;
    height: 300px;
  }
`;
const RulesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 30px;
    color: #212121;
    font-weight: 600;
    line-height: 1.45;
    margin-bottom: 45px;
    font-family: SourceHanSerifK, serif;
    padding-top: 70px;
  }

  h2 {
    margin-bottom: 3rem;
    font-size: 20px;
    line-height: 1.55;
    letter-spacing: -1px;
    color: #757575;
    font-weight: 400;
  }
`;

const HostBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  width: 800px;
  padding: 30px;
  display: flex;
  margin-bottom: 4rem;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
`;

const InfoBox = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`;

const Namebox = styled.div`
  display: flex;
  gap: 8rem;
  margin-bottom: 1rem;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
`;

const EngName = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: rgb(194, 223, 221);
  padding-bottom: 1rem;
`;
const KoName = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const Description = styled.p`
  width: 300px;
  font-size: 15px;
  line-height: 1.53;
  color: #9e9e9e;
`;

const HOST_INFO = [
  {
    id: 1,
    role: 'Host',
    name: '호스트',
    info: '좋아하는 주제로 모임을 만들어 자신의 공간으로 사람들을 초대해요. 초대를 받고 놀러 온 이들과 취향을 공유하며 수익을 창출해요.',
    image: '/images/Main/hostimg.png',
  },
  {
    id: 2,
    role: 'Guest',
    name: '게스트',
    info: '마음에 드는 주제로 모임이 열린 공간에 놀러 가요. 낯선 공간을 구경하고 사람들과 대화하며 즐거운 시간을 보내요.',
    image: '/images/Main/guestimg.png',
  },
];
