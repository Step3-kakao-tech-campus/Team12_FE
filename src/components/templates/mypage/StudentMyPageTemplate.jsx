import { CiEdit } from 'react-icons/ci';
import { PiReadCvLogoThin, PiCheckSquareLight } from 'react-icons/pi';
import MyPageMenu from '@components/organisms/MyPageMenu';
import routes from '@/constant/routes';
import mypage from '@/constant/mypage';

const StudentMyPageTemplate = () => {
  const iconStyle = 'className="mx-2 inline-block" size={25}';
  return (
    <div>
      <div className="w-full h-1 bg-zinc-200" />
      <div className="px-5 mt-5">
        <MyPageMenu to={routes.writtenArticle} icon={<PiReadCvLogoThin className={iconStyle} />}>
          {mypage.WRITTEN_ARTICLE}
        </MyPageMenu>
        <MyPageMenu to={routes.pickupArticle} icon={<PiCheckSquareLight className={iconStyle} />}>
          {mypage.APPROVAL_ARTICLE}
        </MyPageMenu>
        <MyPageMenu icon={<CiEdit className={iconStyle} />}>{mypage.EDIT_INFO}</MyPageMenu>
      </div>
    </div>
  );
};

export default StudentMyPageTemplate;
