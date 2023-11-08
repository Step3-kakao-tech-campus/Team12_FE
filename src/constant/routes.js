const routes = {
  home: '/',
  login: '/login',
  loginKakao: '/login/callback',
  registerBank: '/register/bank',
  post: '/post',
  detailPost: '/post/:id',
  postWriteIntro: '/post-write-intro',
  postWrite: '/post-write',
  mypage: '/mypage',
  admin: '/mypage/admin',
  adminAuth: '/mypage/admin/auth/:id',
  writenPost: '/mypage/writen-post',
  pickupPost: '/mypage/pickup-post',
  writenPostDetail: '/mypage/writen-post/:id',
  pickupPostDetail: '/mypage/pickup-post/:id',
  uploadStudentCard: '/mypage/uploadStudentCard',
  error: '/*',
};

export default routes;
