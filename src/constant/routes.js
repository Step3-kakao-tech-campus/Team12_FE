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
  admin: '/mypage/admin',
  adminAuth: '/mypage/admin/auth/:id',
  writenArticle: '/mypage/writen-article',
  pickupArticle: '/mypage/pickup-article',
  writenArticleDetail: '/mypage/writen-article/:id',
  pickupArticleDetail: '/mypage/pickup-article/:id',
  uploadStudentCard: '/mypage/uploadStudentCard',
  error: '/*',
};

export default routes;
