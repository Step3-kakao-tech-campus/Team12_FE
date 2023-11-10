/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@components/atoms/Footer';
import Nav from '@components/atoms/nav/Nav';
import { useQuery } from '@tanstack/react-query';
import Card from '@components/atoms/Card';
import Carousel from '@components/atoms/CarouselCustomNavigation';
import routes from '@/constant/routes';
import { getLastArticles } from '@/apis/article';
import Cards from '@/components/molecules/Cards';
import Loader from '@/components/atoms/Loader';
import ErrorPage from './ErrorPage';

const HomePage = () => {
  const {
    data: articles,
    isLoading,
    isError,
  } = useQuery(['/articles?limit=3'], getLastArticles(), {
    select: (data) => data?.data.response.content,
  });

  const dark = 'opacity-25';

  const isArticles = (articles) => {
    if (articles) {
      return <Cards articles={articles} />;
    }

    if (isLoading) {
      return (
        <div className="relative top-[10rem]">
          <Loader />
        </div>
      );
    }

    if (isError) {
      return <ErrorPage />;
    }
  };

  return (
    <div className="page--layout">
      <Nav />
      <div className="mt-28">
        <Carousel />
      </div>
      <div>
        <div className="mt-10 px-6 flex justify-between items-center">
          <div className="text-xl text-blue">현재 픽업을 기다리고 있어요.</div>
          <Link to={routes.article}>
            <div className="text-zinc-400">더보기</div>
          </Link>
        </div>
        <div className="mx-5">{isArticles(articles)}</div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
