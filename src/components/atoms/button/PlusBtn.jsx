import { BsPlusLg } from 'react-icons/bs';

const PlusBtn = ({ onClick }) => {
  return <BsPlusLg size={20} onClick={onClick} className="text-slate-400 cursor-pointer mx-3" />;
};

export default PlusBtn;
