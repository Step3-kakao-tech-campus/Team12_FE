import React, { useState } from 'react';
import FilterBtn from '@components/atoms/button/FilterBtn';
import { CAFE } from '@/constant/cafe';

const FilterForm = ({ getFilter }) => {
  const ALL = 'All';
  const [filter, setFilter] = useState(ALL);
  const handleFilter = (e) => {
    setFilter(e.target.innerText);
    // getFilter는 상위 컴포넌트로 필터값을 넘겨주기 위해 구현
    // 필터값이 만약 All일 경우, ''을 넘겨 공고글이 받아온 그대로 보이도록 처리
    getFilter(`${e.target.innerText === ALL ? '' : e.target.innerText}`);
  };

  return (
    <div className="px-[21px] mt-[15px] w-[360px] h-12 whitespace-nowrap overflow-x-auto overflow-y-hidden">
      <FilterBtn onClick={handleFilter} filter={filter === ALL}>
        {ALL}
      </FilterBtn>
      {CAFE.map((x) => (
        <FilterBtn onClick={handleFilter} filter={filter === x}>
          {x}
        </FilterBtn>
      ))}
    </div>
  );
};

export default FilterForm;
