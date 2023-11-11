import { CiEdit } from 'react-icons/ci';
import { PiReadCvLogoThin, PiCheckSquareLight, PiGraduationCapLight } from 'react-icons/pi';
import { RiAdminLine } from 'react-icons/ri';
import MyPageMenu from '@components/organisms/MyPageMenu';
import MYPAGE from '@/constant/mypage';
import routes from '@/constant/routes';
import { STUDENT } from '@/constant/auth';

const AdminMyPageTemplate = () => {
  const iconStyle = 'mx-2 inline-block';

  return (
    <div>
      <div className="w-full h-1 bg-zinc-200" />
      <div className="px-5 mt-5">
        <MyPageMenu to={routes.admin} icon={<RiAdminLine className={iconStyle} size={25} />}>
          {MYPAGE.ADMIN}
        </MyPageMenu>
        <MyPageMenu to={routes.writtenArticle} icon={<PiReadCvLogoThin className={iconStyle} size={25} />}>
          {MYPAGE.WRITTEN_ARTICLE}
        </MyPageMenu>
        <MyPageMenu to={routes.pickupArticle} icon={<PiCheckSquareLight className={iconStyle} size={25} />}>
          {MYPAGE.APPROVAL_ARTICLE}
        </MyPageMenu>
        <MyPageMenu icon={<CiEdit className={iconStyle} size={25} />}>{MYPAGE.EDIT_INFO}</MyPageMenu>
        {/* 임시 학생증인증 */}
        <MyPageMenu to={routes.uploadStudentCard} icon={<PiGraduationCapLight className={iconStyle} size={25} />}>
          {STUDENT.TITLE}
        </MyPageMenu>
      </div>
    </div>
  );
};

export default AdminMyPageTemplate;
