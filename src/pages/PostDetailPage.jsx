import React from 'react';
import { MdOutlineLocationOn, MdLocationPin } from 'react-icons/md';
import { BsArrowDown } from 'react-icons/bs';
import Button from '../components/atoms/Button';
import OtherNav from '../components/atoms/OtherNav';

const PostDetailPage = () => {
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
      <div className="px-8">
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
        <div className="flex justify-center">
          {/* eslint-disable-next-line */}
          <Button children="이 음료 픽업하기" bgColor="bg-blue" />
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
