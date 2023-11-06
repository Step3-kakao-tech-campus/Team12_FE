/* eslint-disable */
import { useEffect, useState } from 'react';
import WriterMatch from '../components/templates/postDetail/WriterMatchTemplate';
import WriterNoMatch from '../components/templates/postDetail/WriterNoMatchTemplate';
import PickerMatch from '../components/templates/postDetail/PickerMatchTemplate';
import PickerNoMatch from '../components/templates/postDetail/PickerNoMatchTemplate.jsx';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPostById } from '../apis/post';

const PostDetailPage = () => {
  // 샘플데이터
  const sample = {
    boardId: 1,
    shopName: '전남대 후문 스타벅스',
    destination: '전남대 공대7 217호관',
    beverage: [
      {
        name: '핫 아메리카노',
      },
      {
        name: '아이스 아메리카노',
      },
    ],
    tip: 1000,
    request: '빨리 와주세요',
    finishedAt: 1696073040,
    isMatch: false,
    same: false,
  };

  // const { id } = useParams();
  // const { data } = useQuery(`post/${id}`, () => getPostById(id));
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
