import { useEffect, useState } from 'react';
import AuthRequest from '../components/organisms/AuthRequest';
import OtherNav from '../components/atoms/OtherNav';

const AdminPage = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch('/admin')
      .then((response) => response.json())
      .then((data) => {
        const userArray = data.response.user;
        setUserInfo(userArray);
      });
  }, []);

  return (
    <djiv className="page--layout">
      <OtherNav />
      <div className="pt-[25px] p-[35px]">
        <div className="text-center text-xl text-blue mb-10">학생 인증 요청</div>
        {userInfo.map((item) => {
          return <AuthRequest key={item.id} user={item} />;
        })}
      </div>
    </djiv>
  );
};

export default AdminPage;
