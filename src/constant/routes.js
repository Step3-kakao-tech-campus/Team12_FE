const routes = {
  home: '/',
  login: '/login',
  loginKakao: '/login/callback',
  registerBank: '/register/bank',
  article: '/article',
  detailArticle: '/article/:id',
  articleWriteIntro: '/article-write-intro',
  articleWrite: '/article-write',
  mypage: '/mypage',
  mypageModify: '/mypage/modify',
  admin: '/mypage/admin',
  adminAuth: '/mypage/admin/auth/:id',
  writtenArticle: '/mypage/written-article',
  pickupArticle: '/mypage/pickup-article',
  writtenArticleDetail: '/mypage/written-article/:id',
  pickupArticleDetail: '/mypage/pickup-article/:id',
  uploadStudentCard: '/mypage/uploadStudentCard',
  error: '/*',
};

export default routes;
