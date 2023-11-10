import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import OtherNav from '@components/atoms/nav/OtherNav';
import AuthDetail from '@components/organisms/AuthDetail';
import Button from '@components/atoms/button/Button';
import Swal from 'sweetalert2';
import { REJECT, APPROVE } from '@/constant/auth';
import { adminAuth, adminAuthReject } from '@/apis/admin';
import routes from '@/constant/routes';
import { authApproval, authReject, authApprovalComplete, authRejectComplete } from '@/utils/alert';
import occurError from '@/utils/occurError';

const AdminAuthPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const btnWidth = 'w-[8rem]';
  const btnHeight = 'h-[2.2rem]';

  // eslint-disable-next-line
  const { data: userDetail } = useQuery(['admin_auth_approval', id], adminAuth(id), {
    select: (data) => data?.data?.response,
    onError: (error) => {
      occurError(error);
    },
  });

  const { mutate: handleAuth } = useMutation({
    mutationFn: adminAuth,
    onSuccess: () => {
      Swal.fire(authApprovalComplete).then(navigate(routes.admin));
    },
    onError: (error) => {
      occurError(error);
    },
  });

  // 학생증 인증 승인
  const handleApprove = () => {
    Swal.fire(authApproval).then((result) => {
      if (result.isConfirmed) {
        handleAuth({ userId: id });
      }
    });
  };

  // 학생증 인증 거절
  const handleReject = () => {
    Swal.fire(authReject).then((result) => {
      if (result.isConfirmed) {
        adminAuthReject({ userId: id }).then(Swal.fire(authRejectComplete)).then(navigate(routes.admin));
      }
    });
  };

  return (
    <div className="page--layout flex flex-col justify-between">
      <div>
        <OtherNav />
        <div className="pt-[25px] p-[35px]">
          <AuthDetail user={userDetail} />
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
