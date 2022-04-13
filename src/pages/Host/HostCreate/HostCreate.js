/*global kakao*/
import React, { useEffect, useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import moment from 'moment';
import styled from 'styled-components';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import API from '../../../config';
import { Flex } from '../../../styles/Mixin';
import 'react-datepicker/dist/react-datepicker.css';

const HostCreate = ({ setSelected }) => {
  const [createPlaceData, setCreatePlaceData] = useState({
    title: '',
    subtitle: '',
    location: '',
    running_date: new Date(),
    running_time: 1,
    price: '',
    close_date: new Date(),
    preparation: '',
    max_visitor: 2,
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [coords, setCoords] = useState({ latitude: '', longitude: '' });
  const [imgFileUrl, setImgFileUrl] = useState('');
  const [imgFile, setImgFile] = useState(null);
  const imgInput = useRef();
  const {
    title,
    subtitle,
    location,
    running_date,
    running_time,
    price,
    close_date,
    preparation,
    max_visitor,
  } = createPlaceData;
  const preRunningDate = new Date(
    running_date.getFullYear(),
    running_date.getMonth(),
    running_date.getDate() - 1
  );

  useEffect(() => {
    setSelected('create');
  }, [setSelected]);

  useEffect(() => {
    let geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(location, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setCoords({
          latitude: result[0].y,
          longitude: result[0].x,
        });
      }
    });
  }, [location, setCoords]);

  const handlePlaceInput = e => {
    const { name, value } = e.target;
    setCreatePlaceData({ ...createPlaceData, [name]: value });
  };

  const visitorIncrease = e => {
    e.preventDefault();
    if (max_visitor < 10)
      setCreatePlaceData({ ...createPlaceData, max_visitor: max_visitor + 1 });
    else alert('인원 수는 최대 10명입니다.');
  };

  const visitorDecrease = e => {
    e.preventDefault();
    if (max_visitor > 2)
      setCreatePlaceData({ ...createPlaceData, max_visitor: max_visitor - 1 });
  };

  const timeIncrease = () => {
    if (running_time < 10)
      setCreatePlaceData({
        ...createPlaceData,
        running_time: running_time + 1,
      });
    else alert('진행시간은 최대 10시간 입니다.');
  };

  const timeDecrease = () => {
    if (running_time > 1)
      setCreatePlaceData({
        ...createPlaceData,
        running_time: running_time - 1,
      });
  };

  const handlePrice = e => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, '');
    if (onlyNumber <= 1000000) {
      const price = onlyNumber;
      setCreatePlaceData({ ...createPlaceData, price: price });
    } else alert('최대 100만원까지 입력 가능합니다.');
  };

  const handleImg = e => {
    setImgFileUrl(URL.createObjectURL(e.target.files[0]));
    setImgFile(e.target.files[0]);
  };

  const imgBtnClick = e => {
    e.preventDefault();
    imgInput.current.click();
  };

  const handleCreate = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('location', location);
    formData.append('latitude', coords.latitude);
    formData.append('longitude', coords.longitude);
    formData.append('running_date', moment(running_date).format('YYYY-MM-DD'));
    formData.append('running_time', running_time);
    formData.append('price', price);
    formData.append('close_date', moment(close_date).format('YYYY-MM-DD'));
    formData.append('preparation', preparation);
    formData.append('max_visitor', max_visitor);
    formData.append('place_img', imgFile);

    fetch(`${API.Hostcreate}`, {
      method: 'post',
      headers: {
        Authorization: localStorage.getItem('Authorzation'),
      },
      body: formData,
    }).then(res => {
      if (res.status === 201 || res.status === 200) {
        alert('등록완료');
      }
    });
  };
  const handleEndDate = date => {
    if (date < running_date) {
      setCreatePlaceData({
        ...createPlaceData,
        close_date: date,
      });
    } else {
      alert('마감날짜가 진행날짜보다 늦습니다.');
    }
  };

  return (
    <Create>
      <Basic>
        <Title>놀이터 정보 입력하기</Title>
        <SubTitle>놀이터 이름</SubTitle>
        <Input
          type="text"
          name="title"
          placeholder="호스트/주제.공간 등이 드러나는 이름을 입력해 주세요."
          onChange={handlePlaceInput}
          value={title}
        />
        <SubTitle>공간설명 (시작시간 필수 입력)</SubTitle>
        <Input
          type="text"
          name="subtitle"
          placeholder="공간에 대한 간단한 설명을 적어주세요."
          onChange={handlePlaceInput}
          value={subtitle}
        />
        <SubTitle>이미지</SubTitle>
        <ImgBox>
          <ImgWrap>
            {imgFileUrl ? (
              <Img
                alt="uploadImg"
                src={imgFileUrl}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <span>이미지를 등록해주세요</span>
            )}
          </ImgWrap>
          <input
            ref={imgInput}
            type="file"
            style={{ display: 'none' }}
            accept="image/*"
            name="place_img"
            onChange={handleImg}
          />
          <ImgBtn onClick={imgBtnClick}>이미지 변경</ImgBtn>
        </ImgBox>
        <SubTitle>주소</SubTitle>
        <Input
          readOnly="readOnly"
          disabled={false}
          value={location}
          placeholder="주소를 입력해주세요"
        />
        <LocationBtn onClick={() => setIsPopupOpen(true)}>주소찾기</LocationBtn>
        <div id="popupDom">
          {isPopupOpen && (
            <PopupDom>
              <PopupPostCode
                setIsPopupOpen={setIsPopupOpen}
                createPlaceData={createPlaceData}
                setCreatePlaceData={setCreatePlaceData}
              />
            </PopupDom>
          )}
        </div>
        <SubTitle>입장료</SubTitle>
        <Input
          type="text"
          placeholder="가격을 입력해주세요"
          value={price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          onChange={handlePrice}
        />
        원<SubTitle>진행날짜</SubTitle>
        <MyDatePicker
          locale={ko}
          selected={running_date}
          dateFormat="yyyy-MM-dd"
          onChange={date =>
            setCreatePlaceData({
              ...createPlaceData,
              running_date: date,
            })
          }
          minDate={new Date()}
        />
        <SubTitle>진행시간</SubTitle>
        <CountWrap>
          <CountBtn
            style={{
              backgroundImage: `url(/images/Host/minus.png)`,
              opacity: `${running_time > 1 ? 1 : 0.2}`,
            }}
            onClick={timeDecrease}
          />
          <Count>{running_time}시간</Count>
          <CountBtn
            style={{
              backgroundImage: 'url(/images/Host/plus.png)',
              opacity: `${running_time < 10 ? 1 : 0.2}`,
            }}
            onClick={timeIncrease}
          />
        </CountWrap>
        <SubTitle>마감날짜 (진행날짜 전날까지만 선택가능)</SubTitle>
        <MyDatePicker
          locale={ko}
          selected={close_date}
          dateFormat="yyyy-MM-dd"
          onChange={date => handleEndDate(date)}
          maxDate={preRunningDate}
          minDate={new Date()}
        />
        <SubTitle>초대인원</SubTitle>
        <CountWrap>
          <CountBtn
            style={{
              backgroundImage: `url(/images/Host/minus.png)`,
              opacity: `${max_visitor > 2 ? 1 : 0.2}`,
            }}
            onClick={visitorDecrease}
          />
          <Count>{max_visitor}명</Count>
          <CountBtn
            style={{
              backgroundImage: 'url(/images/Host/plus.png)',
              opacity: `${max_visitor < 10 ? 1 : 0.2}`,
            }}
            onClick={visitorIncrease}
          />
        </CountWrap>
        <SubTitle>준비물</SubTitle>
        <Input
          name="preparation"
          type="text"
          value={preparation}
          onChange={handlePlaceInput}
          placeholder="예) 관련 아이템, 관련 이야기 거리"
        />
      </Basic>
      <ButtonWrap>
        <CreateBtn onClick={handleCreate}>등록하기</CreateBtn>
      </ButtonWrap>
    </Create>
  );
};

const Create = styled.div`
  width: calc(100% - 400px);
  margin-left: 200px;
`;

const Basic = styled.div`
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
  margin-top: 50px;
  margin-bottom: 20px;
  font-weight: 700;
  font-family: Gotham, 'Noto Sans KR';
  color: #424242;
`;

const Input = styled.input`
  width: 50%;
  min-width: 420px;
  height: 40px;
  padding-left: 16px;
  padding-bottom: 0;
  color: #212121;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  line-height: 50px;
  &:focus {
    outline: none;
  }
`;

const ImgBox = styled.div`
  position: relative;
  width: 50%;
  min-width: 420px;
  height: 400px;
  border: 1px solid #ddd;
  background-color: #ffffff;
`;

const ImgWrap = styled.div`
  ${Flex('center', 'center')}
  width: 80%;
  height: 70%;
  margin: 0 auto;
  margin-top: 20px;
  color: #ddd;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 20px;
  font-weight: bold;
`;
const Img = styled.img`
  width: '100%';
  height: '100%';
  object-fit: 'cover';
`;
const ImgBtn = styled.button`
  position: absolute;
  bottom: 30px;
  width: 100%;
  height: 40px;
  color: white;
  background-color: #212121;
`;

const LocationBtn = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 10px;
  background-color: #212121;
  color: #ffffff;
`;

const MyDatePicker = styled(DatePicker)`
  width: 50%;
  height: 50px;
  padding-left: 16px;
  background-color: #ffffff;
  color: #212121;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 20px;
  .react-datepicker__day-name {
    width: 28px;
  }
  .custom-datepicker {
    border: 1px solid blue;
  }
  .custom-day {
    width: 28px;
    height: 28px;
    line-height: 1.8;
    text-align: center;
  }
  .gray-day {
    color: #aba8b9;
  }
  .selected-day {
    background: #2e1c8b;
    border-radius: 50%;
    font-weight: 700;
  }
`;

const CountWrap = styled.div`
  ${Flex('space-between', 'center')};
  width: 50%;
  min-width: 420px;
  height: 50px;
  padding: 0 16px;
  padding-bottom: 0;
  color: #212121;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  line-height: 50px;
`;

const CountBtn = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background-size: 100%;
  background-repeat: no-repeat;
`;

const Count = styled.div`
  font-size: 20px;
  text-align: center;
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

export default HostCreate;
