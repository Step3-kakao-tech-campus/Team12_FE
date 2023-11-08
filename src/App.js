import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import KakaoOuathPage from './pages/KakaoOuathPage';
import RegisterBankPage from './pages/RegisterBankPage';
import PostListPage from './pages/PostListPage';
import PostDetailPage from './pages/PostDetailPage';
import PostWriteIntroPage from './pages/PostWriteIntroPage';
import PostWritePage from './pages/PostWritePage';
import MyPage from './pages/MyPage';
import AdminPage from './pages/AdminPage';
import AdminAuthPage from './pages/AdminAuthPage';
import ErrorPage from './pages/ErrorPage';
import ProtectedRoute from './components/layout/ProtectedRoute';
import UploadStudentCardPage from './pages/UploadStudentCardPage';
import PickupPostPage from './pages/PickupPostPage';
import WritenPostPage from './pages/WritenPostPage';
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
        <Route path={routes.pickupPost} element={<PickupPostPage />} />
        <Route path={routes.writenPost} element={<WritenPostPage />} />
        <Route path={routes.uploadStudentCard} element={<UploadStudentCardPage />} />
        <Route path={routes.admin} element={<AdminPage />} />
        <Route path={routes.adminAuth} element={<AdminAuthPage />} />
        <Route path={routes.error} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
