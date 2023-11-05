import Button from '../atoms/Button';
import OtherNav from '../atoms/OtherNav';
import Info from '../organisms/Info';
import Location from '../organisms/Location';

const PickerMatch = ({ response }) => {
  return (
    <>
      {/* 파란색 부분 */}
      <div className="bg-sky-blue h-60 rounded-b-3xl">
        <OtherNav iconColor="#fff" bgColor="#000" />
        <div className="px-5">
          <div className="mt-1 text-white text-xl">내가 픽업할 공고입니다.</div>
          <Location response={response} />
        </div>
      </div>
      {/* 하얀색 부분 */}
      <Info response={response} />
      <div className="flex justify-center">
        <Button bgColor="bg-zinc-300" disabled>
          이미 매칭된 공고
        </Button>
      </div>
    </>
  );
};

export default PickerMatch;
