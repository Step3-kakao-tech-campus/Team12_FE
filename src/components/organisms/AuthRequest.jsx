import { Link } from 'react-router-dom';
import { PiCaretRightLight } from 'react-icons/pi';

const AuthRequest = ({ user }) => {
  return (
    <div className="h-10 rounded-lg border-gray-300 border-2 my-5">
      {/* 밑줄 추가 */}
      {console.log(user)}
      <Link to={`/mypage/admin/auth/${user.userId}`}>
        <div className="p-[0.4rem] pl-4 flex items-center justify-between">
          {user.nickname}
          <PiCaretRightLight size={20} />
        </div>
      </Link>
    </div>
  );
};

export default AuthRequest;
