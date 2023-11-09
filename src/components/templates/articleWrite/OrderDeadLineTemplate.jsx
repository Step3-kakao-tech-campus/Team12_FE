/* eslint-disable */
import Labels from '@components/molecules/Labels';
import Input from '@components/atoms/input/Input';
import ErrorMsg from '@components/atoms/ErrorMsg';
import { ORDER_DEADLINE, ITEM } from '@/constant/writeArticle';
import validateInputMsg from '@/constant/validateInputMsg';
import { useFormContext } from 'react-hook-form';

const OrderDeadLineTemplate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mt-6 mb-12">
      <Labels htmlFor={ITEM.HOUR} label={ORDER_DEADLINE.label} subLabel={ORDER_DEADLINE.subLabel} />
      <div className="flex items-center place-content-between">
        <Input
          id={ITEM.HOUR}
          name={ITEM.HOUR}
          register={register(ITEM.HOUR, { required: validateInputMsg.HOUR_MSG })}
          type="number"
          min="0"
          max="24"
          width="w-[6rem]"
          placeholder="13"
        />
        시
        <Input
          name={ITEM.MINUTE}
          register={register(ITEM.MINUTE, { required: validateInputMsg.MINUTE_MSG })}
          type="number"
          min="0"
          max="59"
          width="w-[6rem]"
          placeholder="15"
        />
        분까지
      </div>
      <ErrorMsg errors={errors} name={ITEM.HOUR} as="p" />
      <ErrorMsg errors={errors} name={ITEM.MINUTE} as="p" />
    </div>
  );
};

export default OrderDeadLineTemplate;
