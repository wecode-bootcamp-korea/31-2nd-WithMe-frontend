import React from 'react';
import styled from 'styled-components';
import loginBtn from '../../asset/kakao_login.png';

const Login = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  return (
    <Container>
      <Img src="/images/Login/logogif.gif" />
      <LoginButton>
        <a href={KAKAO_AUTH_URL}>
          <img src={loginBtn} alt="카카오 로그인" />
        </a>
      </LoginButton>
    </Container>
  );
};

export default Login;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const Img = styled.img`
  display: block;
  width: 25rem;
  height: 25rem;
  margin: 0 auto;
`;

const LoginButton = styled.div`
  width: 200px;
  padding-top: 10px;
  margin: 0px auto;
`;
