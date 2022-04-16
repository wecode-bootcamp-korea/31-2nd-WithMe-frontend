const BASE_URL = 'http://10.58.6.152:8000';

const API = {
  Login: `${BASE_URL}/users/signin`,
  Mypage: `${BASE_URL}/users/mypage`,
  Point: `${BASE_URL}/users/mypage/point`,
  Review: `${BASE_URL}/users/mypage/review`,
  Productlist: `${BASE_URL}/places/placelist`,
  Product: `${BASE_URL}/places/placeinformation/`,
  Placehost: `${BASE_URL}/places/placehostinformation`,
  Placereview: `${BASE_URL}/places/`,
  Placereservation: `${BASE_URL}/places/placereservation/`,
};

export default API;
