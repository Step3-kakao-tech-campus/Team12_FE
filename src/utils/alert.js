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
export const bankInvalidMessage = {
  title: '은행 정보를 제대로 입력해 주세요!',
  text: '은행 혹은 계좌 정보가 입력되어 있지 않습니다.',
  icon: 'error',
  confirmButtonText: '확인',
};
export const unknownErrorMessage = {
  title: '알 수 없는 에러가 발생했습니다!..',
  text: '서비스 이용에 불편을 끼쳐 죄송합니다. 다시 시도해 주세요😥',
  icon: 'error',
  confirmButtonText: '확인',
};
