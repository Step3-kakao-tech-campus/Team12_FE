// sweetalert(Swal 라이브러리) 전용 JS 파일

// eslint-disable-next-line import/prefer-default-export
export const loginSuccessMessage = {
  title: '로그인 성공!',
  text: '픽업 셔틀에 오신 것을 환영합니다😊',
  icon: 'success',
  confirmButtonText: '확인',
};
export const loginNeedMessage = {
  title: '로그인이 필요한 서비스입니다!',
  text: '로그인을 먼저 해주세요😊',
  confirmButtonText: '확인',
};
export const authInvalidMessage = {
  title: '해당 페이지에 대한 접근 권한이 없습니다!',
  text: '접근 권한이 아예 없거나, 또는 학생증 인증을 진행해주세요!',
  icon: 'error',
  confirmButtonText: '확인',
};

export const registerMessage = {
  title: '공고를 등록하시겠습니까?',
  html: `정보를 알맞게 입력하셨나요?<br/> 
  피커는 입력한 정보를 바탕으로 움직이게 됩니다.`,
  icon: 'question',
  showCancelButton: true,
  reverseButtons: true,
  confirmButtonColor: '#0075FF',
  cancelButtonColor: '#D9D9D9',
  cancelButtonText: '취소',
  confirmButtonText: '확인',
};
