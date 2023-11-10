/* eslint-disable */
import { useEffect, useState } from 'react';
import AuthRequest from '@components/organisms/AuthRequest';
import OtherNav from '@components/atoms/nav/OtherNav';
import { adminAuthList } from '@/apis/admin';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import occurError from '@/utils/occurError';
import Loader from '@components/atoms/Loader';

const AdminPage = () => {
  // const [userInfo, setUserInfo] = useState([]);
  const { inView } = useInView();

  // msw
  // useEffect(() => {
  //   fetch('/admin/auth/list')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const userArray = data.response.user;
  //       setUserInfo(userArray);
  //     });
  // }, []);

  // react-query
  const {
    data: userData,
    fetchNextPage,
    isLoading,
    isError,
    refetch,
  } = useInfiniteQuery(['adminAuthList'], ({ pageParam = 0 }) => adminAuthList(pageParam), {
    getNextPageParam: (lastPage) => (!lastPage.isLast ? lastPage.nextPage : undefined),
    select: (data) => data?.data?.response.content,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      occurError(error);
    },
    retry: false,
  });

  useEffect(() => {
    if (inView) {
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
        <div className="text-center text-xl text-blue mb-10">학생 인증 요청</div>
        {isInData(userData)}
      </div>
    </div>
  );
};

export default AdminPage;
