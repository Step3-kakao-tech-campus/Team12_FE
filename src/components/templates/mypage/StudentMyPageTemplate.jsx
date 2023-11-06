import { CiEdit } from 'react-icons/ci';
import { PiCaretRightLight, PiReadCvLogoThin, PiCheckSquareLight } from 'react-icons/pi';

const StudentMyPageTemplate = () => {
  return (
    <div>
      <div className="w-full h-1 bg-zinc-200" />
      <div className="px-5 mt-5">
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

export default StudentMyPageTemplate;
