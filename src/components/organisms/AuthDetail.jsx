const AuthDetail = ({ user }) => {
  return (
    <>
      <div className="text-lg">{user.nickname}</div>
      <img src={user.imageUrl} alt="student" />
    </>
  );
};

export default AuthDetail;
