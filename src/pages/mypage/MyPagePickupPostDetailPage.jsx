import React from 'react';
import PickerMatchTemplate from '../../components/templates/postDetail/PickerMatchTemplate';
// import { getMyPagePickupPostDetail } from '../apis/postDetail';
// import { useQuery } from '@tanstack/react-query';
// import { useParams } from 'react-router-dom';

const MyPagePickupPostDetailPage = () => {
  const data = {
    success: true,
    response: {
      shopName: '스타벅스 전대후문점',
      destination: '공과대학 7호관',
      beverage: [
        {
          name: '아이스 아메리카노 1잔',
        },
        {
          name: '핫 아메리카노 1잔',
        },
      ],
      tip: 3000,
      request: '1층 도착하시면 연락주세요!',
      finishedAt: 15468965196,
    },
    error: null,
  };

  // useParams + useQuery로 데이터를 받아와서
  // data를 data?.response로 받아서 PickerMatchTemplate으로 보내주면 됨
  // const { id } = useParams();
  // const { data } = useQuery(['getMyPagePickupPostDetail'], () => getMyPagePickupPostDetail(id));
  // const post = data?.response;

  return (
    <div className="page--layout">
      <PickerMatchTemplate response={data?.response} />
    </div>
  );
};

export default MyPagePickupPostDetailPage;
