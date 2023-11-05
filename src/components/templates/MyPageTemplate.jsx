import React from 'react';
// import { useQuery } from '@tanstack/react-query';
import OtherNav from '../atoms/nav/OtherNav';
import AdminMyPage from './mypage/AdminMyPageTemplate';
import GuestMyPage from './mypage/GuestMyPageTemplate';
import StudentMyPage from './mypage/StudentMyPageTemplate';
import Footer from '../atoms/Footer';
// import { getMyPage } from '../../apis/myPage';

const MyPageTemplate = () => {
  // const authority = localStorage.getItem('userAuth');
  const authority = 'guest';

  // const { data } = useQuery('myPage', getMyPage);

  // 샘플
  const sample = {
    success: true,
    response: {
      role: 'student',
      nickname: '닉네임',
    },
  };

  const userLevel = (author) => {
    /* eslint no-else-return: "error" */
    if (author === 'admin') {
      return <div>관리자</div>;
    } else if (author === 'user') {
      return <div>전남대학교</div>;
    }
    return <div>학생 미인증</div>;
  };

  const certification = (author) => {
    /* eslint no-else-return: "error" */
    if (author === 'admin') {
      return <AdminMyPage />;
    } else if (author === 'user') {
      return <StudentMyPage />;
    }
    return <GuestMyPage />;
  };

  return (
    <div className="page--layout">
      <OtherNav />
      <div className="h-24 p-5">
        <div className="text-xl font-bold">
          {/* 나중에 지울거 */}
          {sample.response.nickname}
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
