// 필요에 맞게 너비, 높이, 배경색, 글자색, 테두리둥금 수치를 상위 컴포넌트에서 조정
// props default 값은 로그인 버튼 기준입니다!
const Button = ({
  type,
  onClick,
  disabled,
  children,
  margin,
  width = 'w-64',
  height = 'h-8',
  bgColor = 'bg-blue',
  textColor = 'text-white',
  bdRadius = 'rounded-lg',
}) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
      className={`${width} ${height} ${textColor} ${bgColor} ${bdRadius} ${margin}`}
    >
      {children}
    </button>
  );
};

export default Button;
