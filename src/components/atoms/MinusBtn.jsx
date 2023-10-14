import { PiMinus } from 'react-icons/pi';

const MinusBtn = ({ onClick }) => {
  return <PiMinus onClick={onClick} className="text-slate-400 cursor-pointer mx-3" />;
};

export default MinusBtn;
