import cafe from '@/constant/cafe';

const SelectInput = ({
  register,
  required,
  type,
  name,
  placeholder,
  width = 'w-[18rem]',
  sort = cafe,
  ...inputProps
}) => {
  return (
    <select
      type={type}
      name={name}
      placeholder={placeholder}
      {...inputProps}
      {...register}
      className={`${width} rounded-lg border-gray-300 border-2 px-4 py-2 text-sm block my-2`}
    >
      <option value="">=== 선택 ===</option>
      {sort.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
