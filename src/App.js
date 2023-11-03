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
import ProtectedRoute from './components/templates/ProtectedRoute';
import CheckStudentCardPage from './pages/CheckStudentCardPage';
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
        <Route
          path={routes.mypage}
          element={
            <ProtectedRoute>
              <MyPage />
            </ProtectedRoute>
          }
        />
        <Route path={routes.checkStudentCard} element={<CheckStudentCardPage />} />
        <Route path={routes.post} element={<PostListPage />} />
        <Route path={routes.detailPost} element={<PostDetailPage />} />
        <Route path={routes.postWriteIntro} element={<PostWriteIntroPage />} />
        <Route path={routes.postWrite} element={<PostWritePage />} />
        <Route path={routes.error} element={<ErrorPage />} />
        <Route path={routes.admin} element={<AdminPage />} />
        <Route path={routes.adminAuth} element={<AdminAuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
