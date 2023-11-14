import React, { useEffect } from 'react';
import PickerMatchTemplate from '@components/templates/articleDetail/PickerMatchTemplate';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getMyPagePickupArticleDetail } from '@/apis/articleDetail';
import occurError from '@/utils/occurError';
import Loader from '@/components/atoms/Loader';

const MyPagePickupArticleDetailPage = () => {
  // useParams + useQuery로 데이터를 받아와서
  // data를 data?.response로 받아서 PickerMatchTemplate으로 보내주면 됨
  const { id } = useParams();
  const { data: articles, isLoading } = useQuery(
    [`/mypage/picker/detail/${id}`],
    () => getMyPagePickupArticleDetail(id),
    {
      select: (data) => data?.response?.content,
      onError: (error) => {
        occurError(error);
      },
    },
  );

  // useQuery data 디버깅용
  useEffect(() => {
    console.log(articles);
  }, [articles]);

  return <div className="page--layout">{isLoading ? <Loader /> : <PickerMatchTemplate response={articles} />}</div>;
};

export default MyPagePickupArticleDetailPage;
