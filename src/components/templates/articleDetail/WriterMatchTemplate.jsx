import OtherNav from '@components/atoms/nav/OtherNav';
import Info from '@components/atoms/Info';
import Location from '@components/organisms/Location';
import WriterMatch from '@components/organisms/WriterMatch';
import Time from '@/utils/time';
import { PICKUP } from '@/constant/article';

const WriterMatchTemplate = ({ response }) => {
  return (
    <>
      {/* 파란색 부분 */}
      <div className="bg-sky-blue h-64 rounded-b-3xl">
        <OtherNav iconColor="#fff" bgColor="#000" />
        <div className="px-[25px] mt-1 text-white text-xl">
          <p className="block">{PICKUP.LABEL}</p>
          <p>{PICKUP.SUB_LABEL}</p>
          <Location response={response} />
        </div>
      </div>
      {/* 하얀색 부분 */}
      <Info response={response} />
      <article className="my-8 px-8">
        <div className="text-xl font-bold text-blue pb-2">{PICKUP.INFO}</div>
        <WriterMatch label={PICKUP.ARRIVAL_TIME}>{Time(response.arrivalTime)}</WriterMatch>
        <WriterMatch className="my-1" label={PICKUP.ACCOUNT}>
          {response.pickerBank} {response.pickerAccount}
        </WriterMatch>
        <WriterMatch className="my-1" label={PICKUP.PHONE_NUMBER}>
          {response.pickerPhoneNumber}
        </WriterMatch>
      </article>
    </>
  );
};

export default WriterMatchTemplate;
