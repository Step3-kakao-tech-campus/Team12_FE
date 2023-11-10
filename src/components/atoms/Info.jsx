import time from '@/utils/time';
import { ARTICLE } from '@/constant/article';

// 메뉴들 나열하는 거
const showMenu = (item) => {
  return item.map(({ name }) => {
    return <div key={name}>{name}</div>;
  });
};

/* eslint-disable */
const Info = ({ response }) => {
  // 마감시간
  const finishTime = new Date(response.finishedAt);
  return (
    <div className="px-8 pt-6">
      {/* 주문정보 */}
      <div>
        <div className="text-xl font-bold text-blue py-1">{ARTICLE.INFO}</div>
        <div>{showMenu(response.beverage)}</div>
      </div>
      {/* 요청사항 */}
      <div className="my-12">
        <div className="text-xl font-bold text-blue py-1">{ARTICLE.REQUEST}</div>
        <div>
          <div className="flex">
            <div className="text-zinc-400">{ARTICLE.TIP}</div>
            <div className="ml-8">
              {response.tip}
              {ARTICLE.WON}
            </div>
          </div>
          <div className="flex">
            <div className="text-zinc-400">{ARTICLE.REQUEST}</div>
            <div className="ml-5">{response.request}</div>
          </div>
        </div>
      </div>
      {/* 마감기한 */}
      <div className="my-12">
        <div className="text-xl font-bold text-blue py-1">{ARTICLE.DEADLINE}</div>
        <div>{time(finishTime)}</div>
      </div>
    </div>
  );
};

export default Info;
