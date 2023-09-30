import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StartPostPage from './pages/StartPostPage';
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start-post" element={<StartPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
