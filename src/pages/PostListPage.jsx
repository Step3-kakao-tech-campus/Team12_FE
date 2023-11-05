import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPosts } from '../apis/post';
import routes from '../constant/routes';
import OtherNav from '../components/atoms/OtherNav';
import Cards from '../components/molecules/Cards';
import FilterForm from '../components/molecules/FilterForm';
import WritePostIcon from '../assets/images/postWrite.png';

const PostListPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { data, fetchNextPage, hasNextPage, isError } = useInfiniteQuery(
    ['posts'],
    ({ pageParam = '' }) => getPosts(pageParam),
    {
      getNextPageParam: (lastPage) => {
        // 다음 공고글을 호출할 때 사용할 pageParam(pageOffset)
        // 초회 요청시에는 API문서 내용에 따라 아무것도 넣지 않아야 하므로 ''를 넣고, 이후에는 boardId값 기반으로 요청
        // 마지막 페이지가 아닐경우 추가 렌더링을 위해 offset 계산하여 리턴 or 마지막 페이지일 경우 undefined 반환하여 페이지를 불러오지 않도록 함
        // 마지막 페이지 데이터를 의미하는 last = true일 경우 undefined를 반환하여 페이지 요청 x
        return !lastPage.data.response.last
          ? lastPage.data.response.content[lastPage.data.response.numberOfElements - 1].boardId
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
      console.log('isError : ', isError);
    }
  }, [inView]);

  // getPosts를 통해 데이터를 불러오면, 받아온 데이터들을 처리하는 코드
  // newPosts = 새로 업데이트된 전체 공고글
  // setPosts : 필터 적용전 원본 공고글들을 저장해놓기 위해 사용
  // setFilteredPosts : 필터가 적용된 공고글들을 저장해놓기 위해 사용
  // 여기에 setFilteredPosts가 있는 이유는, 필터가 적용된 상태에서 추가 공고글을 불러올 경우에도 해당 필터에 대한 공고글을 렌더링 하기 위함
  useEffect(() => {
    if (data) {
      const newPosts = data.pages.flatMap((page) => page.data.response.content);
      setPosts(newPosts);
      setFilteredPosts(newPosts.filter((post) => post.shopName.includes(filter)));
    }
  }, [data]);

  // filter가 업데이트 될 경우, 받아왔던 공고글을 filter에 따라 렌더링
  // filter === ''은 필터가 적용되지 않은 전체 공고글을 의미함
  useEffect(() => {
    if (filter === '') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.shopName.includes(filter)));
    }
  }, [filter]);

  const goWritePost = () => {
    navigate(routes.postWriteIntro);
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
        <Cards articles={filteredPosts} />
        <div ref={ref} className="w-[100%] h-[10px]" />
      </div>
      <div className="flex flex-row-reverse h-[84px] items-center px-[22px]">
        <img className="cursor-pointer" onClick={goWritePost} src={WritePostIcon} alt="공고 쓰기" />
      </div>
    </div>
  );
};

export default PostListPage;
