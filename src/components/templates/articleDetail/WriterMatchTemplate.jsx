import OtherNav from '@components/atoms/nav/OtherNav';
import PickUpInfo from '@components/organisms/PickUpInfo';
import LocationInfo from '@components/organisms/LocationInfo';
import { PICKUP } from '@/constant/article';

const WriterMatchTemplate = ({ response }) => {
  const {
    shopName,
    destination,
    finishedAt,
    beverages,
    tip,
    request,
    pickerBank,
    pickerAccount,
    arrivalTime,
    pickerPhoneNumber,
  } = response;

  return (
    <>
      <div className="bg-sky-blue h-64 rounded-b-3xl">
        <OtherNav iconColor="#fff" bgColor="#000" />

        <div className="px-[25px] mt-1 text-white text-xl">
          <p className="block">{PICKUP.LABEL}</p>
          <p>{PICKUP.SUB_LABEL}</p>
          <LocationInfo shopName={shopName} destination={destination} />
        </div>
      </div>

      <PickUpInfo
        isMatch="true"
        finishedAt={finishedAt}
        beverages={beverages}
        tip={tip}
        request={request}
        pickerBank={pickerBank}
        pickerAccount={pickerAccount}
        arrivalTime={arrivalTime}
        pickerPhoneNumber={pickerPhoneNumber}
      />
    </>
  );
};

export default WriterMatchTemplate;
