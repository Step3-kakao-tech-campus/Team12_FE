import Labels from '../molecules/Labels';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';

const OrderRequest = () => {
  return (
    <>
      <div className="mt-6 mb-12">
        <Labels htmlFor="location" label="어디로 픽업할까요? *" subLabel="피커가 해당 장소로 픽업해 줄 거예요." />
        <Input id="location" max="50" placeholder="공과대학 7호관 1층" />
      </div>
      <div className="mt-6 mb-12">
        <Labels htmlFor="request" label="피커에게 요청사항이 있나요? *" subLabel="50자까지 입력 가능합니다." />
        <TextArea id="request" maxLength="50" placeholder="1층 도착하면 알려주세요!" />
      </div>
    </>
  );
};

export default OrderRequest;
