import React from 'react';
import Card from '../atoms/Card';

const Cards = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <Card
          orderLocation={article.shopName}
          pickupLocation={article.destination}
          pickupTip={article.tip}
          deadline={article.finishedAt}
          match={article.match}
          to={`/articles/${article.boardId}`}
        />
      ))}
    </div>
  );
};

export default Cards;
