import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '@components/atoms/Loader';
import Footer from '@components/atoms/Footer';
import Button from '@components/atoms/button/Button';
import routes from '@/constant/routes';

const ErrorPage = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate(routes.home);
  };

  return (
    <div className="page--layout">
      <div className="text-center mt-32">
        <h1>원하시는 페이지를 찾을 수 없습니다.</h1>
        <p className="text-xs text-gray-500 mt-1 mb-2">
          찾으려는 페이지의 주소가 잘못 입력되었거나,
          <br />
          주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.
          <br />
          입력하신 페이지의 주소가 정확한지 다시 한 번 확인해 주세요!
        </p>
        <Button onClick={goMain}>픽업셔틀 홈으로 돌아가기</Button>
      </div>
      <Loader />
      <Footer />
    </div>
  );
};

export default ErrorPage;
