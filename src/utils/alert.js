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
export const requestCardModalMessage = {
  title: '인증을 요청 하시겠습니까?',
  icon: 'question',
  showCancelButton: true,
  cancelButtonText: '취소',
  confirmButtonText: '확인',
  confirmButtonColor: '#0075ff',
  heightAuto: true,
};
export const successRequestCardMessage = {
  icon: 'success',
  title: '인증 요청이 완료됐어요!',
  showConfirmButton: false,
  timer: 1500,
};
export const errorRequestCardMessage = {
  icon: 'error',
  title: '이미지를 업로드해 주세요!',
  showConfirmButton: false,
  timer: 1500,
};
export const registerCompleteMessage = {
  title: '회원가입 완료!',
  text: '픽업 셔틀에 오신 것을 환영합니다😊 로그인을 진행해주세요!!',
  icon: 'success',
  confirmButtonText: '확인',
};
export const logoutMessage = {
  title: '로그아웃 하시겠습니까?',
  icon: 'question',
  showCancelButton: true,
  reverseButtons: true,
  confirmButtonColor: '#0075FF',
  cancelButtonColor: '#D9D9D9',
  cancelButtonText: '취소',
  confirmButtonText: '확인',
};
export const logoutCompleteMessage = {
  title: '로그아웃 완료!',
  html: `픽업 셔틀을 사용해주셔서 감사해요😊<br> 
  다음에 또 만나요!`,
  icon: 'success',
  confirmButtonText: '확인',
};
export const controlArticleMessage = {
  icon: 'question',
  title: '공고글을<br/>수정 혹은 삭제 하시겠습니까?',
  showCloseButton: true,
  showDenyButton: true,
  confirmButtonText: '수정',
  denyButtonText: '삭제',
};
export const deleteArticleMessage = {
  title: '삭제하시겠습니까?',
  text: '삭제하면 음료를 픽업 받을 수 없게 됩니다.',
  showCancelButton: true,
  confirmButtonColor: '#0075FF',
  cancelButtonColor: '#D9D9D9',
  confirmButtonText: '확인',
  cancelButtonText: '취소',
};
export const articleDeleteSuccessMessage = {
  title: '공고글이 삭제되었습니다!',
  icon: 'success',
  confirmButtonText: '확인',
};
export const pickupConfirmMessage = {
  icon: 'question',
  title: '이 음료를 픽업하시겠습니까?',
  showCancelButton: true,
  cancelButtonText: '취소',
  confirmButtonText: '수락',
  confirmButtonColor: '#0075ff',
  heightAuto: true,
};
export const articlePickupConfirmMessage = {
  icon: 'question',
  title: '정말로 이 공고글을 수락하시겠습니까?',
  text: '공고글 수락 이후, 음료를 픽업하여 가져다 주세요!😊',
  showCancelButton: true,
  reverseButtons: true,
  confirmButtonColor: '#0075FF',
  cancelButtonColor: '#D9D9D9',
  cancelButtonText: '취소',
  confirmButtonText: '확인',
};
export const articlePickupSuccessMessage = {
  icon: 'success',
  title: '매칭이 완료 되었어요!',
  showConfirmButton: false,
  timer: 3000,
};
export const articlePickupDenyMessage = {
  icon: 'error',
  title: '예상 도착 시간을 <br>제대로 입력해주세요!',
  confirmButtonText: '확인',
};
export const authApproval = {
  icon: 'question',
  title: '학생 인증을 승인 하시겠습니까?',
  showCancelButton: true,
  reverseButtons: true,
  cancelButtonText: '취소',
  confirmButtonText: '확인',
  confirmButtonColor: '#0075ff',
  heightAuto: true,
};
export const authReject = {
  icon: 'question',
  title: '학생 인증을 거절 하시겠습니까?',
  text: '해당 회원은 픽업셔틀 서비스를 이용할 수 없게 됩니다.',
  showCancelButton: true,
  reverseButtons: true,
  confirmButtonColor: '#0075FF',
  cancelButtonColor: '#D9D9D9',
  cancelButtonText: '취소',
  confirmButtonText: '확인',
};
export const authApprovalComplete = {
  title: '인증 승인 처리가 완료되었습니다!',
  icon: 'success',
  confirmButtonText: '확인',
};
export const authRejectComplete = {
  title: '인증 거절 처리가 완료되었습니다!',
  icon: 'success',
  confirmButtonText: '확인',
};
