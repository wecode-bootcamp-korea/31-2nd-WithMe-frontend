import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import API from '../../config';

const KakaoRedirectHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const code = location.search.substring(6);

    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;',
      },
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_CLIENT_ID}&code=${code}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`,
    })
      .then(res => res.json())
      .then(res => {
        if (res.access_token) {
          sendToken(res.access_token);
        } else {
          alert('다시 시도해주세요!');
        }
      });

    const sendToken = access_token => {
      fetch(`${API.Login}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
        .then(res => res.json())
        .then(res => {
          localStorage.setItem('access_token', access_token);
          localStorage.setItem('Authorization', res.new_token);
          navigate('/');
        });
    };
  });

  return (
    <Container>
      <img src="/images/Login/logopng.png" alt="logo" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 30rem;
  }
`;

export default KakaoRedirectHandler;
