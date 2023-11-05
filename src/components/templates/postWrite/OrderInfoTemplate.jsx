/*eslint-disable*/
import { useFieldArray, useFormContext } from 'react-hook-form';
import Labels from '../../molecules/Labels';
import SelectInput from '../../atoms/input/SelectInput';
import Input from '../../atoms/input/Input';
import ErrorMsg from '../../atoms/ErrorMsg';
import PlusBtn from '../../atoms/button/PlusBtn';
import MinusBtn from '../../atoms/button/MinusBtn';
import { ORDER_INFO_STORE, ORDER_INFO_BEVERAGE, STORE, BEVERAGE } from '../../../constant/postWrite/orderInfo';
import validateInputMsg from '../../../constant/validateInputMsg';

const OrderInfoTemplate = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: BEVERAGE });

  return (
    <>
      <div className="mt-6 mb-12">
        <Labels htmlFor={STORE} label={ORDER_INFO_STORE.label} subLabel={ORDER_INFO_STORE.subLabel} />
        <SelectInput
          register={register(STORE, { required: validateInputMsg.STORE_MSG })}
          id={STORE}
          name={STORE}
          className="mb-10"
        />
        <ErrorMsg errors={errors} name={STORE} as="p" />
      </div>

      <div className="mt-6">
        <Labels htmlFor={BEVERAGE} label={ORDER_INFO_BEVERAGE.label} subLabel={ORDER_INFO_BEVERAGE.subLabel} />
        <div className="flex flex-col">
          <div className="flex items-center">
            {/* <Input
              id={BEVERAGE}
              name={`${BEVERAGE}.0.value`}
              register={register(`${BEVERAGE}.0.value`)}
              required
              width="w-[15rem]"
              placeholder="아이스 아메리카노 1잔"
            /> */}
            <PlusBtn onClick={() => append({ value: '' })} />
          </div>
          {fields.map((field, index) => {
            return (
              <div className="flex items-center">
                <li key={field.id} className="list-none">
                  <Input
                    id={BEVERAGE}
                    name={`${BEVERAGE}.${index}.value`}
                    register={register(`${BEVERAGE}.${index}.value`, {
                      required: validateInputMsg.BEVERAGE_MSG,
                    })}
                    width="w-[15rem]"
                    placeholder="아이스 아메리카노 1잔"
                  />
                </li>
                <MinusBtn onClick={() => remove(index)} />
              </div>
            );
          })}
        </div>
        <ErrorMsg errors={errors} name={`${BEVERAGE}.0.value`} as="p" />
      </div>
    </>
  );
};

export default OrderInfoTemplate;
