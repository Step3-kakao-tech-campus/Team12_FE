import { http, HttpResponse } from 'msw';
import REQUEST_LOGIN from '../data/loginData';

const loginHandlers = [
  // POST 요청에 대한 핸들러
  http.get('/login/callback', () => {
    // 여기서는 단순히 200 상태 코드와 함께 가짜 데이터를 응답
    console.log('Mocking : 로그인 완료!');
    return HttpResponse.json(REQUEST_LOGIN);
  }),
];

export default loginHandlers;
