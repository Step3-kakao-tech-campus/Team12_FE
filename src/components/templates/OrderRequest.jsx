import Labels from '../molecules/Labels';
import Input from '../atoms/Input';

const OrderRequest = () => {
  return (
    <>
      <Labels htmlFor="location" label="어디로 픽업할까요? *" subLabel="피커가 해당 장소로 픽업해 줄 거예요." />
      <Input id="location" placeholder="공과대학 7호관 1층" />
    </>
  );
};

export default OrderRequest;
