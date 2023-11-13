import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import OtherNav from '@components/atoms/nav/OtherNav';
import Cards from '@components/molecules/Cards';
import FilterForm from '@components/molecules/FilterForm';
import routes from '@/constant/routes';
import { getArticles } from '@/apis/article';
import WriteArticleIcon from '@/assets/images/writeArticle.png';
import { HOME } from '@/constant/home';
import { ARTICLE } from '@/constant/article';

const ArticleListPage = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { data, fetchNextPage, hasNextPage, isError } = useInfiniteQuery(
    ['articles'],
    ({ pageParam = '' }) => getArticles(pageParam),
    {
      getNextPageParam: (lastPage) => {
        // 다음 공고글을 호출할 때 사용할 pageParam(pageOffset)
        // 초회 요청시에는 API문서 내용에 따라 아무것도 넣지 않아야 하므로 ''를 넣고, 이후에는 boardId값 기반으로 요청
        // 마지막 페이지가 아닐경우 추가 렌더링을 위해 offset 계산하여 리턴 or 마지막 페이지일 경우 undefined 반환하여 페이지를 불러오지 않도록 함
        // 마지막 페이지 데이터를 의미하는 last = true일 경우 undefined를 반환하여 페이지 요청 x
        console.log('lastPage', lastPage);
        return !lastPage.data.response.pageable.last
          ? lastPage.data.response.content[lastPage.data.response.pageable.numberOfElements - 1].boardId
          : undefined;
      },
    },
  );

  if (isError) {
    navigate('/errorPage');
  }

  // inView가 사용자에게 보임 & hasNextPage가 true일 경우 다음 페이지를 렌더링해오도록 한다.
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  // getArticles를 통해 데이터를 불러오면, 받아온 데이터들을 처리하는 코드
  // newArticles = 새로 업데이트된 전체 공고글
  // setArticles : 필터 적용전 원본 공고글들을 저장해놓기 위해 사용
  // setFilteredArticles : 필터가 적용된 공고글들을 저장해놓기 위해 사용
  // 여기에 setFilteredArticles가 있는 이유는, 필터가 적용된 상태에서 추가 공고글을 불러올 경우에도 해당 필터에 대한 공고글을 렌더링 하기 위함
  useEffect(() => {
    if (data) {
      console.log('data', data);
      const newArticles = data.pages.flatMap((page) => page.data.response.content);
      setArticles(newArticles);
      setFilteredArticles(newArticles.filter((article) => article.shopName.includes(filter)));
    }
  }, [data]);

  // filter가 업데이트 될 경우, 받아왔던 공고글을 filter에 따라 렌더링
  // filter === ''은 필터가 적용되지 않은 전체 공고글을 의미함
  useEffect(() => {
    if (filter === '') {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter((article) => article.shopName.includes(filter)));
    }
  }, [filter]);

  const goWriteArticle = () => {
    navigate(routes.articleWriteIntro);
  };

  // FilterForm으로부터 사용자가 설정한 filter를 받아옴
  const getFilter = (text) => {
    setFilter(text);
  };

  return (
    <div className="page--layout">
      <OtherNav />
      <div className="text-center text-blue text-xl">{HOME.ARTICLE}</div>
      <FilterForm getFilter={getFilter} />
      <div className="h-[550px] overflow-y-auto overflow-x-hidden scrollbar-hide">
        {filteredArticles ? (
          <Cards articles={filteredArticles} />
        ) : (
          <div className="text-center text-blue text-xl">{ARTICLE.NO_ARTICLE}</div>
        )}
        <div ref={ref} className="w-[100%] h-[10px]" />
      </div>
      <div className="fixed bottom-6 right-6">
        <img
          className="cursor-pointer transition-transform duration-1000 ease-in-out transform hover:scale-110"
          onClick={goWriteArticle}
          src={WriteArticleIcon}
          alt="공고 쓰기"
        />
      </div>
    </div>
  );
};

export default ArticleListPage;
