import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Item from './Item';
import { Flex } from '../../../../../styles/Mixin';
import API from '../../../../../config';

const History = ({ isClicked, setIsClicked }) => {
  const [historyData, setHistoryData] = useState([]);
  const fetchData = useCallback(() => {
    async function fetchAndSetHistoryData() {
      const response = await fetch(`${API.History}`, {
        headers: {
          Authorization: localStorage.getItem('Authorization'),
        },
      });
      const data = await response.json();
      setHistoryData(data.reservation_list);
    }
    fetchAndSetHistoryData();
  }, [isClicked]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <HistoryWrap>
      <HistoryTitle>
        <img src="/images/mypage/house_icon.png" alt="history" />
        <h1>내역</h1>
      </HistoryTitle>
      <Title>
        <span>신청내역</span>
      </Title>

      {historyData && historyData.length === 0 ? (
        <HistoryNoneBox>
          <p>아직 신청한 남의집이 없으시네요!</p>
          <p>지금 바로 남의집에 놀러가보세요.</p>
          <StyledLink to="/productlist">남의집 둘러보기</StyledLink>
        </HistoryNoneBox>
      ) : (
        <HistoryBox>
          {historyData.map(data => {
            return (
              <Item
                key={data.place_id}
                {...data}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
              />
            );
          })}
        </HistoryBox>
      )}
    </HistoryWrap>
  );
};

const HistoryWrap = styled.div`
  width: 50rem;
`;

const HistoryTitle = styled.div`
  ${Flex('center', 'center')}
  gap: 10px;
  border-bottom: 1px solid #ddd;
  height: 150px;

  img {
    width: 30px;
    height: 30px;
  }

  h1 {
    font-weight: 600;
  }
`;

const Title = styled.div`
  ${Flex('center', 'center')}
  height: 45px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  display: block;
  height: 50px;
  width: 140px;
  padding: 17px 0px 0px 20px;
  background-color: #212121;
  margin: 20px auto 0;
  color: #fff;
  border: 0;
  font-size: 15px;
  border-radius: 5px;
`;

const HistoryNoneBox = styled.div`
  ${Flex('center', 'center')}
  flex-direction: column;
  position: relative;
  height: 415px;
  background-color: #f6f6f6;

  p {
    display: block;
    color: #919191;
    font-size: 14px;
    line-height: 1.2;
    font-weight: 400;
  }
`;

const HistoryBox = styled.div`
  height: 35rem;
  overflow: scroll;
  border-bottom: 1px solid #ddd;
`;

export default History;
