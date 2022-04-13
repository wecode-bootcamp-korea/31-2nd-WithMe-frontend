import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import API from '../../config';
import { Flex } from '../../styles/Mixin';

const HostUser = ({ setSelected }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ nickname: '', profile_image: '' });
  const [text, setText] = useState('');
  const [bank, setBank] = useState('산와머니');
  const [account, setAccount] = useState('');

  useEffect(() => {
    setSelected('user');
  }, [setSelected]);

  useEffect(() => {
    fetch(`${API.Userinfo}`, {
      headers: {
        Authorization: localStorage.getItem('Authorzation'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setUser(data.user_info);
      });
  }, []);

  const handleAccount = e => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, '');
    setAccount(onlyNumber);
  };
  const handleCreate = e => {
    e.preventDefault();

    fetch(`${API.Hostuser}`, {
      method: 'post',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
      body: JSON.stringify({
        introduction: text,
        bank: bank,
        account: account,
      }),
    }).then(res => {
      if (res.status === 201 || res.status === 200) {
        alert('등록완료');
      }
    });
  };

  return (
    <UserMain>
      <User>
        <Title>호스트 프로필</Title>
        <ProfileContent>
          <div className="imgWrap">
            <SubTitle>프로필 이미지</SubTitle>
            <ProfileImg profile_image={user.profile_image} />
          </div>
          <NameWrap>
            <SubTitle>이름</SubTitle>
            <p>{user.nickname}</p>
            <Button onClick={() => navigate('/mypage')}>프로필 보기</Button>
          </NameWrap>
        </ProfileContent>
        <Introduction>
          <SubTitle>자기소개</SubTitle>
          <TextArea
            placeholder="어떤 분이신지 알려주세요 : )
          
          -간략히 자기소개를 부탁드려요.
          "
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </Introduction>
      </User>
      <User>
        <Title>호스트 계좌 정보</Title>
        <BankContent>
          <SubTitle>나의 정산 은행</SubTitle>
          <Select name="banks" onChange={e => setBank(e.target.value)}>
            <option value="산와머니">산와머니</option>
            <option value="정현은행">정현은행</option>
            <option value="경서은행">경서은행</option>
            <option value="규현은행">규현은행</option>
            <option value="재도은행">재도은행</option>
            <option value="창환은행">창환은행</option>
          </Select>
          <SubTitle>나의 정산 계좌</SubTitle>
          <Account
            type="text"
            onChange={handleAccount}
            value={account}
            placeholder="계좌정보를 입력해주세요."
          />
        </BankContent>
      </User>
      <ButtonWrap>
        <CreateBtn onClick={handleCreate}>저장하기</CreateBtn>
      </ButtonWrap>
    </UserMain>
  );
};

const UserMain = styled.div`
  width: calc(100% - 400px);
  margin-left: 200px;
`;
const User = styled.div`
  width: 100%;
  padding: 30px;
  margin-top: 40px;
  margin-left: 80px;
`;
const Title = styled.h2`
  color: #212121;
  font-weight: bold;
  font-size: 1.5em;
  font-family: Gotham, 'Noto Sans KR';
`;
const SubTitle = styled.p`
  margin-bottom: 20px;
  font-weight: 700;
  font-family: Gotham, 'Noto Sans KR';
  color: #424242;
`;
const ProfileContent = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 60%;
  min-width: 700px;
  margin-top: 30px;
  align-items: center;
`;
const ProfileImg = styled.div`
  width: 108px;
  height: 108px;
  border-radius: 50%;
  background-image: url(${props => props.profile_image});
  background-size: 100%, 100%;
`;
const NameWrap = styled.div`
  width: 60%;
`;
const Button = styled.button`
  width: 20%;
  min-width: 73px;
  padding: 3px;
  margin-top: 15px;
  border-radius: 3px;
  border: 1px solid #ddd;
  color: #919191;
  font-size: 12px;
`;
const Introduction = styled.div`
  margin-top: 40px;
`;
const TextArea = styled.textarea`
  width: 60%;
  min-height: 181px;
  padding: 14px 16px;
  font-size: 15px;
  color: #333;
  line-height: 25px;
  border: 1px solid #ddd;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;
const BankContent = styled.div`
  padding-top: 40px;
`;
const Select = styled.select`
  width: 60%;
  height: 50px;
  padding: 2px 8px;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 300;

  &:focus {
    outline: none;
  }
`;
const Account = styled.input`
  width: 60%;
  height: 50px;
  padding: 2px 8px;
  border: 1px solid #ddd;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;
const ButtonWrap = styled.div`
  ${Flex('flex-end')}
  width: 80%;
  padding-top: 40px;
  padding-bottom: 40px;
`;
const CreateBtn = styled.button`
  ${Flex('center', 'center')};
  min-width: 100px;
  height: 50px;
  border: 1px solid #fe8256;
  border-radius: 3px;
  color: #fff;
  background-color: #fe8256;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;
export default HostUser;
