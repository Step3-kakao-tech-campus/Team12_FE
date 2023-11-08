import React from 'react';
import Card from '../atoms/Card';

const MyPageWritenPostCards = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <Card
          key={article.boardId}
          orderLocation={article.shopName}
          pickupLocation={article.destination}
          pickupTip={article.tip}
          deadline={article.finishedAt}
          match={article.match}
          to={`/mypage/writen-post/${article.boardId}`}
        />
      ))}
    </div>
  );
};

export default MyPageWritenPostCards;
