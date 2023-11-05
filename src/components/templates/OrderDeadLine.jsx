/* eslint-disable */
import Labels from '../molecules/Labels';
import Input from '../atoms/input/Input';
import ErrorMsg from '../atoms/ErrorMsg';
import { ORDER_DEADLINE, HOUR, MINUTE } from '../../constant/postWrite/orderDeadLine';
import validateInputMsg from '../../constant/validateInputMsg';
import { useFormContext } from 'react-hook-form';

const OrderDeadLine = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mt-6 mb-12">
      <Labels htmlFor={HOUR} label={ORDER_DEADLINE.label} subLabel={ORDER_DEADLINE.subLabel} />
      <div className="flex items-center place-content-between">
        <Input
          id={HOUR}
          name={HOUR}
          register={register(HOUR, { required: validateInputMsg.HOUR_MSG })}
          type="number"
          min="0"
          max="24"
          width="w-[6rem]"
          placeholder="13"
        />
        시
        <Input
          name={MINUTE}
          register={register(MINUTE, { required: validateInputMsg.MINUTE_MSG })}
          type="number"
          min="0"
          max="59"
          width="w-[6rem]"
          placeholder="15"
        />
        분까지
      </div>
      <ErrorMsg errors={errors} name={HOUR} as="p" />
      <ErrorMsg errors={errors} name={MINUTE} as="p" />
    </div>
  );
};

export default OrderDeadLine;
