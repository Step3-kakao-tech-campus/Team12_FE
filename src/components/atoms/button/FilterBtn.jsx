// 필요에 맞게 너비, 높이, 배경색, 글자색, 테두리둥금 수치를 상위 컴포넌트에서 조정
// props default 값은 로그인 버튼 기준입니다!
const FilterBtn = ({
  type = 'button',
  onClick,
  disabled,
  children,
  margin = 'ml-[8px]',
  width = 'w-[96px]',
  height = 'h-8',
  textColor = 'text-white',
  bdRadius = 'rounded-lg',
  filter,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${width} ${height} ${textColor} ${bdRadius} ${margin} ${filter ? 'bg-blue' : 'bg-[#8F8F8F]'}`}
    >
      {children}
    </button>
  );
};

export default FilterBtn;
