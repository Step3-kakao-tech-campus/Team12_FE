import Swal from 'sweetalert2';
import { MdOutlineLocationOn, MdLocationPin } from 'react-icons/md';
import { BsArrowDown } from 'react-icons/bs';
import { useState } from 'react';
import Button from '../components/atoms/Button';
import OtherNav from '../components/atoms/OtherNav';

const PostDetailPage = () => {
  const [page, setPage] = useState(0);
  const [isMatch, setIsMatch] = useState(false);

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

  // 픽업하기 눌렀다가 취소할 때
  const cancel = () => {
    setPage(0);
  };

  // 입력완료 버튼
  const doneWrite = () => {
    setPage(0);
    setIsMatch(true);
    return Swal.fire({
      icon: 'success',
      title: '매칭이 완료 되었어요!',
      showConfirmButton: false,
      timer: 3000,
    });
  };

  // 픽업버튼 활성화할지 안할지
  const pickUpBtn = (isMatched) => {
    if (isMatched) {
      return (
        <Button bgColor="bg-zinc-300" disabled="disable">
          이미 매칭된 공고
        </Button>
      );
    }
    return (
      <Button onClick={pickUpBtnModal} bgColor="bg-blue">
        이 음료 픽업하기
      </Button>
    );
  };

  // 공고상세페이지 처음 눌렀을 때 뜨는 정보
  const info = () => {
    return (
      <>
        <div className="my-12">
          <div className="text-2xl text-blue py-2">주문 정보</div>
          <div>아이스 아메리카노 1잔</div>
        </div>
        <div className="my-14">
          <div className="text-2xl text-blue py-2">요청 사항</div>
          <div className="flex">
            <div className="text-zinc-400">픽업팁</div>
            <div className="ml-8">3000원</div>
          </div>
          <div className="flex my-1">
            <div className="text-zinc-400">요청사항</div>
            <div className="ml-5">1층 도착하시면 연락주세요!</div>
          </div>
        </div>
        <div className="my-14">
          <div className="text-2xl text-blue py-2">마감기한</div>
          <div>오늘 14시 10분까지</div>
        </div>
        <div className="flex justify-center">{pickUpBtn(isMatch)}</div>
      </>
    );
  };

  // 예상 도착 시간 적는 부분
  const pickerTime = () => {
    return (
      <div>
        <div className="mt-12 mb-3">
          <div className="text-xl py-2">예상 도착 시간은 언제인가요?</div>
          <div className=" text-sm">오더의 장소에 도착할 시간을 알려주세요.</div>
        </div>
        <div className="mt-6">
          <input className="text-center" type="number" placeholder="15" style={{ border: 1 }} /> 분 후 도착
        </div>
        <div className="mt-72 flex justify-between px-3">
          <Button onClick={cancel} width="w-32" textColor="text-black" bgColor="bg-zinc-300">
            취소
          </Button>
          <Button onClick={doneWrite} width="w-32">
            입력완료
          </Button>
        </div>
      </div>
    );
  };

  // 페이지가 0이면 상세페이지 처음, 1이면 예상도착시간
  const nowPage = (pageNum) => {
    if (pageNum === 1) {
      return pickerTime();
    }
    return info();
  };

  return (
    <div className="page--layout">
      {/* 파란색 부분 */}
      <div className="bg-sky-blue h-60 rounded-b-3xl">
        <OtherNav iconColor="#fff" bgColor="#000" />
        <div className="p-5">
          <div className="mt-1 text-white text-xl">매칭을 기다리고 있어요.</div>
          <div className="p-4">
            <div className="flex items-center">
              <MdOutlineLocationOn className="mr-1" size="30" style={{ color: 'white' }} />
              <span className="text-white">스타벅스 전대후문점</span>
            </div>
            <BsArrowDown className="ml-2 my-1" style={{ color: 'white' }} />
            <div className="flex items-center">
              <MdLocationPin className="mr-1" size="30" style={{ color: 'white' }} />
              <span className="text-white">공과대학 7호관</span>
            </div>
          </div>
        </div>
      </div>
      {/* 하얀색 부분 */}
      {/* eslint-disable-next-line */}
      <div className="px-8">{nowPage(page)}</div>
    </div>
  );
};

export default PostDetailPage;
