import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OtherNav from '../components/atoms/OtherNav';
import Cards from '../components/molecules/Cards';
import FilterForm from '../components/molecules/FilterForm';
import WritePostIcon from '../assets/images/postWrite.png';

const PostListPage = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  // 임시 더미 데이터(데이터를 서버로부터 fetch 해왔다고 가정)
  const data = [
    {
      boardId: 9,
      shopName: '전남대 후문 더벤티',
      destination: '공과대학 7호관',
      finishedAt: 1696992289,
      tip: 1500,
      match: true,
    },
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
      shopName: '전남대 후문 더벤티',
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
      shopName: '전남대 후문 공차',
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
      match: false,
    },
    {
      boardId: 1,
      shopName: '전남대 후문 공차',
      destination: '공과대학 7호관',
      finishedAt: 1696040640,
      tip: 1000,
      match: false,
    },
  ];

  const goWritePost = () => {
    navigate('/post-write-intro');
  };

  // FilterForm으로부터 사용자가 설정한 filter를 받아옴
  const getFilter = (text) => {
    setFilter(text);
  };

  // filter가 업데이트 될 경우, 받아왔던 데이터를 filter에 따라 렌더링
  // 추후 데이터 페칭 코드가 추가되면 동기적으로 작동하도록 aysnc - await 사용 필요
  // 데이터 페칭 - posts 업데이트 - 필터에 따라 렌더링
  useEffect(() => {
    setPosts(data.filter((post) => post.shopName.includes(filter)));
  }, [filter]);

  return (
    <div className="page--layout">
      <OtherNav />
      <div className="text-center text-blue text-xl">공고 현황</div>
      <FilterForm getFilter={getFilter} />
      <div className="h-[550px] overflow-y-auto overflow-x-hidden scrollbar-hide">
        <Cards articles={posts} />
      </div>
      <div className="flex flex-row-reverse h-[84px] items-center px-[22px]">
        <img className="cursor-pointer" onClick={goWritePost} src={WritePostIcon} alt="공고 쓰기" />
      </div>
    </div>
  );
};

export default PostListPage;
