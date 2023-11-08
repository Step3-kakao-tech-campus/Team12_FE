/* eslint-disable */
import { useEffect, useState } from 'react';
import WriterMatch from '../components/templates/postDetail/WriterMatchTemplate';
import WriterNoMatch from '../components/templates/postDetail/WriterNoMatchTemplate';
import PickerMatch from '../components/templates/postDetail/PickerMatchTemplate';
import PickerNoMatch from '../components/templates/postDetail/PickerNoMatchTemplate.jsx';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPostDetail } from '../apis/postDetail.js';

const PostDetailPage = () => {
  // 샘플데이터
  const sample = {
    boardId: 1,
    shopName: '스타벅스 전대후문점',
    destination: '공과대학 7호관',
    beverage: [
      {
        name: '아이스 아메리카노 1잔',
      },
      {
        name: '핫 아메리카노 1잔',
      },
    ],
    tip: 3000,
    request: '1층 도착하시면 연락주세요!',
    finishedAt: 15468965196,
    pickerBank: '농협',
    pickerAccount: '00000000000000',
    arriveTime: '14시 20분 도착예정',
    pickerPhoneNumber: '010-1234-1234',
    isMatch: true,
    same: true,
  };

  // const { id } = useParams();
  // const { data } = useQuery([`post/${id}`], () => getPostDetail(id));
  // const post = data?.data.response;
  const post = sample;

  /* eslint no-else-return: "error" */
  const showDetailPage = (post) => {
    // 작성자이고 매칭됐을 때
    if (post.same && post.isMatch) {
      return <WriterMatch response={post} />;
      // 작성자이고 매칭 안됐을 때
    } else if (post.same && !post.isMatch) {
      return <WriterNoMatch response={post} />;
      // 피커이고 매칭 됐을 때
    } else if (!post.same && post.isMatch) {
      return <PickerMatch response={post} />;
    }
    // 피커이고 매칭 안됐을 때
    return <PickerNoMatch response={post} />;
  };

  return (
    <div className="page--layout">
      <div>{showDetailPage(post)}</div>
    </div>
  );
};

export default PostDetailPage;
