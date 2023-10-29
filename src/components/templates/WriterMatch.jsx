import OtherNav from '../atoms/OtherNav';
import Info from '../organisms/Info';
import Location from '../organisms/Location';

const WriterMatch = () => {
  return (
    <>
      {/* 파란색 부분 */}
      <div className="bg-sky-blue h-60 rounded-b-3xl">
        <OtherNav iconColor="#fff" bgColor="#000" />
        <div className="px-5">
          <div className="mt-1 text-white text-xl">매칭을 기다리고 있어요.</div>
          <Location />
        </div>
      </div>
      {/* 하얀색 부분 */}
      <Info />
      <div className="my-8 px-8">
        <div className="text-xl font-bold text-blue py-2">피커정보</div>
        <div className="flex">
          <div className="text-zinc-400">도착시간</div>
          <div className="ml-5">3000원</div>
        </div>
        <div className="flex my-1">
          <div className="text-zinc-400">계좌정보</div>
          <div className="ml-5">농협 01010101010101010101</div>
        </div>
        <div className="flex my-1">
          <div className="text-zinc-400">계좌정보</div>
          <div className="ml-5">010-1234-5678</div>
        </div>
      </div>
    </>
  );
};

export default WriterMatch;
