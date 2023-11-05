import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import OtherNav from '../components/atoms/OtherNav';
import AuthDetail from '../components/organisms/AuthDetail';
import Button from '../components/atoms/Button';
import { REJECT, APPROVE } from '../constant/auth';
import { adminAuth } from '../apis/admin';

const AdminAuthPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([]);
  const btnWidth = 'w-[8rem]';
  const btnHeight = 'h-[2.2rem]';

  useEffect(() => {
    fetch(`/admin/auth/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data.response);
      });
  }, []);

  // eslint-disable-next-line
  const { data: userDetail } = useQuery(['admin_auth_approval', id], () => adminAuth(id), {
    select: (data) => data?.response,
  });

  const { mutate: handleAuth } = useMutation({
    mutationFn: adminAuth,
    onSuccess: () => {
      navigate('/admin');
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleApprove = () => {
    handleAuth({ user_id: id });
  };

  const handleReject = () => {
    navigate('/admin');
  };

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
          onClick={handleReject}
          width={btnWidth}
          height={btnHeight}
          bgColor="bg-white"
          textColor="text-blue"
          bdRadius="rounded-lg border-blue border-2"
        >
          {REJECT}
        </Button>
        <Button onClick={handleApprove} width={btnWidth} height={btnHeight} bgColor="bg-blue">
          {APPROVE}
        </Button>
      </div>
    </div>
  );
};

export default AdminAuthPage;
