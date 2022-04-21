/* global kakao */
import React from 'react';
import styled from 'styled-components';
import Review from './productreview/Review';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Flex } from '../../../styles/Mixin';
import API from '../../../config';
import topImg from '../../../asset/Top.png';

const Product = () => {
  const [placeItem, setPlaceItem] = useState({});
  const [placeHost, setPlaceHost] = useState([]);
  const [placeReview, setPlaceReview] = useState([]);
  const [user, setUser] = useState({});
  const params = useParams();
  const container = useRef();

  useEffect(() => {
    fetch(`${API.Product}/${params.id}`, {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setPlaceItem(data.result);
      });
  }, [params.id]);

  useEffect(() => {
    fetch(`${API.Placehost}/${params.id}/hostinformation`, {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setPlaceHost(data.result);
      });
  }, [params.id]);

  useEffect(() => {
    fetch(`${API.Placereview}/${params.id}/review`, {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setPlaceReview(data.result);
      });
  }, [params.id]);

  useEffect(() => {
    fetch(`${API.Userinfo}`, {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then(res => res.json())
      .then(data => setUser(data.user_info));
  }, []);

  const reservation = () => {
    if (placeHost.host_nickname !== user.nickname) {
      fetch(`${API.Placereservation}`, {
        headers: {
          Authorization: localStorage.getItem('Authorization'),
        },
        method: 'POST',
        body: JSON.stringify({
          place_id: placeItem.id,
        }),
      })
        .then(res => {
          if (res.status === 200 || res.status === 201) {
            alert('예약되었습니다.');
            return res.json();
          } else if (res.status === 400) {
            alert('포인트가 부족합니다');
          } else if (res.status === 401) {
            alert('이미 예약한 방입니다.');
          } else {
            alert('잘못된 접근입니다.');
          }
        })
        .then(data => data);
    } else alert('본인 놀이터는 예약할 수 없습니다.');
  };

  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(placeItem.latitude, placeItem.longitude),
      level: 3,
    };
    const map = new kakao.maps.Map(container.current, options);

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);

    let circle = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(placeItem.latitude, placeItem.longitude),
      radius: 110,
      strokeWeight: 5,
      strokeOpacity: 0,
      fillColor: '#d2373b',
      fillOpacity: 0.3,
    });

    circle.setMap(map);
  }, [placeItem.latitude, placeItem.longitude]);

  return (
    <Container>
      <Main>
        <Info>
          <InfoImg src={placeItem.image_url} alt="InfoImg" />
          <InfoValue>
            <Title>{placeItem.title}</Title>
            <SubTitle> {placeItem.subtitle} </SubTitle>
            <Location>
              <LocationIcon
                src="/images/ProductList/Product/지도핀.png"
                alt="LocationIcon"
              />
              <LocationValue>{placeItem.location}</LocationValue>
            </Location>
            {placeItem.running_date === 'is_closed' ? (
              ''
            ) : (
              <Payment onClick={reservation}>예약하기</Payment>
            )}
          </InfoValue>
          <AdditionalInfo>
            <RunningDate>
              {placeItem.running_date === 'is_closed'
                ? '모집마감'
                : placeItem.running_date}
            </RunningDate>
            <RunningTime>진행시간 {placeItem.running_time}시간 </RunningTime>
            <MaxVisitor>최대인원 {placeItem.max_visitor}명</MaxVisitor>
            <Price>
              {parseInt(placeItem.price)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원
            </Price>
          </AdditionalInfo>
        </Info>
        <Host>
          <HostInfo>
            <HostImg
              src={placeHost && placeHost.host_profile_image}
              alt="HostImg"
            />
            <HostValue>
              <HostName>{placeHost && placeHost.host_nickname}</HostName>
              <HostIntro>{placeHost && placeHost.host_introduction}</HostIntro>
            </HostValue>
          </HostInfo>
        </Host>
        <Preparation>
          <PreTitle>준비 할 것 </PreTitle>
          <PreSubTitle>{placeItem.preparation}</PreSubTitle>
        </Preparation>
        <Map>
          <MapInfo>오시는 길 </MapInfo>
          <MapText>
            <MapTitle>{placeItem.location}</MapTitle>
            <MapSubTitle>
              자세한 위치는 예약 확정 시 개별 안내 드립니다.
            </MapSubTitle>
            <MapApi ref={container}>지도</MapApi>
          </MapText>
        </Map>
        <ReviewList>
          <ReviewInfo>
            <ReviewTitle>함께한 분들의 후기</ReviewTitle>
            <ReviewCount>{placeReview.length}</ReviewCount>
          </ReviewInfo>
          {placeReview &&
            placeReview.map((review, idx) => {
              return <Review key={idx} {...review} />;
            })}
        </ReviewList>
        <Refund>
          <RefundTitle>환불규정</RefundTitle>
          <RefundText>
            - 놀이터 신청 후, 호스트가 초대 승인하기 전까지는 결제가 이뤄지지
            않습니다.
          </RefundText>
          <RefundText>
            - 초대된 놀이터 취소 시, 남의집 방문 6일 전까지 결제액 전액
            환불됩니다.(자정 기준)
          </RefundText>
          <RefundText>
            - 초대 승인된 놀이터 취소 시, 5일~2일 전까지는 결제액의 30%가
            환불됩니다.(자정 기준)
          </RefundText>
          <RefundText>
            - 놀이터 방문 1일 전~방문 당일 및 노쇼인 경우에는 환불이 불가합니다.
          </RefundText>
        </Refund>
      </Main>
      <LocationTop
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        TOP
      </LocationTop>
    </Container>
  );
};

const Container = styled.div`
  ${Flex('center')};
  position: relative;
  width: 100%;
  font-weight: lighter;
  scroll-behavior: smooth;
  scroll-behavior: auto;
  transition: all 0.5;
`;

const Main = styled.div`
  width: 736px;
  margin-top: 3rem;
`;

const Info = styled.div``;

const InfoImg = styled.img`
  height: 368px;
  border-radius: 8px;
`;

const InfoValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.dt`
  margin-top: 50px;
  font-size: 30px;
  font-weight: 500;
  font-family: SourceHanSerifK, serif;
`;

const SubTitle = styled.dd`
  margin-top: 15px;
  font-size: 20px;
`;

const Location = styled.div`
  display: flex;
  margin-top: 30px;
`;

const LocationIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const LocationValue = styled.div`
  font-size: 19px;
`;

const Payment = styled.button`
  width: 300px;
  height: 50px;
  margin: 40px 0;
  border: 1px solid lightgray;
  border-radius: 15px;
  font-size: 20px;
  font-weight: lighter;
`;
const AdditionalInfo = styled.div`
  ${Flex('center')};
  margin-top: 60px;
  font-size: 20px;
`;

const RunningDate = styled.div``;

const RunningTime = styled(RunningDate)`
  margin-left: 50px;
`;

const MaxVisitor = styled(RunningTime)``;

const Price = styled(RunningTime)``;

const Host = styled.div`
  margin-top: 50px;
  padding: 30px;
  background-color: #fafafa;
`;

const HostInfo = styled.div`
  display: flex;
`;

const HostImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const HostValue = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
`;

const HostName = styled.dt`
  font-size: 20px;
  font-weight: 700;
`;

const HostText = styled.dd`
  margin-top: 5px;
  font-size: 17px;
`;

const HostIntro = styled(HostText)`
  margin-top: 20px;
  padding-left: 1rem;
`;

const Preparation = styled.div`
  display: flex;
  flex-direction: column;
  margin: 150px 0;
`;

const PreTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const PreSubTitle = styled.div`
  margin-top: 50px;
  font-size: 25px;
`;

const Map = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const MapInfo = styled.span`
  font-size: 30px;
  font-weight: 500;
`;

const MapText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const MapTitle = styled.dt`
  margin-top: 15px;
  font-size: 15px;
  font-weight: 500;
`;

const MapSubTitle = styled.dd`
  margin-top: 15px;
  font-size: 15px;
`;

const MapApi = styled.div`
  height: 400px;
  margin-top: 20px;
`;

const ReviewList = styled.div`
  margin: 100px 0;
`;

const ReviewInfo = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ReviewTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const ReviewCount = styled.div`
  margin: 2px 0 0 30px;
  font-size: 30px;
`;

const Refund = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const RefundTitle = styled.span`
  margin: 40px 0;
  font-size: 35px;
`;

const RefundText = styled.li`
  margin-top: 8px;
`;

const LocationTop = styled.button`
  position: fixed;
  bottom: 200px;
  right: 250px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: url(${topImg}) no-repeat center 0;
  background-size: 20px 20px;
  border: 0 none;
  font-size: 4px;
`;

export default Product;
