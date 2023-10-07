import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleNav from '../components/atoms/ArticleNav';
import Cards from '../components/molecules/Cards';
import FilterForm from '../components/molecules/FilterForm';
import WritePostIcon from '../assets/images/postWrite.png';

const PostListPage = () => {
  // 임시 더미 데이터(데이터를 서버로부터 fetch 해왔다고 가정)
  const data = [
    {
      boardId: 8,
      shopName: '전남대 후문 스타벅스',
      destination: '공과대학 7호관',
      finishedAt: 1696992289,
      tip: 1500,
      match: true,
    },
    {
      boardId: 7,
      shopName: '전남대 후문 벤티',
      destination: '공과대학 6호관',
      finishedAt: 1696040640,
      tip: 1000,
      match: false,
    },
    {
      boardId: 6,
      shopName: '전남대 후문 이디야',
      destination: '공과대학 7호관',
      finishedAt: 1696040640,
      tip: 1500,
      match: true,
    },
    {
      boardId: 5,
      shopName: '전남대 후문 스타벅스',
      destination: '공과대학 7호관',
      finishedAt: 1696992289,
      tip: 1000,
      match: false,
    },
    {
      boardId: 4,
      shopName: '전남대 후문 스타벅스',
      destination: '공과대학 7호관',
      finishedAt: 1696040640,
      tip: 1000,
      match: false,
    },
    {
      boardId: 3,
      shopName: '전남대 후문 스타벅스',
      destination: '공과대학 7호관',
      finishedAt: 1696040640,
      tip: 1000,
      match: false,
    },
    {
      boardId: 2,
      shopName: '전남대 후문 이디야',
      destination: '공과대학 7호관',
      finishedAt: 1696040640,
      tip: 1000,
      match: true,
    },
    {
      boardId: 1,
      shopName: '전남대 후문 이디야',
      destination: '공과대학 7호관',
      finishedAt: 1696040640,
      tip: 1000,
      match: false,
    },
  ];

  const navigate = useNavigate();

  const goWritePost = () => {
    navigate('/start-post');
  };

  return (
    <div className="page--layout">
      <ArticleNav />
      <div className="text-center text-blue text-xl">공고 현황</div>
      <FilterForm />
      <div className="h-[550px] overflow-y-auto overflow-x-hidden scrollbar-hide">
        <Cards articles={data} />
      </div>
      <div className="flex flex-row-reverse h-[84px] items-center px-[22px]">
        <img className="cursor-pointer" onClick={goWritePost} src={WritePostIcon} alt="공고 쓰기" />
      </div>
    </div>
  );
};

export default PostListPage;
