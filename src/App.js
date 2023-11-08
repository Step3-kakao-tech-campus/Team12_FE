import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import KakaoOuathPage from './pages/KakaoOuathPage';
import RegisterBankPage from './pages/RegisterBankPage';
import PostListPage from './pages/PostListPage';
import PostDetailPage from './pages/PostDetailPage';
import PostWriteIntroPage from './pages/PostWriteIntroPage';
import PostWritePage from './pages/PostWritePage';
import ProtectedRoute from './components/layout/ProtectedRoute';
import MyPage from './pages/mypage/MyPage';
import AdminPage from './pages/mypage/AdminPage';
import AdminAuthPage from './pages/mypage/AdminAuthPage';
import MyPageWritenPostListPage from './pages/mypage/MyPageWritenPostListPage';
import MyPagePickupPostListPage from './pages/mypage/MyPagePickupPostListPage';
import MyPageWritenPostDetailPage from './pages/mypage/MyPageWritenPostDetailPage';
import MyPagePickupPostDetailPage from './pages/mypage/MyPagePickupPostDetailPage';
import UploadStudentCardPage from './pages/mypage/UploadStudentCardPage';
import ErrorPage from './pages/ErrorPage';
import routes from './constant/routes';

import './global.css';

const staticServerUri = process.env.REACT_APP_PATH || '';

function App() {
  return (
    <BrowserRouter basename={staticServerUri}>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.loginKakao} element={<KakaoOuathPage />} />
        <Route path={routes.registerBank} element={<RegisterBankPage />} />
        <Route path={routes.post} element={<PostListPage />} />
        <Route path={routes.detailPost} element={<PostDetailPage />} />
        {/* 아래 각 페이지들에 대해 requiedAuth 추가 필요 */}
        <Route path={routes.postWriteIntro} element={<PostWriteIntroPage />} />
        <Route path={routes.postWrite} element={<PostWritePage />} />
        <Route
          path={routes.mypage}
          element={
            <ProtectedRoute>
              <MyPage />
            </ProtectedRoute>
          }
        />
        <Route path={routes.admin} element={<AdminPage />} />
        <Route path={routes.adminAuth} element={<AdminAuthPage />} />
        <Route path={routes.writenPost} element={<MyPageWritenPostListPage />} />
        <Route path={routes.pickupPost} element={<MyPagePickupPostListPage />} />
        <Route path={routes.writenPostDetail} element={<MyPageWritenPostDetailPage />} />
        <Route path={routes.pickupPostDetail} element={<MyPagePickupPostDetailPage />} />
        <Route path={routes.uploadStudentCard} element={<UploadStudentCardPage />} />
        <Route path={routes.error} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
