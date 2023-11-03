import { CiEdit } from 'react-icons/ci';
import { PiCaretRightLight, PiReadCvLogoThin, PiCheckSquareLight } from 'react-icons/pi';
import { RiAdminLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import routes from '../../constant/routes';

const AdminMyPage = () => {
  const navigate = useNavigate();
  const navigateAdmin = () => {
    return navigate(routes.admin);
  };
  return (
    <div>
      <div className="h-24 p-5">
        <div className="text-xl font-bold">닉네임</div>
        <div>관리자</div>
      </div>
      <div className="w-full h-1 bg-zinc-200" />
      <div className="px-5 mt-5">
        <div className="py-3 text-lg">
          <button onClick={navigateAdmin} className="w-full flex justify-between">
            <div>
              <RiAdminLine className="mx-2 inline-block" size={25} />
              <div className="inline-block">관리자 페이지</div>
            </div>
            <PiCaretRightLight className="float-right" size={30} />
          </button>
        </div>
        <div className="py-3 text-lg">
          <PiReadCvLogoThin className="mx-2 inline-block" size={25} />
          <div className="inline-block">작성한 공고글</div>
          <PiCaretRightLight className="float-right" size={30} />
        </div>
        <div className="py-3 text-lg">
          <PiCheckSquareLight className="mx-2 inline-block" size={25} />
          <div className="inline-block">수락한 공고글</div>
          <PiCaretRightLight className="float-right" size={30} />
        </div>
        <div className="py-3 text-lg">
          <CiEdit className="mx-2 inline-block" size={25} />
          <div className="inline-block">개인정보 수정</div>
          <PiCaretRightLight className="float-right" size={30} />
        </div>
      </div>
    </div>
  );
};

export default AdminMyPage;
