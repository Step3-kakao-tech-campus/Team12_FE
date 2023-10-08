import { PiMinus } from 'react-icons/pi';

const MinusBtn = ({ className, onClick }) => {
  return <PiMinus onClick={onClick} className={`text-slate-400 cursor-pointer ${className}`} />;
};

export default MinusBtn;
