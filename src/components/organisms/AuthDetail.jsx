const AuthDetail = ({ user }) => {
  return (
    <>
      <p className="text-lg">{user.nickname}</p>
      <img src={user.imageUrl} alt="student" />
    </>
  );
};

export default AuthDetail;
