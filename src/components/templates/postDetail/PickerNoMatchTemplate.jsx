import { useState } from 'react';
import Swal from 'sweetalert2';
import Button from '../../atoms/button/Button';
import OtherNav from '../../atoms/nav/OtherNav';
import Info from '../../atoms/Info';
import Location from '../../organisms/Location';
import '../../../styles/DeleteSpin.css';
import PickerTime from '../../organisms/PickerTime';
import { pickUpDrinkMessage } from '../../../utils/alert';

const PickerNoMatchTemplate = ({ response }) => {
  const [page, setPage] = useState(0);

  // 이 음료 픽업하기 버튼을 눌렀을 때 뜨는 모달창
  const pickUpBtnModal = () => {
    return Swal.fire(pickUpDrinkMessage).then((result) => {
      if (result.isConfirmed) {
        setPage(1);
      }
    });
  };

  // 페이지가 0이면 상세페이지 처음, 1이면 예상도착시간
  const nowPage = (pageNum) => {
    if (pageNum === 1) {
      return <PickerTime setPage={setPage} />;
    }
    return (
      <>
        <Info response={response} />
        <div className="flex px-8">
          <Button onClick={pickUpBtnModal} width="w-[100%]" height="h-9" bdRadius="rounded-md" bgColor="bg-blue">
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
          <Location response={response} />
        </div>
      </div>
      {/* 하얀색 부분 */}
      {nowPage(page)}
    </>
  );
};

export default PickerNoMatchTemplate;
