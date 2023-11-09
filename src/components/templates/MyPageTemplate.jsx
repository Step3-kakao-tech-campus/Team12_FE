import React from 'react';
// import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import OtherNav from '@components/atoms/nav/OtherNav';
import Footer from '@components/atoms/Footer';
import Button from '@components/atoms/button/Button';
import AdminMyPage from './mypage/AdminMyPageTemplate';
import GuestMyPage from './mypage/GuestMyPageTemplate';
import StudentMyPage from './mypage/StudentMyPageTemplate';
// import { getMyPage } from '@/apis/myPage';
import routes from '@/constant/routes';
import { logoutMessage, logoutCompleteMessage } from '@/utils/alert';

const MyPageTemplate = () => {
  const navigate = useNavigate();
  const authority = localStorage.getItem('userAuth');
  // const authority = 'GUEST';

  // const { data } = useQuery('myPage', getMyPage);

  // 샘플
  const sample = {
    success: true,
    response: {
      role: 'STUDENT',
      nickname: '닉네임',
    },
  };

  const userLevel = (author) => {
    /* eslint no-else-return: "error" */
    if (author === 'ADMIN') {
      return <div>관리자</div>;
    } else if (author === 'STUDENT') {
      return <div>전남대학교</div>;
    }
    return <div>학생 미인증</div>;
  };

  const certification = (author) => {
    /* eslint no-else-return: "error" */
    if (author === 'ADMIN') {
      return <AdminMyPage />;
    } else if (author === 'STUDENT') {
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
          {/* 나중에 지울거 */}
          {sample.response.nickname}
          <Button
            onClick={logout}
            width="w-[72px]"
            height="h-[28px]"
            textSize="text-[12px]"
            bgColor="bg-white"
            textColor="text-blue"
            border="border-2"
          >
            로그아웃
          </Button>
          {/* {data?data?.response?.nickname} */}
        </div>
        {userLevel(authority)}
      </div>
      <div>{certification(authority)}</div>
      <Footer />
    </div>
  );
};

export default MyPageTemplate;
