import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HostNav = ({ selected }) => {
  return (
    <Nav>
      {menus.map(menu => (
        <Link
          className={menu.class === selected ? 'selected' : ''}
          key={menu.id}
          to={`${menu.path}`}
        >
          {menu.name}
        </Link>
      ))}
      {localStorage.getItem('Authorization') !== null && (
        <Link
          className={selected === 'create' ? 'selected' : ''}
          to="/host/create"
        >
          놀이터 만들기
        </Link>
      )}
    </Nav>
  );
};

const Nav = styled.div`
  position: fixed;
  top: 67px;
  left: 0;
  width: 200px;
  height: calc(100vh - 339.01px);
  padding-top: 40px;
  background-color: #ffffff;
  text-align: center;

  a {
    display: block;
    line-height: 3;
    font-weight: bold;
  }
  .selected {
    color: #fd936e;
    background-color: #f6f6f6;
  }
`;
export default HostNav;

const menus = [
  { id: 1, name: '관리실 메인', path: '/host', class: 'main' },
  { id: 2, name: '호스트 정보', path: '/host/user', class: 'user' },
];
