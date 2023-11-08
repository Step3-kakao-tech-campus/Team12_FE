import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Button from '../atoms/button/Button';

const BtnNavigate = ({ handlePrev, handleNext }) => {
  const btnWidth = 'w-[8rem]';
  const btnHeight = 'h-[2.2rem]';

  return (
    <div className="flex place-content-around m-6">
      <Button
        onClick={handlePrev}
        width={btnWidth}
        height={btnHeight}
        bgColor="bg-white"
        textColor="text-blue"
        bdRadius="rounded-lg border-blue border-2"
      >
        <div className="flex items-center">
          <IoIosArrowBack size={20} className="text-left mr-9" />
          이전
        </div>
      </Button>
      <Button type="submit" onClick={handleNext} width={btnWidth} height={btnHeight} bgColor="bg-blue">
        <div className="flex items-center justify-end">
          다음
          <IoIosArrowForward size={20} className="ml-9" />
        </div>
      </Button>
    </div>
  );
};

export default BtnNavigate;
