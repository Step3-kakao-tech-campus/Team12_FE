import Button from '@components/atoms/button/Button';
import OtherNav from '@components/atoms/nav/OtherNav';
import Info from '@components/atoms/Info';
import Location from '@components/organisms/Location';

const PickerMatchTemplate = ({ response }) => {
  return (
    <>
      {/* 파란색 부분 */}
      <div className="bg-sky-blue h-60 rounded-b-3xl">
        <OtherNav iconColor="#fff" bgColor="#000" />
        <div className="px-[25px]">
          <div className="text-white text-xl">매칭 완료된 공고입니다.</div>
          <Location response={response} />
        </div>
      </div>
      {/* 하얀색 부분 */}
      <Info response={response} />
      <div className="flex px-8">
        <Button width="w-[100%]" height="h-9" bgColor="bg-[#949494]" bdRadius="rounded-md" disabled>
          이미 매칭된 공고
        </Button>
      </div>
    </>
  );
};

export default PickerMatchTemplate;
