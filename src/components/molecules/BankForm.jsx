import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useMutation } from '@tanstack/react-query';
import Button from '@components/atoms/button/Button';
import banks from '@/constant/bank';
import routes from '@/constant/routes';
import registerBank from '@/apis/register';
import { bankInvalidMessage, unknownErrorMessage, registerCompleteMessage } from '@/utils/alert';

const BankForm = () => {
  const [accountBank, setAccountBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [formValid, setFormValid] = useState(false);

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: registerBank,
    onSuccess: () => {
      Swal.fire(registerCompleteMessage);
      navigate(routes.login); // 회원가입 이후 로그인을 할 수 있도록 로그인 페이지로 이동시킴
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

  // 폼을 제출할 때 호출될 함수
  const handleSubmit = () => {
    if (formValid) {
      // 입력 정보 post 처리 이후 홈 페이지 이동(회원가입 완료)
      mutate({
        bankName: accountBank,
        accountNum: accountNumber,
      });
    } else {
      Swal.fire(bankInvalidMessage);
    }
  };

  // 계좌 은행 혹은 계좌 번호가 입력될 때 값의 입력 유무를 판단
  useEffect(() => {
    if (accountBank.trim() !== '' && accountNumber.trim() !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [accountBank, accountNumber]);

  return (
    <div>
      <div className="text-[12px] mb-[6px]">계좌정보 *</div>
      <div className="h-[450px]">
        <div className="flex mb-[2px]">
          <select
            className="w-[75px] h-[35px] rounded-lg border border-[#858585] mr-[15px] text-[10px]"
            onChange={handleBankChange}
          >
            <option value="">은행 선택</option>
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
        {!formValid && <p className="text-red-600 text-sm">필수 입력 항목입니다.</p>}
      </div>
      <div className="text-center">
        <Button
          width="w-[270px]"
          onClick={() => {
            handleSubmit();
          }}
        >
          회원가입
        </Button>
        <div className="mt-[10px] text-[10px] text-[#8C8C8C]">
          이미 계정이 있으신가요?{' '}
          <Link to={routes.login}>
            <span className="text-black cursor-pointer">로그인</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BankForm;
