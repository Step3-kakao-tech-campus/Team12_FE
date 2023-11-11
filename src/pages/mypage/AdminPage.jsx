/* eslint-disable */
import { useEffect } from 'react';
import AuthRequest from '@components/organisms/AuthRequest';
import OtherNav from '@components/atoms/nav/OtherNav';
import { adminAuthList } from '@/apis/admin';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import occurError from '@/utils/occurError';
import Loader from '@components/atoms/Loader';
// import axios from 'axios';
import { STUDENT } from '@/constant/auth';
import { useState } from 'react';
import { ERROR } from '@/constant/error';

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

  // const adminAuthList = (offset = '') => {
  //   const config = {
  //     timeout: 1000,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     withCredentials: true,
  //   };

  //   return axios.get(`api/admin/auth/list?offset=${offset}&limit=10`, config);
  // };

  const [userData, setUserData] = useState([]);
  const { ref, inView } = useInView({ threshold: 0.5 });

  // react-query
  const { data, fetchNextPage, isLoading, isError, hasNextPage } = useInfiniteQuery(
    ['adminAuthList'],
    ({ pageParam = '' }) => adminAuthList(pageParam),
    {
      getNextPageParam: (lastPage) => {
        console.log('lastPage', lastPage);
        return !lastPage.data.response.pageable.last
          ? lastPage.data.response.content[lastPage.data.response.pageable.numberOfElements - 1].userId
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
    }
  }, [inView]);

  useEffect(() => {
    if (data) {
      console.log('data', data);
      const newUserData = data.pages.flatMap((page) => page.data.response.content);
      setUserData(newUserData);
      console.log(userData);
    }
  }, [data]);

  const isInData = (userData) => {
    if (isLoading) {
      return <Loader />;
    }
    if (isError) {
      navigate('/errorPage');
    }

    return userData
      ? userData.map((item) => {
          <AuthRequest key={item.id} user={item} />;
        })
      : ERROR.NO_USER_LIST;
  };

  return (
    <div className="page--layout">
      <OtherNav />
      <div className="pt-[25px] p-[35px]">
        <div className="text-center text-xl text-blue mb-10">{STUDENT.REQUEST_AUTH}</div>
        <div className="h-[550px] overflow-y-auto overflow-x-hidden scrollbar-hide">
          {isInData(userData)}
          {/* <AuthRequest user={userData} /> */}
          <div ref={ref} className="w-[100%] h-[10px]" />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
