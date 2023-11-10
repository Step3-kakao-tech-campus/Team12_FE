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

const HomePage = () => {
  const { data } = useQuery(['/articles?limit=3'], getLastArticles());
  const articles = data?.data.response.content;

  const isArticles = (articles) => {
    if (articles.length !== 0) {
      return <Cards articles={articles} />;
    }
    return;
  };

  return (
    <div className="page--layout">
      <Nav />
      {/* 사진 or 캐러셀 부분 */}
      <div className="mt-28">
        <Carousel />
      </div>
      {/* <div className="mt-28">
        <img
          src="https://media.istockphoto.com/id/517157936/ko/%EC%82%AC%EC%A7%84/%EA%B5%BF-%EB%AA%A8%EB%8B%9D-%EC%BB%A4%ED%94%BC%EB%A5%BC-%EC%8B%9C%EC%9E%91.jpg?s=612x612&w=0&k=20&c=q9_3X3T3vqxgYi9CQ_fMFa0ZkG77tJN3pQqgzBrYYcE="
          alt="MainPage-img"
          width={360}
        />
      </div> */}
      {/* 현재 픽업을 기다리고 있어요 부분 */}
      <div>
        <div className="mt-10 px-6 flex justify-between items-center">
          <div className="text-xl text-blue">현재 픽업을 기다리고 있어요.</div>
          {/* eslint-disable-next-line */}
          <Link to={routes.article}>
            <div className="text-zinc-400">더보기</div>
          </Link>
        </div>
        <div className="mx-5">
          {isArticles(articles)}
          {/* <Cards articles={articles} /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
