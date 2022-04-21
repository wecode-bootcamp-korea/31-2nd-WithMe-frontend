import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const goToMypage = () => {
    navigate('/mypage');
  };

  const goToLogin = () => {
    navigate('/login');
  };
  return (
    <Container>
      <NavWrap>
        <Menu>
          <Link to="/">
            <img src="/images/Nav/logopng.png" alt="logo" />
          </Link>

          <NavBox>
            <Link to="/places/placelist">놀이터 둘러보기</Link>
            {!localStorage.Authorization ? (
              ''
            ) : (
              <Link to="/host">놀이터 등록하기</Link>
            )}
            <Link to="/about">놀이터란 ?</Link>
          </NavBox>
        </Menu>

        <Mapage>
          <Link to="/search">
            <img src="/images/Nav/search.png" alt="search" />
          </Link>

          {localStorage.Authorization ? (
            <MypageLink onClick={goToMypage}>마이페이지</MypageLink>
          ) : (
            <LoginLink onClick={goToLogin}>로그인</LoginLink>
          )}
        </Mapage>
      </NavWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 67px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
`;

const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 89vw;
  max-width: 1140px;
  margin: 0 auto;
`;

const Menu = styled.div`
  display: flex;
  gap: 6rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

const NavBox = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  font-weight: 300;
`;

const Mapage = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 300;

  img {
    width: 25px;
    height: 25px;
  }
`;

const MypageLink = styled.a`
  cursor: pointer;
`;

const LoginLink = styled.a`
  cursor: pointer;
`;

export default Nav;
