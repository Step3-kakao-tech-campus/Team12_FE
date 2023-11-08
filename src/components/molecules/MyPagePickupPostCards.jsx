import React from 'react';
import Card from '../atoms/Card';

const MyPagePickupPostCards = ({ articles }) => {
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
          to={`/mypage/pickup-post/${article.boardId}`}
        />
      ))}
    </div>
  );
};

export default MyPagePickupPostCards;
