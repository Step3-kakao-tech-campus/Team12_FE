import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import OtherNav from '../../components/atoms/nav/OtherNav';
import AuthDetail from '../../components/organisms/AuthDetail';
import Button from '../../components/atoms/button/Button';
import { REJECT, APPROVE } from '../../constant/auth';
import { adminAuth } from '../../apis/admin';
import routes from '../../constant/routes';

const AdminAuthPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([]);
  const btnWidth = 'w-[8rem]';
  const btnHeight = 'h-[2.2rem]';

  useEffect(() => {
    fetch(`/admin/auth/list/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data.response);
      });
  }, []);

  // eslint-disable-next-line
  const { data: userDetail } = useQuery(['admin_auth_approval', id], () => adminAuth(id), {
    select: (data) => data?.response,
  });

  // 학생증 인증 요청 성공 & 에러에 따른 useMutation 정의
  const { mutate: handleAuth } = useMutation({
    mutationFn: adminAuth,
    onSuccess: () => {
      navigate(routes.admin);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  // 학생증 인증 승인
  const handleApprove = () => {
    handleAuth({ user_id: id });
  };

  // 학생증 인증 거절
  const handleReject = () => {
    navigate(routes.admin);
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
