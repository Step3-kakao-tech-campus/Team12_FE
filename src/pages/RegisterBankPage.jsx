import React from 'react';
import LoginNav from '@components/atoms/nav/LoginNav';
import BankForm from '@components/molecules/BankForm';
import { INFO } from '@/constant/auth';

const RegisterBankPage = () => {
  return (
    <div className="page--layout">
      <LoginNav />
      <div className="mx-[45px]">
        <p className="mt-[60px] text-blue text-[20px]">{INFO.ALREADY_DONE}</p>
        <div className="mt-[20px]">
          <BankForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterBankPage;
