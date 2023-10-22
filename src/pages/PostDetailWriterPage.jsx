import React from 'react';
import Swal from 'sweetalert2';
import { MdOutlineLocationOn, MdLocationPin } from 'react-icons/md';
import { BsArrowDown, BsThreeDotsVertical } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import OtherNav from '../components/atoms/OtherNav';

const PostDetailWriterPage = () => {
  const navigate = useNavigate();

  // 매칭 됐는지 안됐는지(true면 피커정보랑 더보기 없어짐)
  const isMatch = false;

  // 삭제 버튼 눌렀을 때
  const postDelete = () => {
    return Swal.fire({
      title: '삭제하시겠습니까?',
      text: '삭제하면 음료를 픽업 받을 수 없게 됩니다.',
      showCancelButton: true,
      confirmButtonColor: '#0075FF',
      cancelButtonColor: '#D9D9D9',
      confirmButtonText: '확인',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        // 공고가 삭제됨
      }
    });
  };

  // 우상단 점3개 눌렀을 때
  const control = () => {
    return Swal.fire({
      showDenyButton: true,
      confirmButtonText: '수정',
      denyButtonText: '삭제',
    }).then((result) => {
      if (result.isConfirmed) {
        // 공고 수정하게 됨
        navigate('/post-write');
      } else if (result.isDenied) {
        postDelete();
      }
    });
  };

  // 피커정보
  // eslint-disable-next-line
  const pickerInfo = (isMatch) => {
    if (isMatch) {
      return (
        <div>
          <div className="my-8">
            <div className="text-2xl text-blue py-2">피커정보</div>
            <div className="flex">
              <div className="text-zinc-400">도착시간</div>
              <div className="ml-5">3000원</div>
            </div>
            <div className="flex my-1">
              <div className="text-zinc-400">계좌정보</div>
              <div className="ml-5">농협 01010101010101010101</div>
            </div>
            <div className="flex my-1">
              <div className="text-zinc-400">계좌정보</div>
              <div className="ml-5">010-1234-5678</div>
            </div>
          </div>
        </div>
      );
    }
  };

  // eslint-disable-next-line
  const threeDot = (isMatch) => {
    if (!isMatch) {
      return <BsThreeDotsVertical size="25" style={{ color: 'white' }} />;
    }
  };

  const matching = () => {
    if (isMatch) {
      console.log(isMatch);
      return (
        <div>
          <div className="text-white text-lg">피커가 픽업을 시작했어요!</div>
          <div className="text-white text-lg">피커에게 픽업팁을 송금 해주세요.</div>
        </div>
      );
    }
    return <div className="mt-1 text-white text-xl">매칭을 기다리고 있어요.</div>;
  };

  return (
    <div className="page--layout">
      {/* 파란색 부분 */}
      <div className="bg-sky-blue h-60 rounded-b-3xl">
        <OtherNav iconColor="#fff" bgColor="#000" />
        <div className="px-5">
          <div className="flex justify-between items-center">
            {matching()}
            <button onClick={control}>{threeDot(isMatch)}</button>
          </div>
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
      <div className="px-8">
        <div className="my-8">
          <div className="text-2xl text-blue py-2">주문 정보</div>
          <div>아이스 아메리카노 1잔</div>
        </div>
        <div className="my-8">
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
        <div className="my-8">
          <div className="text-2xl text-blue py-2">마감기한</div>
          <div>오늘 14시 10분까지</div>
        </div>
        {pickerInfo(isMatch)}
      </div>
    </div>
  );
};

export default PostDetailWriterPage;
