import Labels from '../molecules/Labels';
import Input from '../atoms/Input';

const OrderDeadLine = () => {
  return (
    <div className="mt-6 mb-12">
      <Labels
        htmlFor="deadline"
        label="공고를 언제까지 띄울까요? *"
        subLabel="마감기한을 설정해주세요! 마감기한이 지나면 공고가 사라져요."
      />
      <div className="flex items-center place-content-between">
        <Input type="number" min="0" max="24" id="deadline" width="w-[6rem]" placeholder="13" />시
        <Input type="number" min="0" max="24" id="deadline-1" width="w-[6rem]" placeholder="15" />
        분까지
      </div>
    </div>
  );
};

export default OrderDeadLine;
