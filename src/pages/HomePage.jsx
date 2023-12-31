import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '@components/atoms/Footer';
import Nav from '@components/atoms/nav/Nav';
import { useQuery } from '@tanstack/react-query';
import Carousel from '@components/atoms/CarouselCustom';
import routes from '@/constant/routes';
import { getLastArticles } from '@/apis/article';
import Cards from '@/components/molecules/Cards';
import Loader from '@/components/atoms/Loader';
import { HOME } from '@/constant/home';

const HomePage = () => {
  const navigate = useNavigate();
  const {
    data: articlesData,
    isLoading,
    isError,
  } = useQuery(['/articles/latest'], getLastArticles, {
    select: (data) => data?.data.response.content,
  });

  const isArticles = (articles) => {
    if (isLoading) {
      return (
        <div className="relative top-[10rem]">
          <Loader />
        </div>
      );
    }

    if (isError) {
      navigate('/errorPage');
    }

    return <Cards articles={articles} />;
  };

  return (
    <div className="page--layout">
      <Nav />
      <div className="mt-28">
        <Carousel />
      </div>
      <article>
        <div className="mt-5 px-6 flex justify-between items-center">
          <p className="text-lg text-blue">{HOME.LASTEST}</p>
          <Link to={routes.article}>
            <p className="text-sm text-zinc-400">{HOME.MORE}</p>
          </Link>
        </div>
        <section className="mx-5">{isArticles(articlesData)}</section>
      </article>
      <Footer />
    </div>
  );
};

export default HomePage;
