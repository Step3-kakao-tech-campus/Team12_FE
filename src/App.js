import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StartPostPage from './pages/StartPostPage';
import PostWritePage from './pages/PostWritePage';
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start-post" element={<StartPostPage />} />
        <Route path="/post-write" element={<PostWritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
