import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleNav from '../components/atoms/ArticleNav';
import Card from '../components/atoms/Card';
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
      shopName: '전남대 후문 스타벅스',
      destination: '공과대학 7호관',
      finishedAt: 1696040640,
      tip: 1500,
      match: false,
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
      <div className="h-[550px] overflow-scroll scrollbar-hide">
        {/* 여기에 있는 2개의 Card 컴포넌트는 매칭 o/x에 따른 예시를 보여주기 위해 임시로 넣었습니다 */}
        <Card match />
        <Card />
        <Cards articles={data} />
      </div>
      <div className="flex flex-row-reverse p-[23px]">
        <img className="cursor-pointer" onClick={goWritePost} src={WritePostIcon} alt="공고 쓰기" />
      </div>
    </div>
  );
};

export default PostListPage;
