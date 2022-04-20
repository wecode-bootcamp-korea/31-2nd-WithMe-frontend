import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import styled from 'styled-components';
import ContentList from './ContentList';
import API from '../../config';
import { Flex } from '../../styles/Mixin';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Main = () => {
  const [houses, setHouses] = useState([]);
  const [housesKey, setHousesKey] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API.Main}`)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          alert('통신에러');
        }
      })
      .then(data => {
        setHouses(data);
        setHousesKey(Object.keys(data));
      });
  }, []);

  return (
    <Container>
      <StyledSwiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {SildeContent.map(content => (
          <SwiperSlide
            key={content.id}
            style={{
              backgroundImage: `url(${content.img_url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <SlideTitle style={{ color: `${content.color}` }}>
              {content.title}
            </SlideTitle>
          </SwiperSlide>
        ))}
      </StyledSwiper>
      {categories.map((category, idx) => (
        <List key={idx}>
          <Title>
            {category.title}
            <img src="/images/Main/next.png" alt="next" />
          </Title>
          <SubTitle>
            <span>{category.subTitle}</span>
            {idx === 0 && (
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/productlist')}
              >
                전체보기
              </span>
            )}
          </SubTitle>
          <ContentList houses={houses[housesKey[idx]]} />
        </List>
      ))}
      <Slogan>
        <img src="/images/Main/image.png" alt="slogan" />
      </Slogan>
    </Container>
  );
};

const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #fff;
`;

const StyledSwiper = styled(Swiper)`
  width: 1140px;
  height: 380px;
  margin-bottom: 5rem;
  .swiper-slide {
    white-space: pre-wrap;
  }
  .swiper-button-prev {
    display: none;
    color: white;
  }
  .swiper-button-next {
    display: none;
    color: white;
  }
  .swiper-pagination-bullet-active {
    background: white;
  }
  &:hover {
    .swiper-button-prev {
      display: block;
    }
    .swiper-button-next {
      display: block;
    }
  }
`;

const SlideTitle = styled.p`
  margin-top: 100px;
  margin-left: 5rem;
  font-size: 2rem;
  font-weight: bold;
`;

const List = styled.div`
  margin-top: 10px;
`;

const Title = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  font-size: 30px;
  font-weight: 700;
  color: #212121;
  line-height: 1.47;
  font-family: SourceHanSerifK, serif;

  img {
    width: 10px;
    margin-left: 20px;
    padding-bottom: 5px;
    object-fit: cover;
  }
`;

const SubTitle = styled.div`
  ${Flex('space-between', 'center')};
  width: 100%;
  margin-bottom: 30px;
  padding-left: 8px;
  padding-right: 8px;
  color: #9e9e9e;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.45;

  span {
    font-size: 16px;
    font-weight: 400;
  }
`;

const Slogan = styled.div`
  img {
    width: 1110px;
    height: 200px;
    border-radius: 8px;
  }
`;

export default Main;

const SildeContent = [
  {
    id: 1,
    img_url: '/images/Main/barista.jpg',
    title: '위코드 바리스타 정현님의 특강!',
    color: '#FFFFFF',
  },
  {
    id: 2,
    img_url: '/images/Main/ceramic.jpg',
    title: '도자기 장인 산님의 특강',
    color: '#F0EDCC',
  },
  {
    id: 3,
    img_url: '/images/Main/concert.jpg',
    title: '경서님의 색소폰 단독 공연!',
    color: '#FFFFFF',
  },
  {
    id: 4,
    img_url: '/images/Main/healing.jpg',
    title: '재도님과\n\n함께하는 힐링캠프',
    color: '#FFFFFF',
  },
  {
    id: 5,
    img_url: '/images/Main/office.jpg',
    title: '심리치료사 창환님과의 상담치료',
    color: '#FFFFFF',
  },
  {
    id: 6,
    img_url: '/images/Main/apple.jpg',
    title: '애플 장비 뭐부터 사야하지?\n\n규현님이 알려드립니다!',
    color: '#FDFFFC',
  },
];

const categories = [
  { id: 1, title: '놀거리 추천', subTitle: '다같이 즐길 수 있는 놀거리' },
  { id: 2, title: '마감임박', subTitle: '곧 마감인 놀거리!!' },
  { id: 3, title: '최근 등록된 놀거리', subTitle: '따끈따끈한 새로운 놀거리' },
];
