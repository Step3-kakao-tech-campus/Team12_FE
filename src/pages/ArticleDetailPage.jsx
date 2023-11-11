/* eslint-disable */
import { useEffect } from 'react';
import WriterMatch from '@components/templates/articleDetail/WriterMatchTemplate';
import WriterNoMatch from '@components/templates/articleDetail/WriterNoMatchTemplate';
import PickerMatch from '@components/templates/articleDetail/PickerMatchTemplate';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getArticleDetail } from '@/apis/articleDetail.js';
import occurError from '@/utils/occurError';
import Loader from '@/components/atoms/Loader';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const { data: article, isLoading } = useQuery([`article_detail`, id], () => getArticleDetail(id), {
    select: (data) => data?.data?.response,
    onError: (error) => {
      occurError(error);
    },
  });

  console.log(data);
  console.log(data?.data?.response);

  // useQuery data 디버깅용
  useEffect(() => {
    console.log(article);
  }, [article]);

  const showDetailPage = (article) => {
    if (article.isRequester) {
      return article.isMatch ? <WriterMatch response={article} /> : <WriterNoMatch response={article} />;
    }
    return <PickerMatch response={article} isMatch={article.isMatch} />;
  };

  return (
    <div className="page--layout">
      <div>{isLoading ? <Loader /> : showDetailPage(article)}</div>
    </div>
  );
};

export default ArticleDetailPage;
