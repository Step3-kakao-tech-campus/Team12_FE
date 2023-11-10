import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import OtherNav from '@components/atoms/nav/OtherNav';
import Footer from '@components/atoms/Footer';
import Button from '@components/atoms/button/Button';
import AdminMyPage from './mypage/AdminMyPageTemplate';
import GuestMyPage from './mypage/GuestMyPageTemplate';
import StudentMyPage from './mypage/StudentMyPageTemplate';
import routes from '@/constant/routes';
import { logoutMessage, logoutCompleteMessage } from '@/utils/alert';
import { USER_LEVEL, STUDENT, LOGOUT } from '@/constant/auth';

const MyPageTemplate = () => {
  const navigate = useNavigate();
  const authority = localStorage.getItem('userAuth');
  const nickName = localStorage.getItem('nickName');

  const userLevel = (author) => {
    if (author === USER_LEVEL.ADMIN) {
      return <div>{USER_LEVEL.ADMIN_NAME}</div>;
    }
    if (author === USER_LEVEL.STUDENT) {
      return <div>{STUDENT.USER_SCHOOL}</div>;
    }
    return <div>{STUDENT.STUDENT + USER_LEVEL.NOT_CERTIFIED}</div>;
  };

  const certification = (author) => {
    if (author === USER_LEVEL.ADMIN) {
      return <AdminMyPage />;
    }
    if (author === USER_LEVEL.STUDENT) {
      return <StudentMyPage />;
    }
    return <GuestMyPage />;
  };

  const logout = () => {
    Swal.fire(logoutMessage).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(logoutCompleteMessage).then(localStorage.clear()).then(navigate(routes.home));
      }
    });
  };

  return (
    <div className="page--layout">
      <OtherNav />
      <div className="h-24 p-5">
        <div className="flex justify-between text-xl font-bold">
          {nickName}
          <Button
            onClick={logout}
            width="w-[72px]"
            height="h-[28px]"
            textSize="text-[12px]"
            bgColor="bg-white"
            textColor="text-blue"
            border="border-2"
          >
            {LOGOUT}
          </Button>
        </div>
        {userLevel(authority)}
      </div>
      <div>{certification(authority)}</div>
      <Footer />
    </div>
  );
};

export default MyPageTemplate;
