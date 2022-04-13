import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import HostMain from './HostMain/HostMain';
import HostNav from './HostNav';
import HostUser from './HostUser';
import HostCreate from './HostCreate/HostCreate';
import { Flex } from '../../styles/Mixin';

const HostRouter = () => {
  const [selected, setSelected] = useState('main');
  return (
    <Router>
      <HostNav selected={selected} />
      <RoutesWrap>
        <Routes>
          <Route path="/" element={<HostMain setSelected={setSelected} />} />
          <Route
            path="/user"
            element={<HostUser setSelected={setSelected} />}
          />
          <Route
            path="/create"
            element={<HostCreate setSelected={setSelected} />}
          />
        </Routes>
      </RoutesWrap>
    </Router>
  );
};
const Router = styled.div`
  ${Flex('flex-start')};
`;
const RoutesWrap = styled.div`
  width: calc(100% - 200px);
  margin-left: 200px;
  margin-bottom: 50px;
  background-color: #fbfaf8;
`;
export default HostRouter;
