import React from 'react';
import Button from '../atoms/Button';

const FilterForm = () => {
  return (
    <div className="px-[21px] mt-[15px] w-[360px] h-12 whitespace-nowrap overflow-x-auto overflow-y-hidden">
      <Button width="w-[96px]">All</Button>
      <Button width="w-[96px]" bgColor="bg-[#8F8F8F]" margin="ml-[8px]">
        스타벅스
      </Button>
      <Button width="w-[96px]" bgColor="bg-[#8F8F8F]" margin="ml-[8px]">
        더벤티
      </Button>
      <Button width="w-[96px]" bgColor="bg-[#8F8F8F]" margin="ml-[8px]">
        공차
      </Button>
      <Button width="w-[96px]" bgColor="bg-[#8F8F8F]" margin="ml-[8px]">
        이디야
      </Button>
    </div>
  );
};

export default FilterForm;
