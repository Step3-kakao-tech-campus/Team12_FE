import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/atoms/Footer';
import Nav from '../components/atoms/Nav';
import Card from '../components/atoms/Card';
import routes from '../constant/routes';

const HomePage = () => {
  return (
    <div className="page--layout">
      <Nav />
      {/* 사진 or 캐러셀 부분 */}
      <div className="mt-28">
        <img
          src="https://media.istockphoto.com/id/517157936/ko/%EC%82%AC%EC%A7%84/%EA%B5%BF-%EB%AA%A8%EB%8B%9D-%EC%BB%A4%ED%94%BC%EB%A5%BC-%EC%8B%9C%EC%9E%91.jpg?s=612x612&w=0&k=20&c=q9_3X3T3vqxgYi9CQ_fMFa0ZkG77tJN3pQqgzBrYYcE="
          alt="MainPage-img"
          width={360}
        />
      </div>
      {/* 현재 픽업을 기다리고 있어요 부분 */}
      <div>
        <div className="mt-10 px-6 flex justify-between items-center">
          <div className="text-xl text-blue">현재 픽업을 기다리고 있어요.호호!!(테스트)</div>
          {/* eslint-disable-next-line */}
          <Link to={routes.post}>
            <div className="text-zinc-400">더보기</div>
          </Link>
        </div>
        <div className="mx-5">
          <Card to="/post/1" />
          <Card to="/post/2" />
          <Card to="/post/3" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
