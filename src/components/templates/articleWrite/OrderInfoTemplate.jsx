/*eslint-disable*/
import { useFieldArray, useFormContext } from 'react-hook-form';
import Labels from '@components/molecules/Labels';
import SelectInput from '@components/atoms/input/SelectInput';
import Input from '@components/atoms/input/Input';
import ErrorMsg from '@components/atoms/ErrorMsg';
import PlusBtn from '@components/atoms/button/PlusBtn';
import MinusBtn from '@components/atoms/button/MinusBtn';
import { ORDER_INFO_STORE, ORDER_INFO_BEVERAGE, ITEM } from '@/constant/writeArticle';
import validateInputMsg from '@/constant/validateInputMsg';

const OrderInfoTemplate = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: ITEM.BEVERAGE });

  return (
    <>
      <div className="mt-6 mb-12">
        <Labels htmlFor={ITEM.STORE} label={ORDER_INFO_STORE.label} subLabel={ORDER_INFO_STORE.subLabel} />
        <SelectInput
          register={register(ITEM.STORE, { required: validateInputMsg.STORE_MSG })}
          id={ITEM.STORE}
          name={ITEM.STORE}
          className="mb-10"
        />
        <ErrorMsg errors={errors} name={ITEM.STORE} as="p" />
      </div>

      <div className="mt-6">
        <Labels htmlFor={ITEM.BEVERAGE} label={ORDER_INFO_BEVERAGE.label} subLabel={ORDER_INFO_BEVERAGE.subLabel} />
        <div className="flex flex-col">
          <div className="flex items-center">
            {/* <Input
              id={ITEM.BEVERAGE}
              name={`${ITEM.BEVERAGE}.0.value`}
              register={register(`${ITEM.BEVERAGE}.0.value`)}
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
                    id={ITEM.BEVERAGE}
                    name={`${ITEM.BEVERAGE}.${index}.value`}
                    register={register(`${ITEM.BEVERAGE}.${index}.value`, {
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
        <ErrorMsg errors={errors} name={`${ITEM.BEVERAGE}.0.value`} as="p" />
      </div>
    </>
  );
};

export default OrderInfoTemplate;
