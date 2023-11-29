import Labels from '@components/molecules/Labels';
import Input from '@components/atoms/input/Input';
import TextArea from '@components/atoms/TextArea';
import RangeInput from '@components/atoms/input/RangeInput';
import ErrorMsg from '@components/atoms/ErrorMsg';
import { useFormContext } from 'react-hook-form';
import price from '@/constant/price';
import { ITEM, ORDER_REQUEST, ORDER_DESTINATION, ORDER_TIP } from '@/constant/writeArticle';
import validateInputMsg from '@/constant/validateInputMsg';

const OrderRequestTemplate = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <section className="mt-6 mb-12">
        <Labels htmlFor={ITEM.DESTINATION} label={ORDER_DESTINATION.LABEL} subLabel={ORDER_DESTINATION.SUB_LABEL} />
        <Input
          id={ITEM.DESTINATION}
          name={ITEM.DESTINATION}
          register={register(ITEM.DESTINATION, { required: validateInputMsg.DESTINATION_MSG })}
          placeholder="공과대학 7호관 1층"
        />
        <ErrorMsg errors={errors} name={ITEM.DESTINATION} as="p" />
      </section>
      <section className="mt-6 mb-12">
        <Labels htmlFor={ITEM.TIP} label={ORDER_TIP.LABEL} subLabel={ORDER_TIP.SUB_LABEL} />
        <div className="flex justify-between my-2 mx-[0.4rem]">
          <p>😭</p>
          <p>😍</p>
        </div>
        <div className="flex justify-center items-center">
          <RangeInput id={ITEM.TIP} name={ITEM.TIP} register={register(ITEM.TIP)} />
        </div>
        <div className="mt-3 flex justify-between text-xs text-gray-400">
          {price.map((x) => {
            return <p>{x}</p>;
          })}
        </div>
      </section>
      <section className="mt-6">
        <Labels htmlFor={ITEM.REQUEST} label={ORDER_REQUEST.LABEL} subLabel={ORDER_REQUEST.SUB_LABEL} />
        <TextArea
          id={ITEM.REQUEST}
          name={ITEM.REQUEST}
          register={register(ITEM.REQUEST)}
          maxLength="50"
          placeholder="1층 도착하면 알려주세요!"
        />
      </section>
    </>
  );
};

export default OrderRequestTemplate;
