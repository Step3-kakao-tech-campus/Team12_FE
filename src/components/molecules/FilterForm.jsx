import React from 'react';
import Button from '../atoms/Button';

const FilterForm = () => {
  return (
    <div className="px-[21px] mt-[15px] h-8">
      <Button width="w-[96px]">스타벅스</Button>
      <Button width="w-[96px]" bgColor="bg-[#8F8F8F]" margin="ml-[8px]">
        더벤티
      </Button>
      <Button width="w-[96px]" bgColor="bg-[#8F8F8F]" margin="ml-[8px]">
        이디야
      </Button>
    </div>
  );
};

export default FilterForm;
