/* eslint-disable */
import Labels from '@components/molecules/Labels';
import Input from '@components/atoms/input/Input';
import ErrorMsg from '@components/atoms/ErrorMsg';
import { ORDER_DEADLINE, ITEM } from '@/constant/writeArticle';
import validateInputMsg from '@/constant/validateInputMsg';
import { useFormContext } from 'react-hook-form';
import { DEAD_LINE } from '@/constant/writeArticle';

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
          register={register(ITEM.HOUR, {
            required: validateInputMsg.HOUR_MSG,
            validate: (value) => (value >= 0 && value <= 24 ? true : validateInputMsg.HOUR_MSG),
          })}
          type="number"
          width="w-[6rem]"
          placeholder="13"
        />
        {DEAD_LINE.HOUR}
        <Input
          name={ITEM.MINUTE}
          register={register(ITEM.MINUTE, {
            required: validateInputMsg.MINUTE_MSG,
            validate: (value) => (value >= 0 && value <= 59 ? true : validateInputMsg.MINUTE_MSG),
          })}
          type="number"
          width="w-[6rem]"
          placeholder="15"
        />
        {DEAD_LINE.UNTIL_MINUTE}
      </div>
      <ErrorMsg errors={errors} name={ITEM.HOUR} as="p" />
      <ErrorMsg errors={errors} name={ITEM.MINUTE} as="p" />
    </div>
  );
};

export default OrderDeadLineTemplate;
