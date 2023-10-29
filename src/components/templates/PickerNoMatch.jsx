import { useState } from 'react';
import Swal from 'sweetalert2';
import Button from '../atoms/Button';
import OtherNav from '../atoms/OtherNav';
import Info from '../organisms/Info';
import Location from '../organisms/Location';
import '../../styles/DeleteSpin.css';
import PickerTime from '../organisms/PickerTime';

const PickerNoMatch = ({ setIsMatch }) => {
  const [page, setPage] = useState(0);

  // 이 음료 픽업하기 버튼을 눌렀을 때 뜨는 모달창
  const pickUpBtnModal = () => {
    return Swal.fire({
      title: '이 음료를 픽업하시겠습니까?',
      showCancelButton: true,
      cancelButtonText: '취소',
      confirmButtonText: '수락',
      confirmButtonColor: '#0075ff',
      heightAuto: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setPage(1);
      }
    });
  };

  // 페이지가 0이면 상세페이지 처음, 1이면 예상도착시간
  const nowPage = (pageNum) => {
    if (pageNum === 1) {
      return <PickerTime setPage={setPage} setIsMatch={setIsMatch} />;
    }
    return (
      <>
        <Info />
        <div className="flex justify-center">
          <Button onClick={pickUpBtnModal} bgColor="bg-blue">
            이 음료 픽업하기
          </Button>
        </div>
      </>
    );
  };

  return (
    <>
      {/* 파란색 부분 */}
      <div className="bg-sky-blue h-60 rounded-b-3xl">
        <OtherNav iconColor="#fff" bgColor="#000" />
        <div className="px-5">
          <div className="mt-1 text-white text-xl">매칭을 기다리고 있어요.</div>
          <Location />
        </div>
      </div>
      {/* 하얀색 부분 */}
      {nowPage(page)}
    </>
  );
};

export default PickerNoMatch;
