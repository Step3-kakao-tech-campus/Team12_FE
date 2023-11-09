import React from 'react';
import LoginNav from '@components/atoms/nav/LoginNav';
import BankForm from '@components/molecules/BankForm';

const RegisterBankPage = () => {
  return (
    <div className="page--layout">
      <LoginNav />
      <div className="mx-[45px] ">
        <div className="mt-[60px] text-blue text-[20px]">이제 거의 다 왔어요!</div>
        <div className="mt-[20px]">
          <BankForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterBankPage;
