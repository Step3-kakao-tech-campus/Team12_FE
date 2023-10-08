import { BsArrowLeft } from 'react-icons/bs';
import { BiSolidUser } from 'react-icons/bi';
import { MdHome } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const OtherNav = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between p-[25px] cursor-pointer">
      <BsArrowLeft size={25} onClick={() => navigate(-1)} />
      <div className="flex justify-end items-center">
        <Link to="/">
          <MdHome size={27} />
        </Link>
        {/* 마이페이지 라우터 할당 후 Link 설정 예정 */}
        <BiSolidUser size={25} className="ml-2" />
      </div>
    </div>
  );
};

export default OtherNav;
