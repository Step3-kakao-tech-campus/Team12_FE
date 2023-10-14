import Labels from '../molecules/Labels';
import Input from '../atoms/Input';
import ErrorMsg from '../atoms/ErrorMsg';

const OrderDeadLine = ({ register, deadLineError }) => {
  const HOUR = 'hour';
  const MINUTE = 'minute';

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  const finishedAt = `${year}-${month}-${date}`;
  console.log(finishedAt);

  return (
    <div className="mt-6 mb-12">
      <Labels
        htmlFor={HOUR}
        label="공고를 언제까지 띄울까요? *"
        subLabel="마감기한을 설정해주세요! 마감기한이 지나면 공고가 사라져요."
      />
      <div className="flex items-center place-content-between">
        <Input
          id={HOUR}
          name={HOUR}
          register={register}
          required
          type="number"
          min="0"
          max="24"
          width="w-[6rem]"
          placeholder="13"
        />
        시
        <Input
          name={MINUTE}
          register={register}
          required
          type="number"
          min="0"
          max="59"
          id="deadline-1"
          width="w-[6rem]"
          placeholder="15"
        />
        분까지
      </div>
      {deadLineError && <ErrorMsg />}
    </div>
  );
};

export default OrderDeadLine;
