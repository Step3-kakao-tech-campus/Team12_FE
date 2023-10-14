import { useState } from 'react';
import shortId from 'shortid';
import { Controller } from 'react-hook-form';
import Labels from '../molecules/Labels';
import SelectInput from '../atoms/SelectInput';
import Input from '../atoms/Input';
import ErrorMsg from '../atoms/ErrorMsg';
import PlusMinusBtn from '../molecules/PlusMinusBtn';

const OrderInfo = ({ storeError, beverageError, control, ...props }) => {
  const [beverageInput, setBeverageInput] = useState([]);
  const STORE = 'store';
  const BEVERAGE = 'beverage';

  const handleAddInput = () => {
    setBeverageInput((prevBeverageInput) => [
      ...prevBeverageInput,
      <Input
        width="w-[15rem]"
        name={`beverage_${beverageInput.length + 1}`}
        placeholder="아이스 아메리카노 1잔"
        {...props}
      />,
    ]);
  };

  const handleMinusInput = () => {
    if (beverageInput.length > 0) {
      setBeverageInput(beverageInput.slice(0, -1));
    }
  };

  return (
    <>
      <div className="mt-6 mb-12">
        <Labels
          htmlFor={STORE}
          label="주문할 매장은 어디인가요? *"
          subLabel="음료를 주문할 매장을 정확하게 입력해주세요."
        />
        <Controller
          name={STORE}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <SelectInput id={STORE} name={STORE} className="mb-10" {...field} />}
        />
        {storeError && ErrorMsg}
      </div>
      <div className="mt-6">
        <Labels
          htmlFor={BEVERAGE}
          label="어떤 음료를 주문하실건가요? *"
          subLabel="주문할 음료를 정확하게 입력해주세요."
        />
        <div className="flex flex-col">
          <div className="flex items-center">
            <Controller
              name={BEVERAGE}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input id={BEVERAGE} name={BEVERAGE} width="w-[15rem]" placeholder="아이스 아메리카노 1잔" {...field} />
              )}
            />
            <PlusMinusBtn handlePlus={handleAddInput} handleMinus={handleMinusInput} />
          </div>
          {beverageInput.map((item) => (
            <div key={shortId.generate()}>{item}</div>
          ))}
        </div>
      </div>
      {beverageError && ErrorMsg}
    </>
  );
};

export default OrderInfo;
