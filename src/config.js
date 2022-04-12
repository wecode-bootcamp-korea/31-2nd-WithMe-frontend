const BASE_URL = 'http://10.58.4.119:8000';

const API = {
  Login: `${BASE_URL}/users/signin`,
  Mypage: `${BASE_URL}/users/mypage`,
  Point: `${BASE_URL}/users/mypage/point`,
  Review: `${BASE_URL}/users/mypage/review`,
  Productlist: `${BASE_URL}/places/place`,
  Product: `${BASE_URL}/places/`,
};

export default API;
