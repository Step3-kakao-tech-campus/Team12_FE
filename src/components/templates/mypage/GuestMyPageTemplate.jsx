import { CiEdit } from 'react-icons/ci';
import { PiGraduationCapLight } from 'react-icons/pi';
import MyPageMenu from '@components/organisms/MyPageMenu';
import routes from '@/constant/routes';
import { STUDENT } from '@/constant/auth';
import MYPAGE from '@/constant/mypage';

const GuestMyPageTemplate = () => {
  const iconStyle = 'mx-2 inline-block';

  return (
    <div>
      <div className="w-full h-1 bg-zinc-200" />
      <div className="px-5 mt-5">
        <MyPageMenu to={routes.uploadStudentCard} icon={<PiGraduationCapLight className={iconStyle} size={25} />}>
          {STUDENT.TITLE}
        </MyPageMenu>
        <MyPageMenu icon={<CiEdit className={iconStyle} size={25} />}>{MYPAGE.EDIT_INFO}</MyPageMenu>
      </div>
    </div>
  );
};

export default GuestMyPageTemplate;
