import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import API from '../../../../../config';
import { Link } from 'react-router-dom';

const ReviewAbleItem = ({
  id,
  title,
  sub_title,
  image,
  running_date,
  setIsClicked,
}) => {
  const [reviewInput, setReviewInput] = useState('');

  const handleInputValue = e => {
    const { value } = e.target;
    setReviewInput(value);
    setIsClicked(false);
  };

  const postReview = () => {
    fetch(`${API.Review}`, {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
      method: 'POST',
      body: JSON.stringify({
        title,
        review: reviewInput,
      }),
    }).then(res => {
      const { status } = res;
      if (status === 400) {
        alert('리뷰를 써주세요!');
      }
      if (status === 200) {
        alert('리뷰 등록 되었습니다!');
        setIsClicked(true);
        setReviewInput('');
      }
    });
  };

  return (
    <ItemWrap>
      <Img src={image} alt="게시물 사진" />
      <Info>
        <StyledLink to={`/places/detail/${id}`}>
          <h2>{title}</h2>
        </StyledLink>
        <h3> {sub_title} </h3>
        <span>{running_date} </span>
        <MakeReview>
          <textarea
            name="review"
            value={reviewInput}
            type="text"
            placeholder="리뷰를 남겨주세요!"
            maxLength="150"
            onChange={handleInputValue}
          />
          <button onClick={postReview}>작성</button>
        </MakeReview>
      </Info>
    </ItemWrap>
  );
};

export default ReviewAbleItem;

const ItemWrap = styled.div`
  display: flex;
  gap: 1rem;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 8px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;

  h2 {
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 10px;
  }

  h3 {
    font-size: 0.8rem;
    padding-bottom: 10px;
  }

  span {
    padding-bottom: 14px;
    font-size: 0.2rem;
    line-height: 1.5;
  }
`;

const StyledLink = styled(Link)``;

const MakeReview = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 37rem;
  line-height: 1.5;

  textarea {
    width: 100%;
    height: 3rem;
    resize: none;
  }

  button {
    display: block;
    height: 40px;
    width: 50px;
    background-color: #212121;
    color: #fff;
    border: 0;
    font-size: 15px;
    border-radius: 5px;
  }
`;
