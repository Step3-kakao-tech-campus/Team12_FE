import '../../styles/thumb.css';

const RangeInput = ({ name, register }) => {
  return (
    <>
      <input
        name={name}
        {...register(name)}
        type="range"
        max="2500"
        min="1000"
        step="500"
        className="custom-thumb w-[17rem] bg-gray-200 rounded-lg appearance-none"
      />
      <output htmlFor={name} />
    </>
  );
};

export default RangeInput;
