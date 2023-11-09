import { http, HttpResponse } from 'msw';
import REQUEST_REGISTER from '@/mocks/data/registerData';

const registerHandlers = [
  // POST 요청에 대한 핸들러
  http.post('/signup', () => {
    // 여기서는 단순히 200 상태 코드와 함께 가짜 데이터를 응답
    console.log('Mocking : 계좌정보 전송, 회원가입 완료');
    return HttpResponse.json(REQUEST_REGISTER);
  }),
];

export default registerHandlers;
