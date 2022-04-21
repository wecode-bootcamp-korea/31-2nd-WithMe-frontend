import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import API from '../../../config';
import { Flex } from '../../../styles/Mixin';
import AllHouse from './AllHouse';
import ProgressHouse from './ProgressHouse';

const HostMain = ({ setSelected }) => {
  const [allHouse, setAllHouse] = useState([]);
  const [progress, setProgress] = useState([]);
  const [user, setUser] = useState({ nickname: '', profile_image: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API.Hostmain}`, {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then(res => res.json())
      .then(data => {
        const places = data.results;
        setAllHouse(places);
        const progessHouses = places.filter(
          place => place.running_date !== 'is_closed'
        );
        setProgress(progessHouses);
      });
  }, []);

  useEffect(() => {
    fetch(`${API.Userinfo}`, {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setUser(data.user_info);
      });
  }, []);

  useEffect(() => {
    setSelected('main');
  }, [setSelected]);

  return (
    <MainWrap>
      <Main>
        <House>
          <HouseTop>
            <h2>전체 놀이터</h2>
          </HouseTop>
          {allHouse.length !== 0 ? (
            allHouse.map(house => <AllHouse key={house.id} house={house} />)
          ) : (
            <Empty>
              <span>정보가 없습니다.</span>
            </Empty>
          )}
        </House>
        <House>
          <HouseTop>
            <h2>진행중인 놀이터</h2>
          </HouseTop>
          {progress.length !== 0 ? (
            progress.map(house => (
              <ProgressHouse key={house.id} house={house} />
            ))
          ) : (
            <Empty>
              <span>정보가 없습니다.</span>
            </Empty>
          )}
        </House>
      </Main>

      <Article>
        <Profile>
          <ProfileImg
            style={{ backgroundImage: `url(${user.profile_image})` }}
          />
          <Name>{user.nickname}</Name>
          <Welcome>환영합니다.</Welcome>
          <Button onClick={() => navigate('/mypage')}>프로필 보기</Button>
        </Profile>
        {images.map(img => (
          <Img
            key={img.id}
            style={{
              backgroundImage: `url(${img.img_url})`,
            }}
          >
            <Commnet>{img.comment}</Commnet>
          </Img>
        ))}
      </Article>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  ${Flex('center')};
  padding: 20px;
  padding-bottom: 100px;
`;

const Main = styled.div`
  ${Flex('flex-start', 'center')};
  flex-direction: column;
`;
const House = styled.div`
  width: 650px;
  margin-top: 40px;
  border: 1px solid #ddd;
  background-color: #ffffff;
`;
const HouseTop = styled.div`
  width: 100%;
  padding: 20px;
  color: #212121;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
`;
const Empty = styled.div`
  ${Flex('center', 'center')}
  width: 100%;
  height: 200px;
  border-top: 1px solid #ddd;
  font-weight: bold;
`;
const Profile = styled.div`
  ${Flex('space-around', 'center')};
  flex-direction: column;
  width: 300px;
  height: 350px;
  padding: 40px;
  margin-top: 40px;
  margin-left: 80px;
  border: 1px solid #ddd;
  border-radius: 3px;
  background-color: #ffffff;
`;
const ProfileImg = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-size: 100%, 100%;
`;
const Name = styled.p`
  color: #212121;
  font-weight: 700;
  font-size: 20px;
  font-family: Gotham, 'Noto Sans KR';
`;
const Welcome = styled.p`
  font-size: 15px;
`;
const Button = styled.button`
  width: 100%;
  font-size: 15px;
  padding: 9px 24px;
  border-radius: 3px;
  border: 1px solid #ddd;
  color: #919191;
`;
const Article = styled.div`
  display: flex;
  flex-direction: column;
`;
const Img = styled.div`
  background-size: 100%, 100%;
  /* background-repeat: no-repeat; */
  width: 300px;
  height: 150px;
  margin-top: 40px;
  margin-left: 80px;
`;
const Commnet = styled.p`
  padding: 20px 0 0 10px;
  color: #ffffff;
`;

export default HostMain;

const images = [
  {
    id: 1,
    img_url: '/images/Main/image.png',
  },
  {
    id: 2,
    img_url: '/images/Main/hostss.png',
  },
];
