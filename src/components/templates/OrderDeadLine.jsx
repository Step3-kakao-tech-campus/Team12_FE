import Labels from '../molecules/Labels';
import Input from '../atoms/Input';

const OrderDeadLine = () => {
  return (
    <>
      <Labels
        htmlFor="deadline"
        label="공고를 언제까지 띄울까요? *"
        subLabel="마감기한을 설정해주세요! 마감기한이 지나면 공고가 사라져요."
      />
      <Input id="deadline" placeholder="13" />
      <Input id="deadline-1" placeholder="15" />
    </>
  );
};

export default OrderDeadLine;
