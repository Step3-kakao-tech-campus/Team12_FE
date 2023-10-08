import { BsPlusLg } from 'react-icons/bs';

const PlusBtn = ({ className, onClick }) => {
  return <BsPlusLg size={20} onClick={onClick} className={`text-slate-400 cursor-pointer ${className}`} />;
};

export default PlusBtn;
