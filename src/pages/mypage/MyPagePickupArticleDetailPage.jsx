import React, { useEffect } from 'react';
import PickerMatchTemplate from '@components/templates/articleDetail/PickerMatchTemplate';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getMyPagePickupArticleDetail } from '@/apis/articleDetail';

const MyPagePickupArticleDetailPage = () => {
  // useParams + useQuery로 데이터를 받아와서
  // data를 data?.response로 받아서 PickerMatchTemplate으로 보내주면 됨
  const { id } = useParams();
  const { data } = useQuery(['getMyPagePickupArticleDetail'], () => getMyPagePickupArticleDetail(id));
  const articles = data?.response?.content;

  // useQuery data 디버깅용
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="page--layout">
      <PickerMatchTemplate response={articles} />
    </div>
  );
};

export default MyPagePickupArticleDetailPage;
