import { useEffect, useState } from 'react';
import OtherNav from '../components/atoms/OtherNav';
import AuthDetail from '../components/organisms/AuthDetail';

const AdminAuthPage = () => {
  //   const { id } = useParams();
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch('/admin/auth/1')
      .then((response) => response.json())
      .then((data) => {
        const userArray = data.response;
        setUserInfo(userArray);
      });
  }, []);

  return (
    <div className="page--layout">
      <OtherNav />
      <div className="pt-[25px] p-[35px]">
        <AuthDetail user={userInfo} />
      </div>
    </div>
  );
};

export default AdminAuthPage;
