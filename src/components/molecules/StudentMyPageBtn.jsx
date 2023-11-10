import Button from '@components/atoms/button/Button';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import routes from '@/constant/routes';
import { requestCardModalMessage, successRequestCardMessage, errorRequestCardMessage } from '@/utils/alert';
import { STUDENT } from '@/constant/auth';
import uploadCard from '@/apis/uploadCard';
import { ALERT_ERROR } from '@/constant/error';

const StudentMyPageBtn = ({ isUploadImg, formData }) => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: uploadCard,
    onSuccess: () => {
      navigate(routes.mypage);
    },
    onError: (error) => {
      ALERT_ERROR(error);
    },
  });

  const requestCardModal = () => {
    if (!isUploadImg) {
      Swal.fire(errorRequestCardMessage);
      return;
    }

    Swal.fire(requestCardModalMessage).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(successRequestCardMessage).then(mutate(formData));
      }
    });
  };

  const navigatePrev = () => {
    navigate(routes.mypage);
  };

  return (
    <div className="mt-72 flex justify-between px-10">
      <Button width="w-32" textColor="text-black" bgColor="bg-zinc-300" onClick={navigatePrev}>
        {STUDENT.CANCEL}
      </Button>
      <Button width="w-32" onClick={requestCardModal}>
        {STUDENT.COMPLETE}
      </Button>
    </div>
  );
};

export default StudentMyPageBtn;
