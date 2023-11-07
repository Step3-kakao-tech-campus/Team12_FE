const routes = {
  home: '/',
  login: '/login',
  loginKakao: '/login/callback',
  registerBank: '/register/bank',
  mypage: '/mypage',
  admin: '/mypage/admin',
  adminAuth: '/mypage/admin/auth/:id',
  uploadStudentCard: '/mypage/uploadStudentCard',
  post: '/post',
  detailPost: '/post/:id',
  postWriteIntro: '/post-write-intro',
  postWrite: '/post-write',
  error: '/*',
};

export default routes;
