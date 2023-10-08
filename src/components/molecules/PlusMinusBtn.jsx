import PlusBtn from '../atoms/PlusBtn';
import MinusBtn from '../atoms/MinusBtn';

const PlusMinusBtn = ({ handlePlus, handleMinus }) => {
  return (
    <div className="flex flex-col items-center">
      <PlusBtn className="ml-6" onClick={handlePlus} />
      <MinusBtn className="ml-6 mt-5" onClick={handleMinus} />
    </div>
  );
};

export default PlusMinusBtn;
