import { Link } from 'react-router-dom';
import { PiCaretRightLight } from 'react-icons/pi';

const MyPageMenu = ({ to, icon, children }) => {
  return (
    <Link to={to}>
      <div className="py-3 text-lg">
        {icon}
        <div className="inline-block">{children}</div>
        <PiCaretRightLight className="float-right" size={30} />
      </div>
    </Link>
  );
};

export default MyPageMenu;
