/* eslint-disable */
import React, { useEffect } from 'react';
import WriterMatch from '@components/templates/articleDetail/WriterMatchTemplate';
import WriterNoMatch from '@components/templates/articleDetail/WriterNoMatchTemplate';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getMyPageWrittenArticleDetail } from '@/apis/articleDetail';
import occurError from '@/utils/occurError';
import Loader from '@/components/atoms/Loader';
import { ERROR } from '@/constant/error';

const MyPageWrittenArticleDetailPage = () => {
  // 상세 페이지 API 요청을 통해 받아온 데이터
  // useParams + useQuery로 데이터를 받아와서
  // data를 data?.response로 받아서 WriterMatchTemplate & WriterNoMatchTemplate으로 보내주면 됨
  const { id } = useParams();
  const { data: article, isLoading } = useQuery(
    [`/mypage/requester/detail/${id}`],
    () => getMyPageWrittenArticleDetail(id),
    {
      select: (data) => data?.data.response,
      onError: (error) => {
        occurError(error);
      },
    },
  );

  // useQuery data 디버깅용
  useEffect(() => {
    console.log('받아온 데이터 ', article);
  }, [article]);

  const showDetailPage = (article) => {
    if (isLoading) {
      return <Loader />;
    }
    if (!article) {
      return <div>{ERROR.NO_ARTICLE_INFO}</div>;
    }
    if (article.isRequester) {
      return article.isMatch ? (
        <WriterMatch response={article} beverages={article.beverages} />
      ) : (
        <WriterNoMatch response={article} beverages={article.beverages} />
      );
    }
  };

  return (
    <div className="page--layout">
      <div>{showDetailPage(article)}</div>
    </div>
  );
};

export default MyPageWrittenArticleDetailPage;
