import { useEffect, useState } from 'react';
import OtherNav from '../components/atoms/OtherNav';
import AuthDetail from '../components/organisms/AuthDetail';
import Button from '../components/atoms/Button';
import { REJECT, APPROVE } from '../constant/auth';

const AdminAuthPage = () => {
  //   const { id } = useParams();
  const [userInfo, setUserInfo] = useState([]);
  const btnWidth = 'w-[8rem]';
  const btnHeight = 'h-[2.2rem]';

  useEffect(() => {
    fetch('/admin/auth/1')
      .then((response) => response.json())
      .then((data) => {
        const userArray = data.response;
        setUserInfo(userArray);
      });
  }, []);

  return (
    <div className="page--layout flex flex-col justify-between">
      <div>
        <OtherNav />
        <div className="pt-[25px] p-[35px]">
          <AuthDetail user={userInfo} />
        </div>
      </div>
      <div className="flex place-content-around p-[35px] mb-[20px]">
        <Button
          width={btnWidth}
          height={btnHeight}
          bgColor="bg-white"
          textColor="text-blue"
          bdRadius="rounded-lg border-blue border-2"
        >
          {REJECT}
        </Button>
        <Button width={btnWidth} height={btnHeight} bgColor="bg-blue">
          {APPROVE}
        </Button>
      </div>
    </div>
  );
};

export default AdminAuthPage;
