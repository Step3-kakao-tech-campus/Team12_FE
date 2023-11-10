import React, { useEffect } from 'react';
import WriterMatchTemplate from '@components/templates/articleDetail/WriterMatchTemplate';
import WriterNoMatchTemplate from '@components/templates/articleDetail/WriterNoMatchTemplate';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getMyPageWritenArticleDetail } from '@/apis/articleDetail';

const MyPageWritenArticleDetailPage = () => {
  // 상세 페이지 API 요청을 통해 받아온 데이터
  // useParams + useQuery로 데이터를 받아와서
  // data를 data?.response로 받아서 WriterMatchTemplate & WriterNoMatchTemplate으로 보내주면 됨
  const { id } = useParams();
  const { data } = useQuery(['getMyPageWritenArticleDetail'], getMyPageWritenArticleDetail(id));
  const articleData = data?.response;

  // useQuery data 디버깅용
  useEffect(() => {
    console.log(data);
  }, [data]);

  const showDetailPage = (article) => {
    // 작성자이고 매칭됐을 때
    if (article.isMatch) {
      return <WriterMatchTemplate response={article} />;
    }
    // 작성자이고 매칭 안됐을 때
    return <WriterNoMatchTemplate response={article} />;
  };

  return (
    <div className="page--layout">
      <div>{showDetailPage(articleData)}</div>
    </div>
  );
};

export default MyPageWritenArticleDetailPage;
