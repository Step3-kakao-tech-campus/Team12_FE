import React from 'react';
import WriterMatchTemplate from '../components/templates/postDetail/WriterMatchTemplate';
import WriterNoMatchTemplate from '../components/templates/postDetail/WriterNoMatchTemplate';
// import { getMyPageWritenPostDetail } from '../apis/postDetail';
// import { useQuery } from '@tanstack/react-query';
// import { useParams } from 'react-router-dom';

const MyPageWritenPostDetailPage = () => {
  // 상세 페이지 API 요청을 통해 받아온 데이터
  // 매칭 안된 경우
  // const data = {
  //   success: true,
  //   response: {
  //     boardId: 6,
  //     shopName: '메가MGC',
  //     destination: '전남대 공대7 222호관',
  //     beverage: [
  //       {
  //         name: '카페라떼',
  //       },
  //     ],
  //     tip: 2000,
  //     request: '빨리 와주세요6',
  //     finishedAt: 1699201131,
  //     isMatch: false,
  //   },
  //   error: null,
  // };

  // 매칭 된 경우
  const data = {
    success: true,
    response: {
      boardId: 3,
      shopName: '더벤티',
      destination: '전남대 공대7 219호관',
      beverage: [
        {
          name: '아메리카노',
        },
      ],
      tip: 2000,
      request: '빨리 와주세요3',
      finishedAt: 1699201132,
      isMatch: true,
      pickerBank: '신한은행',
      pickerAccount: '000-0000-0000',
      arrivalTime: 1708820452,
      pickerPhoneNumber: '010-0000-0000',
    },
    error: null,
  };

  // useParams + useQuery로 데이터를 받아와서
  // data를 data?.response로 받아서 WriterMatchTemplate & WriterNoMatchTemplate으로 보내주면 됨
  // const { id } = useParams();
  // const { data } = useQuery(['getMyPageWritenPostDetail'], () => getMyPageWritenPostDetail(id));
  // const post = data?.response;

  const showDetailPage = (post) => {
    // 작성자이고 매칭됐을 때
    if (post.isMatch) {
      return <WriterMatchTemplate response={post} />;
    }
    // 작성자이고 매칭 안됐을 때
    return <WriterNoMatchTemplate response={post} />;
  };

  return (
    <div className="page--layout">
      <div>{showDetailPage(data?.response)}</div>
    </div>
  );
};

export default MyPageWritenPostDetailPage;
