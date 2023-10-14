import '../../styles/thumb.css';
import { useState } from 'react';

const RangeInput = () => {
  const [value, setValue] = useState(1000);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      type="range"
      max="2500"
      min="1000"
      step="500"
      value={value}
      onChange={handleValueChange}
      className="custom-thumb w-[17rem] bg-gray-200 rounded-lg appearance-none"
    />
  );
};

export default RangeInput;