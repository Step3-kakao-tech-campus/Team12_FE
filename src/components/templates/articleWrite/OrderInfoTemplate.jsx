import { useFieldArray, useFormContext } from 'react-hook-form';
import Labels from '@components/molecules/Labels';
import SelectInput from '@components/atoms/input/SelectInput';
import Input from '@components/atoms/input/Input';
import ErrorMsg from '@components/atoms/ErrorMsg';
import PlusBtn from '@components/atoms/button/PlusBtn';
import MinusBtn from '@components/atoms/button/MinusBtn';
import { ORDER_INFO_SHOP_NAME, ORDER_INFO_BEVERAGE, ITEM } from '@/constant/writeArticle';
import validateInputMsg from '@/constant/validateInputMsg';

const OrderInfoTemplate = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: ITEM.BEVERAGES });

  return (
    <>
      <div className="mt-6 mb-12">
        <Labels htmlFor={ITEM.SHOP_NAME} label={ORDER_INFO_SHOP_NAME.label} subLabel={ORDER_INFO_SHOP_NAME.subLabel} />
        <SelectInput
          register={register(ITEM.SHOP_NAME, {
            required: validateInputMsg.SHOP_NAME_MSG,
          })}
          id={ITEM.SHOP_NAME}
          name={ITEM.SHOP_NAME}
          className="mb-10"
        />
        <ErrorMsg errors={errors} name={ITEM.SHOP_NAME} as="p" />
      </div>

      <div className="mt-6">
        <Labels htmlFor={ITEM.BEVERAGES} label={ORDER_INFO_BEVERAGE.label} subLabel={ORDER_INFO_BEVERAGE.subLabel} />
        <div className="flex flex-col">
          <div className="flex items-center">
            <Input
              id={ITEM.BEVERAGES}
              name="beverage"
              register={register('beverage', {
                required: validateInputMsg.BEVERAGE_MSG,
              })}
              width="w-[15rem]"
              placeholder="아이스 아메리카노 1잔"
            />

            <PlusBtn onClick={() => append()} />
          </div>
          {fields.map((field, index) => {
            return (
              <div className="flex items-center">
                <li key={field.id} className="list-none">
                  <Input
                    id={ITEM.BEVERAGES}
                    name={`${ITEM.BEVERAGES}.${index}`}
                    register={register(`${ITEM.BEVERAGES}.${index}`)}
                    width="w-[15rem]"
                    placeholder="아이스 아메리카노 1잔"
                  />
                </li>
                <MinusBtn onClick={() => remove(index)} />
              </div>
            );
          })}
          <ErrorMsg errors={errors} name={ITEM.BEVERAGES} as="p" />
        </div>
      </div>
    </>
  );
};

export default OrderInfoTemplate;
