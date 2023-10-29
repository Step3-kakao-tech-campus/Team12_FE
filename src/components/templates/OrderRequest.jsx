import Labels from '../molecules/Labels';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import RangeInput from '../atoms/RangeInput';
import ErrorMsg from '../atoms/ErrorMsg';
import price from '../../constant/price';

const OrderRequest = ({ destinationError, register }) => {
  const DESTINATION = 'destination';
  const TIP = 'tip';
  const REQUEST = 'request';

  return (
    <>
      <div className="mt-6 mb-12">
        <Labels htmlFor={DESTINATION} label="어디로 픽업할까요? *" subLabel="피커가 해당 장소로 픽업해 줄 거예요." />
        <Input id={DESTINATION} name={DESTINATION} register={register} required placeholder="공과대학 7호관 1층" />
        {destinationError && <ErrorMsg />}
      </div>
      <div className="mt-6 mb-12">
        <Labels
          htmlFor={TIP}
          label="지불할 픽업팁을 선택 해주세요. *"
          subLabel="매칭이 성사되면, 피커에게 입금 해야합니다."
        />
        <div className="flex justify-between my-2 mx-[0.4rem]">
          <div>😭</div>
          <div>😍</div>
        </div>
        <div className="flex justify-center items-center">
          <RangeInput id={TIP} name={TIP} register={register} />
        </div>
        <div className="mt-3 flex justify-between text-xs text-gray-400">
          {price.map((x) => {
            return <div>{x}</div>;
          })}
        </div>
      </div>
      <div className="mt-6">
        <Labels htmlFor={REQUEST} label="피커에게 요청사항이 있나요?" subLabel="50자까지 입력 가능합니다." />
        <TextArea
          id={REQUEST}
          name={REQUEST}
          register={register}
          maxLength="50"
          placeholder="1층 도착하면 알려주세요!"
        />
      </div>
    </>
  );
};

export default OrderRequest;
