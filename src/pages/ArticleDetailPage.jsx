/* eslint-disable */
import { useEffect, useState } from 'react';
import WriterMatch from '@components/templates/articleDetail/WriterMatchTemplate';
import WriterNoMatch from '@components/templates/articleDetail/WriterNoMatchTemplate';
import PickerMatch from '@components/templates/articleDetail/PickerMatchTemplate';
import PickerNoMatch from '@components/templates/articleDetail/PickerNoMatchTemplate.jsx';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getArticleDetail } from '@/apis/articleDetail.js';

const ArticleDetailPage = () => {
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
    isMatch: false,
    same: false,
  };

  // const { id } = useParams();
  // const { data } = useQuery([`article/${id}`], () => getArticleDetail(id));
  // const article = data?.data.response;
  const article = sample;

  /* eslint no-else-return: "error" */
  const showDetailPage = (article) => {
    // 작성자이고 매칭됐을 때
    if (article.same && article.isMatch) {
      return <WriterMatch response={article} />;
      // 작성자이고 매칭 안됐을 때
    } else if (article.same && !article.isMatch) {
      return <WriterNoMatch response={article} />;
      // 피커이고 매칭 됐을 때
    } else if (!article.same && article.isMatch) {
      return <PickerMatch response={article} />;
    }
    // 피커이고 매칭 안됐을 때
    return <PickerNoMatch response={article} />;
  };

  return (
    <div className="page--layout">
      <div>{showDetailPage(article)}</div>
    </div>
  );
};

export default ArticleDetailPage;
