import Swal from 'sweetalert2';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { postDetailPicker } from '../../apis/postDetail';
import Button from '../atoms/button/Button';

const PickerTime = ({ setPage, setIsMatch }) => {
  const { id } = useParams();
  const { mutate } = useMutation({
    mutationFn: postDetailPicker,
  });

  // 픽업시간
  const [value, setValue] = useState();
  const onChange = (e) => {
    setValue(e.target.value);
  };

  // 픽업하기 눌렀다가 취소할 때
  const pickUpCancel = () => {
    setPage(0);
  };

  // 입력완료 버튼
  const doneWrite = () => {
    // 임시
    localStorage.setItem('match', true);
    //
    setPage(0);
    setIsMatch(true);
    mutate({
      boardId: id,
      arrivalTime: value,
    });
    return Swal.fire({
      icon: 'success',
      title: '매칭이 완료 되었어요!',
      showConfirmButton: false,
      timer: 3000,
    });
  };
  return (
    <div className="px-8">
      <div className="mt-12 mb-3">
        <div className="font-bold text-blue text-xl py-2">예상 도착 시간은 언제인가요?</div>
        <div className=" text-sm">오더의 장소에 도착할 시간을 알려주세요.</div>
      </div>
      <div className="mt-6">
        <input
          className="text-center w-28 h-10 border-2 border-zinc-700 rounded-lg mr-3"
          type="number"
          placeholder="15"
          value={value}
          onChange={onChange}
        />
        분 후 도착
      </div>
      <div className="mt-72 flex justify-between px-3">
        <Button onClick={pickUpCancel} width="w-32" textColor="text-black" bgColor="bg-zinc-300">
          취소
        </Button>
        <Button onClick={doneWrite} width="w-32">
          입력완료
        </Button>
      </div>
    </div>
  );
};

export default PickerTime;
