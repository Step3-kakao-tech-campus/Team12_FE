import { PiMinus } from 'react-icons/pi';

const MinusBtn = ({ onClick }) => {
  return <PiMinus onClick={onClick} className="text-slate-400 cursor-pointer ml-3.5" />;
};

export default MinusBtn;
