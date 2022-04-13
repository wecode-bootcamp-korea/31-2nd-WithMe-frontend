import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <FooterWrap>
        <FooterBox>
          <FooterList>
            <div>이용 가이드</div>
            <div>채용</div>
            <div>이용약관</div>
            <div>개인정보 처리방침</div>
          </FooterList>
        </FooterBox>
        <FooterBox2>
          <div>
            <h1>(주)나랑 놀래?</h1>
            <p>대표: 황정현 | 개인정보 보호책임자: 노도현</p>
            <p>
              주소 : 서울특별시 강남구 감성타코 존맛탱ㅣ사업자등록번호 :
              010-8522-4967
            </p>
            <p>
              통신판매업신고번호 : 제 2022호 ㅣ제휴문의 : pyo05360@gmail.com
            </p>
            <p>
              위 사이트는 클론 코딩을 목적으로 남의 집을 모티브한 사이트입니다.
            </p>
          </div>
        </FooterBox2>
      </FooterWrap>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
`;

const FooterWrap = styled.div`
  width: 89vw;
  max-width: 1140px;
  margin: 0 auto;
`;

const FooterBox = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 300;
  border-bottom: 1px solid #ddd;
`;

const FooterList = styled.div`
  display: flex;
  gap: 1rem;
`;

const FooterBox2 = styled.div`
  padding: 16px;
  line-height: 1;

  h1 {
    font-size: 14px;
    line-height: 1.43;
    color: #212121;
    padding-bottom: 14px;
    font-weight: 700;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    word-spacing: -1.6px;
    color: #212121;
    margin: 8px 0 9px;
  }
`;

export default Footer;
