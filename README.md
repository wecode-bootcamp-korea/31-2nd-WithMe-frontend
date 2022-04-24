# 나랑놀래?

<p align="center" >
<kbd>
<img width="300" src= "https://github.com/charile1/31-2nd-WithMe-frontend/blob/master/public/images/Login/logopng.png?raw=true">

</kbd>

</p>

<pre>
  나랑 놀래?는 남의집 사이트를 모티브로 하여 진행한 프로젝트로 자신의 공간에서 모임을 주최하고 이끌어갈 호스트를 중심으로 취향이 맞는 사람들을 연결합니다. <br/> 연결된 사람들은 가정집, 작업실, 동네가게 등 모임이 진행되는 공간에 모여 공통된 관심사로 대화하며 취향을 나누는 목적으로 만든 커뮤니티 & 예약 사이트 입니다.
</pre>

## Stack

### Frontend

- React.js (v18.0)
- Styled-Components
- JavaScript(ES6)
- HTML5/CSS3

### Backend

[Backend github 링크 ](https://github.com/wecode-bootcamp-korea/31-2nd-WithMe-backend)

- Django Web Framework
- Pyhton
- Mysql
- AWS(EC2, S3, RDS)
- Bcrypt
- JWT

### Collaboration tool

- git, github
- Trello
- Notion
- Slack

## Product

[나랑놀래? 바로가기](https://31-2nd-with-me-frontend.vercel.app/)

[데모 영상](https://www.youtube.com/watch?v=wBV60K5xuwg&list=PL18AZucMkU_o_RiillaDkpYA5kQ66Wtcn&index=4)

## 개발 기간 및 인원

개발기간 : 2022.04.11 - 2022.04.22

### FE Member

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/kjd3495"
        ><img
          src="https://avatars.githubusercontent.com/kjd3495"
          width="100px;"
          alt=""
        /><br /><sub><b>김재도</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/rxxdo"
        ><img
          src="https://avatars.githubusercontent.com/rxxdo"
          width="100px;"
          alt=""
        /><br /><sub><b>노규현</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/charile1"
        ><img
          src="https://avatars.githubusercontent.com/charile1"
          width="100px;"
          alt=""
        /><br /><sub><b>박경서</b></sub></a
      ><br />
    </td>
  </tr>
</table>

### BE Member

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/leesan195159"
        ><img
          src="https://avatars.githubusercontent.com/leesan195159"
          width="100px;"
          alt=""
        /><br /><sub><b>이산</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/clhy9727"
        ><img
          src="https://avatars.githubusercontent.com/clhy9727"
          width="100px;"
          alt=""
        /><br /><sub><b>최창환</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/JeongHyeon-01"
        ><img
          src="https://avatars.githubusercontent.com/JeongHyeon-01"
          width="100px;"
          alt=""
        /><br /><sub><b>황정현</b></sub></a
      ><br />
    </td>
  </tr>
</table>

## 구현 기능

| 이름       | pages                                             |
| ---------- | ------------------------------------------------- |
| **김재도** | 메인 페이지, 호스트 등록 페이지                   |
| **노규현** | 제품 리스트 페이지, 제품 상세 페이지, 검색 페이지 |
| **박경서** | 카카오 소셜 로그인, 마이페이지, Navbar            |

# 상세 기능

<h2> 김재도 </h2>

---

<h2> 노규현 </h2>

---

<h2> 박경서 </h2>
<h3>OAuth 2.0 기반의 카카오 소셜 로그인 서비스 </h3>

- 카카오 연동 로그인은 REST API를 이용하였습니다.
- 사용자가 서비스에서 카카오 로그인 버튼 클릭 시, 카카오 인증 서버로 인가 코드`(code=_____)` 발급을 요청합니다.
- 첫 로그인 시, `카카오 계정으로 로그인` 화면이 나타나며 사용자가 직접 입력한 카카오 계정의 자격 정보를 통해 사용자 인증이 이뤄집니다.
- 사용자가 필수 동의 항목에 동의하고 로그인을 요청하면, 카카오 인증 서버는 인가 코드(Authorization Code)를 발급해 서비스 앱에 등록된 Redirect URI로 전달합니다.
- 서비스는 전달받은 인가 코드로 토큰을 요청하여 액세스 토큰과 리프레시 토큰을 발급받습니다.
- 전달 받은 액세스 토큰을 서버에 전달하고 서버는 카카오 서버에 유효성 검증을 하여 받은 토큰을 서비스 전용 토큰을 발행하여 다시 프론트로 전달하고 로컬 스토리지에 저장합니다.

<table>
  <tr>
    <td align="center">
        <img
          src="https://user-images.githubusercontent.com/89507327/164976687-174c59af-9fe7-49ed-8736-9935fe70507c.gif"
          width="600px"
        />
        <br/>
        <sub>
        <b>카카오 소셜 로그인</b>
        </sub>
        <br />
    </td>
  </tr>
</table>

<h3> 마이페이지 </h3>

<h4>내역</h4>

- 게스트는 놀이터를 예약하면 호스터가 지정한 놀이터 가격에 따라 포인트가 차감되며 마이페이지 내역 페이지에서 예약한 내역을 볼 수 있습니다.
- 예약 취소를 누르면 포인트가 다시 환불되며 예약 내역에서 삭제됩니다.
- 진행일자가 이미 지난 내역은 예약 취소 버튼이 없습니다.

<table>
  <tr>
    <td align="center">
        <img
          src="https://user-images.githubusercontent.com/89507327/164986344-13a7f44e-28b6-437e-bcd6-7d5d87a68548.gif"
          width="600px"
        />
        <br/>
        <sub>
        <b>예약내역 및 예약취소</b>
        </sub>
        <br />
    </td>
  </tr>
</table>

<h4>후기</h4>

- 진행일자가 지난 내역들은 후기를 작성할 수 있습니다.
- `작성 가능한 후기`에서 작성한 후기는 `내가 작성한 후기` 탭에서 바로 확인이 가능하며, `놀이터 상세 페이지`에도 바로 반영이 됩니다.
- `작성 가능한 후기`에서 다시 작성 시, 후기 수정이 가능합니다.

<table>
  <tr>
    <td align="center">
        <img
          src="https://user-images.githubusercontent.com/89507327/164986348-c5c04d00-5765-4ff6-bd82-21713eadc432.gif"
          width="600px"
        />
        <br/>
        <sub>
          <b>후기 작성 및 상세페이지 반영 </b>
        </sub>
        <br />
    </td>
  </tr>
</table>

<h4>포인트 충전</h4>

- 숫자만 입력이 가능하며, 빈 값을 충전 시 "포인트를 입력해주세요!" 라는 경고 문구가 나타납니다.
- 놀이터를 예약하면 포인트가 차감되며, 예약을 취소하면 다시 포인트가 환불됩니다.

<table>
  <tr>
    <td align="center">
        <img
          src="https://user-images.githubusercontent.com/89507327/164987047-200e996a-e043-4163-aa36-8ee6959b26be.gif"
          width="600px"
        />
        <br/>
        <sub>
        <b>포인트 충전</b>
        </sub>
        <br />
    </td>
  </tr>
</table>

<h3> Navbar </h3>

- 로컬스토리지 토큰 유무에 따라 로그인한 사용자는 마이페이지와 호스트 등록페이지로, 로그인 하지 않은 사용자는 호스트 등록을 할 수 없으며 로그인 페이지로 이동하게끔 조건부 렌더링 하였습니다.

---

## Reference

- 이 프로젝트는 [남의집](https://naamezip.com/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
