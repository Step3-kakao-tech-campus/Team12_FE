import cafe from '../../constant/cafe';

const SelectInput = ({ type, value, name, placeholder, width = 'w-[18rem]', sort = cafe, ...inputProps }) => {
  return (
    <select
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      {...inputProps}
      className={`${width} rounded-lg border-gray-300 border-2 px-4 py-2 text-sm block my-2`}
    >
      <option value="none">=== 선택 ===</option>
      {sort.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
