import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
// import { getPosts } from '../apis/post';
import OtherNav from '../components/atoms/OtherNav';
import Cards from '../components/molecules/Cards';
import FilterForm from '../components/molecules/FilterForm';
import WritePostIcon from '../assets/images/postWrite.png';

const PostListPage = () => {
  // 이 코드는 inView에 닿았을 시 무한스크롤에 따라 요청이 이루어지는지 확인하기 위한 코드(정상 작동 o)
  // 현재 index.js의 REACT_APP_API_URL이 따로 설정되지 않아 에러가 발생하는듯 하여 이렇게 임시로 작동만되도록 놔둠
  // 추후 백엔드 API 연결이 완료되고 나면 삭제할 코드이므로, 아래 코드는 무시하셔도 됩니다.
  const getPosts = (offset = '') => {
    console.log(`요청  : /articles?offset=${offset}&limit=10`);
  };

  // 임시 더미 데이터(데이터를 서버로부터 fetch 해왔다고 가정)
  const sampleData = [
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

  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('');
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { data, fetchNextPage, hasNextPage, isError } = useInfiniteQuery(
    ['posts'],
    ({ pageParam = '' }) => getPosts(pageParam),
    {
      getNextPageParam: (lastPage) => {
        // 다음 공고글을 호출할 때 사용할 pageParam(pageOffset)
        // 초회 요청시에는 API문서 내용에 따라 아무것도 넣지 않아야 하므로 ''를 넣고, 이후에는 boardId값 기반으로 요청
        // 마지막 페이지가 아닐경우 추가 렌더링을 위해 offset 계산하여 리턴 or 마지막 페이지일 경우 NULL을 반환하여 페이지를 불러오지 않도록 함
        // 추후 백엔드 API 연결이 완료되고 나면 삭제할 코드이므로, 아래 코드는 무시하셔도 됩니다.
        console.log('다음 param 호출');
        console.log('lastPage', lastPage);
        return 10;
        // 여기 아래의 코드가 API연결 이후에 사용할 진짜 코드!
        // return !lastPage.last ? lastPage.content[lastPage.numberOfElements - 1].boardId : null;
      },
    },
  );

  // inView가 사용자에게 보임 & hasNextPage가 true일 경우 다음 페이지를 렌더링해오도록 한다.
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
      console.log('inView  : ', inView);
      console.log('data : ', data);
      console.log('hasNextPage', hasNextPage);
    }
  }, [inView]);

  if (isError) {
    navigate('/error');
  }

  // filter가 업데이트 될 경우, 받아왔던 데이터를 filter에 따라 렌더링
  useEffect(() => {
    // setPosts(posts.filter((post) => post.shopName.includes(filter)));
    setPosts(sampleData.filter((post) => post.shopName.includes(filter)));
  }, [filter]);

  const goWritePost = () => {
    navigate('/post-write-intro');
  };

  // FilterForm으로부터 사용자가 설정한 filter를 받아옴
  const getFilter = (text) => {
    setFilter(text);
  };

  return (
    <div className="page--layout">
      <OtherNav />
      <div className="text-center text-blue text-xl">공고 현황</div>
      <FilterForm getFilter={getFilter} />
      <div className="h-[550px] overflow-y-auto overflow-x-hidden scrollbar-hide">
        <Cards articles={posts} />
        <div ref={ref} className="w-[100%] h-[10px]" />
      </div>
      <div className="flex flex-row-reverse h-[84px] items-center px-[22px]">
        <img className="cursor-pointer" onClick={goWritePost} src={WritePostIcon} alt="공고 쓰기" />
      </div>
    </div>
  );
};

export default PostListPage;
