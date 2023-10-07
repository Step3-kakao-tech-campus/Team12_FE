import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Button from '../atoms/Button';

const BtnNavigate = ({ handlePrev, handleNext }) => {
  return (
    <div className="flex place-content-around m-6">
      <Button
        onClick={handlePrev}
        width="w-[8rem]"
        bgColor="bg-white"
        textColor="text-blue"
        bdRadius="rounded-lg border-blue border-2"
      >
        <div className="flex items-center">
          <IoIosArrowBack size={20} className="text-left mr-9" />
          이전
        </div>
      </Button>
      <Button onClick={handleNext} width="w-[8rem]" bgColor="bg-blue">
        <div className="flex items-center justify-end">
          다음
          <IoIosArrowForward size={20} className="ml-9" />
        </div>
      </Button>
    </div>
  );
};

export default BtnNavigate;
