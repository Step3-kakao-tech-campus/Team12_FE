/* eslint-disable */
import { useEffect } from 'react';
import AuthRequest from '@components/organisms/AuthRequest';
import OtherNav from '@components/atoms/nav/OtherNav';
import { adminAuthList } from '@/apis/admin';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import occurError from '@/utils/occurError';
import Loader from '@components/atoms/Loader';
import { STUDENT } from '@/constant/auth';
import { useState } from 'react';
import { ERROR } from '@/constant/error';

const AdminPage = () => {
  const [userData, setUserData] = useState([]);
  const { ref, inView } = useInView({ threshold: 0.5 });

  // react-query
  const { data, fetchNextPage, isLoading, isError, hasNextPage } = useInfiniteQuery(
    ['adminAuthList'],
    ({ pageParam = '' }) => adminAuthList(pageParam),
    {
      getNextPageParam: (lastPage) => {
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
      const newUserData = data.pages.flatMap((page) => page.data.response.content);
      setUserData(newUserData);
    }
  }, [data]);

  const isInData = (userData) => {
    if (isLoading) {
      return <Loader />;
    }
    if (isError) {
      navigate('/errorPage');
    }

    return userData.length !== 0 ? (
      userData.map((item) => {
        return <AuthRequest key={item.userId} user={item} />;
      })
    ) : (
      <div className="text-center text-xl text-blue mt-[17rem]">{ERROR.NO_USER_LIST}</div>
    );
  };

  return (
    <div className="page--layout scrollbar-hide">
      <OtherNav />
      <div className="pt-[25px] p-[35px]">
        <div className="text-center text-xl text-blue mb-10">{STUDENT.REQUEST_AUTH}</div>
        <div className="h-[550px] overflow-y-auto overflow-x-hidden">
          {isInData(userData)}
          {/* <AuthRequest user={userData} /> */}
          <div ref={ref} className="w-[100%] h-[10px]" />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
