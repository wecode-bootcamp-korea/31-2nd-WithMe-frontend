import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

const Productlist = () => {
  const [productitem, setProductitem] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch('/data/productitem.json')
      .then(res => res.json())
      .then(data => {
        setProductitem(data);
      });
  }, []);
  dd;
  const Modal = () => {
    return (
      <MainModal>
        <ModalText>새로운 나랑 놀래?</ModalText>
        <ModalText>지난 나랑 놀래?</ModalText>
      </MainModal>
    );
  };

  // {
  //   modal === true ? <MainModal /> : null;
  // }

  return (
    <Container>
      <Filter>
        <FilterTrack>
          <FirstFilter
            onClick={() => {
              setModal(true);
            }}
          >
            새로운 나랑놀래?
            {modal === true ? Modal() : null}
          </FirstFilter>

          <SecondFilter>모집 상태</SecondFilter>
          <ThirdFilter>필터 초기화</ThirdFilter>
        </FilterTrack>
      </Filter>
      <MainContainer>
        <Title>
          <MainTitle>새로운 나랑 놀래 ?</MainTitle>
          <SideFilter>마감 임박순</SideFilter>
          <SideFilterButton />
        </Title>
        <Products>
          {productitem.map(item => {
            return <ProductItem key={item.id} {...item} />;
          })}
        </Products>
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FilterTrack = styled.div`
  width: 1140px;
`;

const Filter = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  height: 70.5px;
  width: 100%;
  border-bottom: 1px solid lightgray;
`;

const FirstFilter = styled.button`
  background-image: url('/images/ProductList/down-arrow.png');
  background-repeat: no-repeat;
  background-size: 15px 15px;
  margin-top: 12px;
  width: 150px;
  height: 45px;
  margin-right: 15px;
  border: 1px solid lightgray;
`;

const MainModal = styled.ul`
  margin-top: 50px;
  width: 150px;
`;

const ModalText = styled.li`
  height: 40px;
`;

const SecondFilter = styled(FirstFilter)`
  background-image: url('/images/ProductList/down-arrow.png');
  background-repeat: no-repeat;
  background-size: 15px 15px;
  width: 100px;
`;

const ThirdFilter = styled(FirstFilter)`
  background-image: url('/images/ProductList/down-arrow.png');
  background-repeat: no-repeat;
  background-size: 15px 15px;
  border: none;
  width: 100px;
  margin-right: 500px;
  color: lightgray;
`;

const MainContainer = styled.div`
  width: 1140px;
  margin-top: 70px;
`;

const Title = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
`;

const MainTitle = styled.span`
  font-size: 30px;
`;

const SideFilter = styled.span`
  padding: 20px;
  margin-right: 10px;
`;

const SideFilterButton = styled.button`
  position: absolute;
  top: 18px;
  right: 5px;
  background-image: url('/images/ProductList/down-arrow.png');
  background-repeat: no-repeat;
  background-size: 15px 15px;
  width: 20px;
  height: 20px;
  border: none;
`;

const Products = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export default Productlist;
