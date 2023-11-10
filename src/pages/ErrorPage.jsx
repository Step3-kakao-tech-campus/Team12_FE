import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '@components/atoms/Loader';
import Footer from '@components/atoms/Footer';
import Button from '@components/atoms/button/Button';
import { ERROR } from '@/constant/error';
import routes from '@/constant/routes';

const ErrorPage = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate(routes.home);
  };

  return (
    <div className="page--layout">
      <div className="text-center mt-32">
        <h1>{ERROR.NO_PAGE}</h1>
        <p className="text-xs text-gray-500 mt-1 mb-2 whitespace-pre">{ERROR.DESCRIPTION}</p>
        <Button onClick={goMain}>{ERROR.GO_HOME}</Button>
      </div>
      <Loader />
      <Footer />
    </div>
  );
};

export default ErrorPage;
