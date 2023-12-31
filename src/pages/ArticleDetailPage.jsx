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
  const { data: article, isLoading } = useQuery([`article_detail`], () => getArticleDetail(id), {
    select: (data) => data?.data.response,
    onError: (error) => {
      occurError(error);
    },
  });

  // useEffect(() => {
  //   article && setBeverages(article?.beverages?.map((beverage) => beverage.name));
  //   delete article.beverages;
  // }, [article]);

  // useQuery data 디버깅용
  // useEffect(() => {
  //   console.log('받아온 데이터 ', article);
  // }, [article]);

  // useEffect(() => {
  //   console.log('로딩중? : ', isLoading);
  // }, [isLoading]);

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
    return (
      <PickerMatch
        response={article}
        isMatch={article.isMatch}
        beverages={article.beverages}
        isRequester={article.isRequester}
      />
    );
  };

  return (
    <div className="page--layout">
      <div>{showDetailPage(article)}</div>
    </div>
  );
};
export default ArticleDetailPage;
