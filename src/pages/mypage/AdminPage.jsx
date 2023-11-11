/* eslint-disable */
import { useEffect } from 'react';
import AuthRequest from '@components/organisms/AuthRequest';
import OtherNav from '@components/atoms/nav/OtherNav';
// import { adminAuthList } from '@/apis/admin';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import occurError from '@/utils/occurError';
import Loader from '@components/atoms/Loader';
import axios from 'axios';
import { STUDENT } from '@/constant/auth';

const AdminPage = () => {
  // msw
  // useEffect(() => {
  //   fetch('/admin/auth/list')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const userArray = data.response.user;
  //       setUserInfo(userArray);
  //     });
  // }, []);

  const adminAuthList = (offset = '') => {
    const config = {
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    return axios.get(`api/admin/auth/list?offset=${offset}&limit=10`, config);
  };

  const { ref, inView } = useInView({ threshold: 0.5 });

  // react-query
  const {
    data: userData,
    fetchNextPage,
    isLoading,
    isError,
    hasNextPage,
  } = useInfiniteQuery(['adminAuthList'], ({ pageParam = '' }) => adminAuthList(pageParam), {
    getNextPageParam: (lastPage) =>
      !lastPage.data.response.pageable.last
        ? lastPage.data.response.content[lastPage.data.response.pageable.numberOfElements - 1].userId
        : undefined,
    select: (data) => data?.data?.response.content,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      occurError(error);
    },
    retry: false,
  });

  // inView가 사용자에게 보임 & hasNextPage가 true일 경우 다음 페이지를 렌더링해오도록 한다.
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const isInData = (userData) => {
    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      navigate('/errorPage');
    }

    return userData.map((item) => {
      return <AuthRequest key={item.id} user={item} />;
    });
  };

  return (
    <div className="page--layout">
      <OtherNav />
      <div className="pt-[25px] p-[35px]">
        <div className="text-center text-xl text-blue mb-10">{STUDENT.REQUEST_AUTH}</div>
        <div className="h-[550px] overflow-y-auto overflow-x-hidden scrollbar-hide">
          {isInData(userData)}
          <div ref={ref} className="w-[100%] h-[10px]" />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
