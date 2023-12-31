// 필요에 맞게 너비, 높이, 배경색, 글자색, 테두리둥금 수치를 상위 컴포넌트에서 조정
// props default 값은 로그인 버튼 기준입니다!
const Button = ({
  type = 'button',
  onClick,
  disabled,
  children,
  margin,
  textSize,
  border,
  width = 'w-64',
  height = 'h-8',
  bgColor = 'bg-blue',
  textColor = 'text-white',
  bdRadius = 'rounded-lg',
  bdcolor = 'border-blue',
  boxSizing = 'box-content',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[width, height, textColor, bgColor, bdRadius, margin, textSize, bdcolor, border, boxSizing].join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;
