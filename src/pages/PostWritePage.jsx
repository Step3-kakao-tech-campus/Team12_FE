import OtherNav from '../components/atoms/OtherNav';
import CircleNavigate from '../components/organisms/CircleNavigate';
import BtnNavigate from '../components/molecules/BtnNavigate';
import Labels from '../components/molecules/Labels';
import SelectInput from '../components/atoms/SelectInput';
import Input from '../components/atoms/Input';

const PostWritePage = () => {
  return (
    <div className="page--layout">
      <OtherNav />
      <CircleNavigate />
      <div className="p-[35px]">
        <Labels
          htmlFor="cafe"
          label="주문할 매장은 어디인가요? *"
          subLabel="음료를 주문할 매장을 정확하게 입력해주세요."
        />
        <SelectInput id="cafe" width="18rem" />
        <Labels htmlFor="drink" label="어떤 음료를 주문하실건가요? *" subLabel="주문할 음료를 정확하게 입력해주세요." />
        <Input id="drink" placeholder="아이스 아메리카노 1잔" />
      </div>
      <BtnNavigate />
    </div>
  );
};

export default PostWritePage;
