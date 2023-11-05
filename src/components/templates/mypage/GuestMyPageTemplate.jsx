import { CiEdit } from 'react-icons/ci';
import { PiGraduationCapLight, PiCaretRightLight } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import routes from '../../../constant/routes';

const GuestMyPageTemplate = () => {
  const navigate = useNavigate();
  const uploadStudentIdCard = () => {
    return navigate(routes.uploadStudentCard);
  };
  return (
    <div>
      <div className="w-full h-1 bg-zinc-200" />
      <div className="px-5 mt-5">
        <div className="py-3 text-lg">
          <button onClick={uploadStudentIdCard} className="w-full flex justify-between">
            <div>
              <PiGraduationCapLight className="mx-2 inline-block" size={25} />
              <div className="inline-block">학생증 인증</div>
            </div>
            <PiCaretRightLight className="float-right" size={30} />
          </button>
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

export default GuestMyPageTemplate;
