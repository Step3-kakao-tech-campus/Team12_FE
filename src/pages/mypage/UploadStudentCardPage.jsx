import { useQuery } from '@tanstack/react-query';
import OtherNav from '@components/atoms/nav/OtherNav';
import UploadForm from '@components/organisms/UploadForm';
import Loader from '@components/atoms/Loader';
import { getUserAuth } from '@/apis/myPage';
import { STUDENT, USER_LEVEL } from '@/constant/auth';
import occurError from '@/utils/occurError';

const CheckStudentCardPage = () => {
  const { data: checking, isLoading } = useQuery(['/mypage/auth'], getUserAuth, {
    select: (data) => data,
    onError: (error) => {
      occurError(error);
    },
  });
  console.log(checking);

  if (isLoading) return <Loader />;
  // 학생증인증중인지 아닌지 체크
  const isCheck = (check) => {
    if (check.message === USER_LEVEL.NOT_CERTIFIED) return <UploadForm />;
    return <div className="text-center text-xl my-10">{STUDENT.IN_PROGRESS}</div>;
  };

  return (
    <div className="page--layout">
      <OtherNav />
      <div className="text-center text-xl text-blue mt-10 mb-6">{STUDENT.TITLE}</div>
      {isCheck(checking)}
    </div>
  );
};

export default CheckStudentCardPage;
