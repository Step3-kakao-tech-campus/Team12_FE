import React, { useEffect } from 'react';
import OtherNav from '@components/atoms/nav/OtherNav';
import MyPagePickupArticleCards from '@components/molecules/MyPagePickupArticleCards';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getPickupArticles } from '@/apis/article';
import occurError from '@/utils/occurError';
import MYPAGE from '@/constant/mypage';
import Loader from '@/components/atoms/Loader';
import { ERROR } from '@/constant/error';

const PickupArticlePage = () => {
  // 픽업한 공고글 목록 조회(마이페이지) 요청
  // 데이터를 받아와서 공고글 목록을 articles 변수에 담고
  // MyPagePickupArticleCards로 articles를 props로 넘겨주면 끝
  const navigate = useNavigate();
  const {
    data: articlesData,
    isLoading,
    isError,
  } = useQuery(['getPickupArticles'], getPickupArticles, {
    select: (data) => data?.data.response.content,
    onError: (error) => {
      occurError(error);
    },
  });

  // useQuery data 디버깅용
  useEffect(() => {
    console.log(articlesData);
  }, [articlesData]);

  const isPickupArticles = (articles) => {
    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      navigate('/errorPage');
    }

    return articles ? (
      <MyPagePickupArticleCards articles={articles} />
    ) : (
      <div className="text-center text-blue text-xl mt-[17rem]">{ERROR.NO_APPROVAL_ARTICLE}</div>
    );
  };

  return (
    <div className="page--layout">
      <OtherNav />
      <div className="text-center text-xl text-blue my-6">{MYPAGE.APPROVAL_ARTICLE}</div>
      <div className="h-[580px] overflow-y-auto overflow-x-hidden scrollbar-hide">{isPickupArticles(articlesData)}</div>
    </div>
  );
};

export default PickupArticlePage;
