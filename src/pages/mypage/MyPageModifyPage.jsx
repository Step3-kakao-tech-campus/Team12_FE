import React from 'react';
import LoginNav from '@components/atoms/nav/LoginNav';
import MyPageBankForm from '@components/molecules/MyPageBankForm';

const MyPageModifyPage = () => {
  return (
    <div className="page--layout">
      <LoginNav />
      <div className="mx-[45px]">
        <p className="mt-[60px] text-blue text-[20px] text-center">개인정보 수정</p>
        <div className="mt-[20px]">
          <MyPageBankForm />
        </div>
      </div>
    </div>
  );
};

export default MyPageModifyPage;
