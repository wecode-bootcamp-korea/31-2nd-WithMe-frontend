import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';

const PopupPostCode = ({
  setIsPopupOpen,
  createPlaceData,
  setCreatePlaceData,
}) => {
  const handlePostCode = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setCreatePlaceData({ ...createPlaceData, location: fullAddress });
    setIsPopupOpen(false);
  };

  return (
    <DaumPost>
      <StyledDaumPostcode onComplete={handlePostCode} />

      <Button
        type="button"
        onClick={() => {
          setIsPopupOpen(false);
        }}
        className="postCode_btn"
      >
        닫기
      </Button>
    </DaumPost>
  );
};

const DaumPost = styled.div`
  position: relative;
  width: 50%;
  min-width: 450px;
  height: 520px;
`;
const StyledDaumPostcode = styled(DaumPostcode)`
  display: block;
  position: absolute;
  top: 40px;
  width: 100%;
  height: 90% !important;
  border: 1px solid #ddd;
  border-radius: 3px;
`;
const Button = styled.button`
  position: absolute;
  top: 8px;
  right: 0;
  height: 20px;
  border: none;
`;
export default PopupPostCode;
