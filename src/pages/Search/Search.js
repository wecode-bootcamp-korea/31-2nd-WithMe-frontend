import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import ProductItem from '../ProductList/ProductItem';
import searchIcon from '../../asset/search.png';
import searchCancel from '../../asset/cancel.png';
import API from '../../config';
import { Flex } from '../../styles/Mixin';

const Search = () => {
  const [searchItem, setSearchItem] = useState();
  const [searchText, setSearchText] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`${API.Search}${location.search}`)
      .then(res => res.json())
      .then(data => {
        setSearchItem(data.result);
      });
  }, [location.search]);

  const inputValue = e => {
    setSearchText(e.target.value);
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      navigate(`?k=${searchText}`);
    }
  };

  return (
    <Container>
      <SearchTrack>
        <SearchIcon />
        <InputBox>
          <InputText
            placeholder="취향이나 제목을 입력해주세요."
            onKeyPress={onKeyPress}
            onChange={inputValue}
          />
          <Link to="/">
            <InputExitBtn />
          </Link>
        </InputBox>
      </SearchTrack>
      <MainContainer>
        <Title>
          <MainTitle>' {searchText} '놀이터에요</MainTitle>
        </Title>
        <Products>
          {searchItem &&
            searchItem.map((item, idx) => {
              return <ProductItem key={idx} {...item} />;
            })}
        </Products>
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchTrack = styled.div`
  ${Flex('center')};
  width: 100%;
  height: 80px;
  border-bottom: 1px solid lightgray;
`;

const SearchIcon = styled.div`
  background: url(${searchIcon}) no-repeat center;
  background-size: 30px 30px;
  width: 30px;
  margin-right: 30px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
`;

const InputText = styled.input`
  width: 1000px;
  height: 50px;
  margin-right: 30px;
  border: none;
  font-size: 20px;
  outline: none;
`;

const InputExitBtn = styled.button`
  width: 30px;
  height: 30px;
  margin-right: -30px;
  background: url(${searchCancel}) no-repeat center;
  background-size: 15px 15px;
  border: none;
`;

const MainContainer = styled.div`
  position: relative;
  width: 1140px;
  margin: 50px 0;
`;

const Title = styled.div`
  ${Flex('space-between', 'center')};
  position: relative;
  margin-top: 50px;
`;

const MainTitle = styled.span`
  font-size: 30px;
  font-weight: 500;
`;

const Products = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export default Search;
