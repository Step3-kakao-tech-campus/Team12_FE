/*eslint-disable*/
import Labels from '@components/molecules/Labels';
import Input from '@components/atoms/input/Input';
import TextArea from '@components/atoms/TextArea';
import RangeInput from '@components/atoms/input/RangeInput';
import ErrorMsg from '@components/atoms/ErrorMsg';
import price from '@/constant/price';
import { ITEM, ORDER_REQUEST } from '@/constant/writeArticle';
import validateInputMsg from '@/constant/validateInputMsg';
import { useFormContext } from 'react-hook-form';

const OrderRequestTemplate = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <>
      <div className="mt-6 mb-12">
        <Labels
          htmlFor={ITEM.DESTINATION}
          label="어디로 픽업할까요? *"
          subLabel="피커가 해당 장소로 픽업해 줄 거예요."
        />
        <Input
          id={ITEM.DESTINATION}
          name={ITEM.DESTINATION}
          register={register(ITEM.DESTINATION, { required: validateInputMsg.DESTINATION_MSG })}
          placeholder="공과대학 7호관 1층"
        />
        <ErrorMsg errors={errors} name={ITEM.DESTINATION} as="p" />
      </div>
      <div className="mt-6 mb-12">
        <Labels
          htmlFor={ITEM.TIP}
          label="지불할 픽업팁을 선택 해주세요. *"
          subLabel="매칭이 성사되면, 피커에게 입금 해야합니다."
        />
        <div className="flex justify-between my-2 mx-[0.4rem]">
          <div>😭</div>
          <div>😍</div>
        </div>
        <div className="flex justify-center items-center">
          <RangeInput id={ITEM.TIP} name={ITEM.TIP} register={register(ITEM.TIP)} />
        </div>
        <div className="mt-3 flex justify-between text-xs text-gray-400">
          {price.map((x) => {
            return <div>{x}</div>;
          })}
        </div>
      </div>
      <div className="mt-6">
        <Labels htmlFor={ITEM.REQUEST} label="피커에게 요청사항이 있나요?" subLabel="50자까지 입력 가능합니다." />
        <TextArea
          id={ITEM.REQUEST}
          name={ITEM.REQUEST}
          register={register(ITEM.REQUEST)}
          maxLength="50"
          placeholder="1층 도착하면 알려주세요!"
        />
      </div>
    </>
  );
};

export default OrderRequestTemplate;
