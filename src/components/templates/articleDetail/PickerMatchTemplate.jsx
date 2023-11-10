import Button from '@components/atoms/button/Button';
import OtherNav from '@components/atoms/nav/OtherNav';
import Info from '@components/atoms/Info';
import Location from '@components/organisms/Location';
import { MATCHING_STATE } from '@/constant/article';

const PickerMatchTemplate = ({ response }) => {
  return (
    <>
      {/* 파란색 부분 */}
      <div className="bg-sky-blue h-60 rounded-b-3xl">
        <OtherNav iconColor="#fff" bgColor="#000" />
        <div className="px-[25px]">
          <div className="text-white text-xl">{MATCHING_STATE.COMPLETED_MATCHING}</div>
          <Location response={response} />
        </div>
      </div>
      {/* 하얀색 부분 */}
      <Info response={response} />
      <div className="flex px-8">
        <Button width="w-[100%]" height="h-9" bgColor="bg-[#949494]" bdRadius="rounded-md" disabled>
          {MATCHING_STATE.ALREADY_MATCHING}
        </Button>
      </div>
    </>
  );
};

export default PickerMatchTemplate;
