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
  const { id } = useParams();
  const { data: article, isLoading } = useQuery([`article_detail`, id], () => getArticleDetail(id), {
    select: (data) => data?.data?.response,
    onError: (error) => {
      occurError(error);
    },
  });
  console.log(article);

  const [beverages, setBeverages] = useState([]);
  useEffect(() => {
    setBeverages(article?.beverages?.map((beverage) => beverage.name));
    delete article.beverages;
  }, [article]);

  // useQuery data 디버깅용
  useEffect(() => {
    console.log(article);
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
        <WriterMatch response={article} beverages={beverageNames} />
      ) : (
        <WriterNoMatch response={article} beverages={beverageNames} />
      );
    }
    return <PickerMatch response={article} isMatch={article.isMatch} beverages={beverageNames} />;
  };

  return (
    <div className="page--layout">
      <div>{showDetailPage(article)}</div>
    </div>
  );
};

export default ArticleDetailPage;
