import React, { useState } from 'react';
import FilterBtn from '../atoms/button/FilterBtn';

const FilterForm = ({ getFilter }) => {
  const [filter, setFilter] = useState('All');
  const handleFilter = (e) => {
    setFilter(e.target.innerText);
    // getFilter는 상위 컴포넌트로 필터값을 넘겨주기 위해 구현
    // 필터값이 만약 All일 경우, ''을 넘겨 공고글이 받아온 그대로 보이도록 처리
    getFilter(`${e.target.innerText === 'All' ? '' : e.target.innerText}`);
  };

  return (
    <div className="px-[21px] mt-[15px] w-[360px] h-12 whitespace-nowrap overflow-x-auto overflow-y-hidden">
      <FilterBtn onClick={handleFilter} filter={filter === 'All'}>
        All
      </FilterBtn>
      <FilterBtn onClick={handleFilter} filter={filter === '스타벅스'}>
        스타벅스
      </FilterBtn>
      <FilterBtn onClick={handleFilter} filter={filter === '더벤티'}>
        더벤티
      </FilterBtn>
      <FilterBtn onClick={handleFilter} filter={filter === '공차'}>
        공차
      </FilterBtn>
      <FilterBtn onClick={handleFilter} filter={filter === '이디야'}>
        이디야
      </FilterBtn>
    </div>
  );
};

export default FilterForm;
