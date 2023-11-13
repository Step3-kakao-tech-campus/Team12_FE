const AuthDetail = ({ user }) => {
  return (
    <>
      <p className="text-center text-blue text-lg">{user.nickname}</p>
      <img src={user.imageUrl} alt="student" />
    </>
  );
};

export default AuthDetail;
