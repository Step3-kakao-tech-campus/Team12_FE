import { BsThreeDotsVertical } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import OtherNav from '../atoms/OtherNav';
import Info from '../organisms/Info';
import Location from '../organisms/Location';

const WriterNoMatch = ({ response }) => {
  const navigate = useNavigate();

  // 삭제 버튼 눌렀을 때
  const postDelete = () => {
    return Swal.fire({
      // 여기 alert.js로 뺄려고 하는데 그러면 안되더라고요..
      title: '삭제하시겠습니까?',
      text: '삭제하면 음료를 픽업 받을 수 없게 됩니다.',
      showCancelButton: true,
      confirmButtonColor: '#0075FF',
      cancelButtonColor: '#D9D9D9',
      confirmButtonText: '확인',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        // 공고가 삭제됨
      }
    });
  };

  // 우상단 점3개 눌렀을 때
  const postControl = () => {
    return Swal.fire({
      showDenyButton: true,
      confirmButtonText: '수정',
      denyButtonText: '삭제',
    }).then((result) => {
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

export default WriterNoMatch;
