import { BsThreeDotsVertical } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import OtherNav from '@components/atoms/nav/OtherNav';
import Info from '@components/atoms/Info';
import Location from '@components/organisms/Location';
import { controlArticleMessage, deleteArticleMessage, articleDeleteSuccessMessage } from '@/utils/alert';
import routes from '@/constant/routes';

const WriterNoMatchTemplate = ({ response }) => {
  const navigate = useNavigate();

  // 삭제 버튼 눌렀을 때
  const articleDelete = () => {
    Swal.fire(deleteArticleMessage).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(articleDeleteSuccessMessage).then(navigate(routes.article));
      }
    });
  };

  // 우상단 점3개 눌렀을 때
  const articleControl = () => {
    return Swal.fire(controlArticleMessage).then((result) => {
      if (result.isConfirmed) {
        navigate('/article-write');
      } else if (result.isDenied) {
        articleDelete();
      }
    });
  };

  return (
    <>
      {/* 파란색 부분 */}
      <div className="bg-sky-blue h-60 rounded-b-3xl">
        <OtherNav iconColor="#fff" bgColor="#000" />
        <div className="px-[25px]">
          <div className="flex justify-between items-center">
            <div className="text-white text-xl">매칭을 기다리고 있어요.</div>
            {/* eslint-disable-next-line */}
            <button onClick={articleControl}>
              <BsThreeDotsVertical size="25" style={{ color: 'white' }} />
            </button>
          </div>
          <Location response={response} />
        </div>
      </div>
      {/* 하얀색 부분 */}
      <Info response={response} />
    </>
  );
};

export default WriterNoMatchTemplate;
