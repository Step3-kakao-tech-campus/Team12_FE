// import { useEffect } from 'react';
import OtherNav from '@components/atoms/nav/OtherNav';
import MyPageWrittenArticleCards from '@components/molecules/MyPageWrittenArticleCards';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getWrittenArticles } from '@/apis/article';
import MYPAGE from '@/constant/mypage';
import Loader from '@/components/atoms/Loader';
import { ERROR } from '@/constant/error';
import occurError from '@/utils/occurError';

const WrittenArticlePage = () => {
  // 작성한 공고글 목록 조회(마이페이지) 요청
  // 데이터를 받아와서 공고글 목록을 articles 변수에 담고
  // MyPagePickupArticleCards로 articles를 props로 넘겨주면 끝
  const navigate = useNavigate();
  const {
    data: articlesData,
    isLoading,
    isError,
  } = useQuery(['getWrittenArticles'], getWrittenArticles, {
    select: (data) => data?.data.response.content,
    onError: (error) => {
      occurError(error);
    },
  });

  // useQuery data 디버깅용
  // useEffect(() => {
  //   console.log('articlesData : ', articlesData);
  // }, [articlesData]);

  const isWrittenArticles = (articles) => {
    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      navigate('/errorPage');
    }

    return articles.length !== 0 ? (
      <MyPageWrittenArticleCards articles={articles} />
    ) : (
      <div className="text-center text-blue text-xl mt-[17rem]">{ERROR.NO_WRITTEN_ARTICLE}</div>
    );
  };

  return (
    <div className="page--layout">
      <OtherNav />
      <div className="text-center text-xl text-blue my-6">{MYPAGE.WRITTEN_ARTICLE}</div>
      <div className="h-[580px] overflow-y-auto overflow-x-hidden scrollbar-hide">
        {isWrittenArticles(articlesData)}
      </div>
    </div>
  );
};

export default WrittenArticlePage;
