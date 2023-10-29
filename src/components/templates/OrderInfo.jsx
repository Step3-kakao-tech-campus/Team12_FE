import { useForm, useFieldArray } from 'react-hook-form';
import Labels from '../molecules/Labels';
import SelectInput from '../atoms/SelectInput';
import Input from '../atoms/Input';
import ErrorMsg from '../atoms/ErrorMsg';
import PlusBtn from '../atoms/PlusBtn';
import MinusBtn from '../atoms/MinusBtn';

const OrderInfo = ({ register, storeError, beverageError }) => {
  const STORE = 'store';
  const BEVERAGE = 'beverage';
  const { control } = useForm();
  const { fields, append, remove } = useFieldArray({ control, name: BEVERAGE });

  return (
    <>
      <div className="mt-6 mb-12">
        <Labels
          htmlFor={STORE}
          label="주문할 매장은 어디인가요? *"
          subLabel="음료를 주문할 매장을 정확하게 입력해주세요."
        />
        <SelectInput register={register} required id={STORE} name={STORE} className="mb-10" />
        {storeError && <ErrorMsg />}
      </div>
      <div className="mt-6">
        <Labels
          htmlFor={BEVERAGE}
          label="어떤 음료를 주문하실건가요? *"
          subLabel="주문할 음료를 정확하게 입력해주세요."
        />
        <div className="flex flex-col">
          <div className="flex items-center">
            <Input
              id={BEVERAGE}
              name={`${BEVERAGE}[${0}]`}
              register={register}
              required
              width="w-[15rem]"
              placeholder="아이스 아메리카노 1잔"
            />
            <PlusBtn onClick={() => append({ BEVERAGE })} />
          </div>
          {fields.map((field, index) => {
            return (
              <div className="flex items-center">
                <li key={field.id} className="list-none">
                  <Input
                    id={BEVERAGE}
                    name={`${BEVERAGE}[${index + 1}]`}
                    register={register}
                    width="w-[15rem]"
                    placeholder="아이스 아메리카노 1잔"
                  />
                </li>
                <MinusBtn onClick={() => remove(index)} />
              </div>
            );
          })}
        </div>
      </div>
      {beverageError && <ErrorMsg />}
    </>
  );
};

export default OrderInfo;
