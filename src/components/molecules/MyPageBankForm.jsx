import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Button from '@components/atoms/button/Button';
import { useMutation } from '@tanstack/react-query';
import banks from '@/constant/bank';
import routes from '@/constant/routes';
import { bankInvalidMessage, unknownErrorMessage, modifyUserInfoComplete } from '@/utils/alert';
import { BANK } from '@/constant/auth';
import { modifyUserInfo } from '@/apis/myPage';

const MyPageBankForm = () => {
  const [accountBank, setAccountBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [phoneNumber, setPhoneNum] = useState('');
  const [formValid, setFormValid] = useState(false);

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: modifyUserInfo,
    onSuccess: () => {
      Swal.fire(modifyUserInfoComplete);
      navigate(routes.mypage); // 개인정보 수정 이후 마이페이지로 이동
    },
    onError: () => {
      Swal.fire(unknownErrorMessage);
      navigate(routes.error);
    },
  });

  // 계좌 은행을 선택할 때 호출될 함수
  const handleBankChange = (e) => {
    setAccountBank(e.target.value);
  };

  // 계좌 번호를 입력할 때 호출될 함수
  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  // 전화 번호를 입력할 때 호출할 함수
  const handlePhoneNumberChange = (e) => {
    setPhoneNum(e.target.value);
  };

  // 폼을 제출할 때 호출될 함수
  const handleSubmit = () => {
    if (formValid) {
      // 입력 정보 put 처리 이후 홈 페이지 이동(개인정보 수정 완료)
      mutate({
        bankName: accountBank,
        accountNum: accountNumber,
        phoneNum: phoneNumber,
      });
    } else {
      Swal.fire(bankInvalidMessage);
    }
  };

  // 계좌 은행 혹은 계좌 번호가 입력될 때 값의 입력 유무를 판단
  useEffect(() => {
    if (accountBank.trim() !== '' && accountNumber.trim() !== '' && phoneNumber.trim() !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [accountBank, accountNumber, phoneNumber]);

  return (
    <div>
      <div className="text-[12px] mb-[6px]">{BANK.ACCOUNT}</div>
      <div className="h-[450px]">
        <div className="flex mb-[2px]">
          <select
            className="w-[75px] h-[35px] rounded-lg border border-[#858585] mr-[15px] text-[10px]"
            onChange={handleBankChange}
          >
            <option value="">{BANK.CHOICE_BANK}</option>
            {banks.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            className="w-[180px] h-[35px] rounded-lg border border-[#858585] text-[10px] pl-[10px]"
            type="text"
            placeholder="계좌 번호 입력"
            value={accountNumber}
            onChange={handleAccountNumberChange}
          />
        </div>
        <div>
          <div className="text-[12px] mb-[6px] mt-[6px]">{BANK.PHONE_NUMBER}</div>
          <input
            className="w-[180px] h-[35px] rounded-lg border border-[#858585] text-[10px] pl-[10px]"
            type="text"
            placeholder="전화 번호 입력"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        {!formValid && <p className="text-red-600 text-sm mt-[6px]">{BANK.ERROR_MSG}</p>}
      </div>
      <div className="text-center">
        <Button
          width="w-[270px]"
          onClick={() => {
            handleSubmit();
          }}
        >
          {BANK.MODIFY}
        </Button>
      </div>
    </div>
  );
};

export default MyPageBankForm;
