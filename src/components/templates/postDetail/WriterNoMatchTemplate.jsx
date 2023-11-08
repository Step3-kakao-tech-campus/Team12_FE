import { BsThreeDotsVertical } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import OtherNav from '../../atoms/nav/OtherNav';
import Info from '../../atoms/Info';
import Location from '../../organisms/Location';
import { controlArticleMessage, deleteArticleMessage } from '../../../utils/alert';

const WriterNoMatchTemplate = ({ response }) => {
  const navigate = useNavigate();

  // 삭제 버튼 눌렀을 때
  const postDelete = () => {
    return Swal.fire(deleteArticleMessage).then((result) => {
      if (result.isConfirmed) {
        // 공고가 삭제됨
      }
    });
  };

  // 우상단 점3개 눌렀을 때
  const postControl = () => {
    return Swal.fire(controlArticleMessage).then((result) => {
      if (result.isConfirmed) {
        // 공고 수정하게 됨
        navigate('/post-write');
      } else if (result.isDenied) {
        postDelete();
      }
    });
  };

  return (
    <>
      {/* 파란색 부분 */}
      <div className="bg-sky-blue h-60 rounded-b-3xl">
        <OtherNav iconColor="#fff" bgColor="#000" />
        <div className="px-5">
          <div className="flex justify-between items-center">
            <div className="mt-1 text-white text-xl">매칭을 기다리고 있어요.</div>
            {/* eslint-disable-next-line */}
            <button onClick={postControl}>
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
