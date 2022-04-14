import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Aside from './Components/Aside/Aside';
import History from './Components/Mainbox/History/History';
import Review from './Components/Mainbox/Review/Review';
import Point from './Components/Mainbox/Point/Point';

const Mypage = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Container>
      <Wrap>
        <Aside isClicked={isClicked} />
        <Routes>
          <Route
            path="/"
            element={
              <History isClicked={isClicked} setIsClicked={setIsClicked} />
            }
          />
          <Route path="/review" element={<Review />} />
          <Route
            path="/point"
            element={<Point setIsClicked={setIsClicked} />}
          />
        </Routes>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 82vw;
  margin: 0 auto;
`;

const Wrap = styled.div`
  margin: 0 auto;
  display: flex;
  margin-bottom: 5rem;
`;

export default Mypage;
