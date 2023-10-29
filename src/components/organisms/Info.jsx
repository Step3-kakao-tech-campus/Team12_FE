/* eslint-disable */
const Info = () => {
  return (
    <div className="px-8 pt-6">
      {/* 주문정보 */}
      <div>
        <div className="text-xl font-bold text-blue py-2">주문 정보</div>
        <div>아이스 아메리카노 1잔</div>
      </div>
      {/* 요청사항 */}
      <div className="my-12">
        <div className="text-xl font-bold text-blue py-2">요청 사항</div>
        <div>
          <div className="flex">
            <div className="text-zinc-400">픽업팁</div>
            <div className="ml-8">3000원</div>
          </div>
          <div className="flex">
            <div className="text-zinc-400">요청사항</div>
            <div className="ml-5">1층 도착하시면 연락주세요!</div>
          </div>
        </div>
      </div>
      {/* 마감기한 */}
      <div className="my-12">
        <div className="text-xl font-bold text-blue py-2">마감기한</div>
        <div>오늘 14시 10분까지</div>
      </div>
    </div>
  );
};

export default Info;
