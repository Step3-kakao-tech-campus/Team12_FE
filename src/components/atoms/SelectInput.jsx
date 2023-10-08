import cafe from '../../constant/cafe';

const SelectInput = ({ type, value, name, placeholder, width = 'w-[18rem]', sort = cafe, ...inputProps }) => {
  return (
    <select
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      {...inputProps}
      className={`${width} rounded-lg border-gray-300 border-2 px-5 py-2 text-sm block my-2`}
    >
      {sort.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
