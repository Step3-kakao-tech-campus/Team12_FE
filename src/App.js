import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import KakaoOuathPage from './pages/KakaoOuathPage';
import MyPage from './pages/MyPage';
import PostListPage from './pages/PostListPage';
import PostDetailPage from './pages/PostDetailPage';
import PostWriteIntroPage from './pages/PostWriteIntroPage';
import PostWritePage from './pages/PostWritePage';
import ErrorPage from './pages/ErrorPage';
import PostDetailWriterPage from './pages/PostDetailWriterPage';

import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/kakao" element={<KakaoOuathPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/post" element={<PostListPage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="/post/writer" element={<PostDetailWriterPage />} />
        <Route path="/post-write-intro" element={<PostWriteIntroPage />} />
        <Route path="/post-write" element={<PostWritePage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
