import { CiEdit } from 'react-icons/ci';
import { PiReadCvLogoThin, PiCheckSquareLight } from 'react-icons/pi';
import MyPageMenu from '@components/organisms/MyPageMenu';
import routes from '@/constant/routes';
import MYPAGE from '@/constant/mypage';

const StudentMyPageTemplate = () => {
  const iconStyle = 'mx-2 inline-block';
  const SIZE = '25';
  return (
    <>
      <div className="w-full h-1 bg-zinc-200" />
      <div className="px-5 mt-5">
        <MyPageMenu to={routes.writtenArticle} icon={<PiReadCvLogoThin className={iconStyle} size={SIZE} />}>
          {MYPAGE.WRITTEN_ARTICLE}
        </MyPageMenu>
        <MyPageMenu to={routes.pickupArticle} icon={<PiCheckSquareLight className={iconStyle} size={SIZE} />}>
          {MYPAGE.APPROVAL_ARTICLE}
        </MyPageMenu>
        <MyPageMenu to={routes.mypageModify} icon={<CiEdit className={iconStyle} size={SIZE} />}>
          {MYPAGE.EDIT_INFO}
        </MyPageMenu>
      </div>
    </>
  );
};

export default StudentMyPageTemplate;
