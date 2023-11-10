export const ALERT_ERROR = (error) => {
  return `에러가 발생했습니다. 관리자에게 문의하세요.\n에러 내용: ${error}`;
};

export const ERROR = {
  NO_PAGE: '원하시는 페이지를 찾을 수 없습니다.',
  DESCRIPTION: `찾으려는 페이지의 주소가 잘못 입력되었거나,
  주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.
  입력하신 페이지의 주소가 정확한지 다시 한 번 확인해 주세요!
  `,
  GO_HOME: '픽업셔틀 홈으로 돌아가기',
};
