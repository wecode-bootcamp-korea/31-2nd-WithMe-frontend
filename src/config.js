const BASE_URL = 'http://10.58.6.152:8000';

const API = {
  Login: `${BASE_URL}/users/signin/`,
  Point: `${BASE_URL}/users/point/`,
  Review: `${BASE_URL}/users/review/`,
  Aside: `${BASE_URL}/users/userinfo/`,
  History: `${BASE_URL}/users/reservation/`,
  Productlist: `${BASE_URL}/places/placelist/`,
  Product: `${BASE_URL}/places/placeinformation/`,
  Placehost: `${BASE_URL}/places/`,
  Placereview: `${BASE_URL}/places/`,
  Placereservation: `${BASE_URL}/places/placereservation/`,
  Search: `${BASE_URL}/places/search/`,
  Main: `${BASE_URL}/places/main/`,
  Hostuser: `${BASE_URL}/users/host/`,
  Hostcreate: `${BASE_URL}/users/placeregist/`,
  Hostmain: `${BASE_URL}/users/hostlist/`,
  Userinfo: `${BASE_URL}/users/userinfo/`,
};
export default API;
