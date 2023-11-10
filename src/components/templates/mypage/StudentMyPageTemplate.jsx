import { CiEdit } from 'react-icons/ci';
import { PiReadCvLogoThin, PiCheckSquareLight } from 'react-icons/pi';
import MyPageMenu from '@components/organisms/MyPageMenu';
import routes from '@/constant/routes';
import mypage from '@/constant/mypage';

const StudentMyPageTemplate = () => {
  const iconStyle = 'mx-2 inline-block';

  return (
    <>
      <div className="w-full h-1 bg-zinc-200" />
      <div className="px-5 mt-5">
        <MyPageMenu to={routes.writtenArticle} icon={<PiReadCvLogoThin className={iconStyle} size={25} />}>
          {mypage.WRITTEN_ARITCLE}
        </MyPageMenu>
        <MyPageMenu to={routes.pickupArticle} icon={<PiCheckSquareLight className={iconStyle} size={25} />}>
          {mypage.APPROVAL_ARTICLE}
        </MyPageMenu>
        <MyPageMenu icon={<CiEdit className={iconStyle} size={25} />}>{mypage.EDIT_INFO}</MyPageMenu>
      </div>
    </>
  );
};

export default StudentMyPageTemplate;
