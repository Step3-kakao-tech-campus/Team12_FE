import Labels from '../molecules/Labels';
import SelectInput from '../atoms/SelectInput';
import Input from '../atoms/Input';

const OrderInfo = () => {
  return (
    <>
      <div className="mt-6 mb-12">
        <Labels
          htmlFor="cafe"
          label="주문할 매장은 어디인가요? *"
          subLabel="음료를 주문할 매장을 정확하게 입력해주세요."
        />
        <SelectInput id="cafe" width="18rem" className="mb-10" />
      </div>
      <Labels htmlFor="drink" label="어떤 음료를 주문하실건가요? *" subLabel="주문할 음료를 정확하게 입력해주세요." />
      <Input id="drink" placeholder="아이스 아메리카노 1잔" />
    </>
  );
};

export default OrderInfo;
