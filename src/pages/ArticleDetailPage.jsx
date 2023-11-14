/* eslint-disable */
import { useEffect, useState } from 'react';
import WriterMatch from '@components/templates/articleDetail/WriterMatchTemplate';
import WriterNoMatch from '@components/templates/articleDetail/WriterNoMatchTemplate';
import PickerMatch from '@components/templates/articleDetail/PickerMatchTemplate';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getArticleDetail } from '@/apis/articleDetail.js';
import occurError from '@/utils/occurError';
import Loader from '@/components/atoms/Loader';
import { ERROR } from '@/constant/error';

const ArticleDetailPage = () => {
  // const [beverages, setBeverages] = useState([]);
  const { id } = useParams();
  const { data: article, isLoading } = useQuery([`/articles/${id}`], () => getArticleDetail(id), {
    select: (data) => data?.data.response,
    onError: (error) => {
      occurError(error);
    },
  });

  // useEffect(() => {
  //   article && setBeverages(article?.beverages?.map((beverage) => beverage.name));
  //   delete article.beverages;
  // }, [article]);

  // useEffect(() => {
  //   if (article) {
  //     setBeverages(article.beverages);
  //   }
  // }, [article]);

  // useQuery data 디버깅용
  // useEffect(() => {
  //   console.log('받아온 데이터 ', article);
  // }, [article]);

  // useEffect(() => {
  //   console.log('바뀐 beverages : ', beverages);
  // }, [beverages]);

  const showDetailPage = (article) => {
    console.log('showDetailPage 전달 데이터 : ', article);
    console.log('article.isRequester 전달 데이터 : ', article.isRequester);
    console.log('article.isMatch 전달 데이터 : ', article.isMatch);
    console.log('article.beverages 전달 데이터 : ', article.beverages);
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
    return <PickerMatch response={article} isMatch={article.isMatch} beverages={article.beverages} />;
  };

  return (
    <div className="page--layout">
      <div>{showDetailPage(article)}</div>
    </div>
  );
};

export default ArticleDetailPage;
