import { Link } from 'react-router-dom';
import { PiCaretRightLight } from 'react-icons/pi';

const MyPageMenu = ({ to, icon, children }) => {
  return (
    <div className="py-3 text-lg">
      <Link to={to} className="w-full flex justify-between">
        <div>
          {icon}
          <div className="inline-block">{children}</div>
        </div>
        <PiCaretRightLight className="float-right text-gray-400" size={23} />
      </Link>
    </div>
  );
};

export default MyPageMenu;
