import { BsThreeDotsVertical } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import OtherNav from '@components/atoms/nav/OtherNav';
import PickUpInfo from '@components/organisms/PickUpInfo';
import LocationInfo from '@components/organisms/LocationInfo';
import { useMutation } from '@tanstack/react-query';
import { controlArticleMessage, deleteArticleMessage, articleDeleteSuccessMessage } from '@/utils/alert';
import routes from '@/constant/routes';
import { deleteArticle } from '@/apis/articleDetail';
import { MATCHING_STATE } from '@/constant/article';
import occurError from '@/utils/occurError';

const WriterNoMatchTemplate = ({ response }) => {
  const { shopName, destination, finishedAt, beverages, tip, request } = response;
  const { id } = useParams();
  const navigate = useNavigate();

  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteArticle,
    onSuccess: () => {
      Swal.fire(articleDeleteSuccessMessage).then(navigate(routes.article));
    },
    onError: (error) => {
      occurError(error);
    },
  });

  const articleDelete = () => {
    Swal.fire(deleteArticleMessage).then((result) => {
      if (result.isConfirmed) {
        deleteMutation({ id });
      }
    });
  };

  const handleOnOption = () => {
    return Swal.fire(controlArticleMessage).then((result) => {
      if (result.isConfirmed) {
        navigate(routes.articleWrite);
      } else if (result.isDenied) {
        articleDelete();
      }
    });
  };

  return (
    <>
      <div className="bg-sky-blue h-60 rounded-b-3xl">
        <OtherNav iconColor="#fff" bgColor="#000" />

        <div className="px-[25px]">
          <div className="flex justify-between items-center">
            <div className="text-white text-xl">{MATCHING_STATE.WAITING_MATCHING}</div>
            <button onClick={handleOnOption}>
              <BsThreeDotsVertical size="25" style={{ color: 'white' }} />
            </button>
          </div>
          <LocationInfo shopName={shopName} destination={destination} />
        </div>
      </div>

      <PickUpInfo isMatch="false" finishedAt={finishedAt} beverages={beverages} tip={tip} request={request} />
    </>
  );
};

export default WriterNoMatchTemplate;
