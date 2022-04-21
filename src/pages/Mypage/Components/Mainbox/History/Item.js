import React from 'react';
import styled from 'styled-components';
import API from '../../../../../config';
import { Link } from 'react-router-dom';

const Item = ({
  title,
  sub_title,
  image,
  location,
  reservation,
  running_date,
  place_id,
  isClicked,
  setIsClicked,
}) => {
  const reservationDelete = () => {
    fetch(`${API.History}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
      body: JSON.stringify({
        place_id,
      }),
    })
      .then(alert('예약이 취소되었습니다.'))
      .then(setIsClicked(!isClicked));
  };

  const runningDataClose = running_date.substring(0, running_date.length - 9);

  return (
    <ItemWrap key={reservation}>
      <StyledLink to={`/places/placeinformation/${place_id}`}>
        <img src={image} alt="img" />
        <Info>
          <h2>{title}</h2>
          <h3>{sub_title}</h3>
          {running_date.includes('is_close') ? (
            <span>진행일자 : {runningDataClose}</span>
          ) : (
            <span>진행일자 : {running_date}</span>
          )}
          <span>진행장소 : {location}</span>
        </Info>
      </StyledLink>
      {running_date.includes('is_close') ? null : (
        <ReservationBtn onClick={reservationDelete}>예약 취소</ReservationBtn>
      )}
    </ItemWrap>
  );
};

const ItemWrap = styled.div`
  display: flex;
  position: relative;
  gap: 1rem;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  img {
    width: 150px;
    height: 150px;
  }
`;

// const Wrap = styled.div`
//   display: flex;
//   cursor: pointer;
// `;

const StyledLink = styled(Link)`
  display: flex;
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  margin-left: 1rem;

  h2 {
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 10px;
  }

  h3 {
    font-size: 15px;
    padding-bottom: 10px;
  }

  span {
    font-size: 13px;
    line-height: 1.5;
  }
`;

const ReservationBtn = styled.button`
  position: absolute;
  right: 3rem;
  top: 3.5rem;
  width: 100px;
  height: 40px;
  background-color: #212121;
  color: #fff;
  border: 0;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
`;

export default Item;
