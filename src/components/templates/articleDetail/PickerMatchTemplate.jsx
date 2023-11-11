/* eslint-disable */
import { useState } from 'react';
import Swal from 'sweetalert2';
import Button from '@components/atoms/button/Button';
import OtherNav from '@components/atoms/nav/OtherNav';
import PickUpInfo from '@components/organisms/PickUpInfo';
import LocationInfo from '@components/organisms/LocationInfo';
import '@/styles/DeleteSpin.css';
import PickerTime from '@components/organisms/PickerTime';
import { pickupConfirmMessage } from '@/utils/alert';
import { MATCHING_STATE } from '@/constant/article';

const PickerMatchTemplate = ({ response, isMatch, beverages }) => {
  const [page, setPage] = useState(0);
  const { shopName, destination, finishedAt, tip, request, pickerBank, pickerAccount, arrivalTime, pickerPhoneNumber } =
    response;

  const pickUpBtnModal = () => {
    Swal.fire(pickupConfirmMessage).then((result) => {
      if (result.isConfirmed) {
        setPage(1);
      }
    });
  };

  return (
    <>
      <div className="bg-sky-blue h-60 rounded-b-3xl">
        <OtherNav iconColor="#fff" bgColor="#000" />
        <div className="px-[25px]">
          <div className="text-white text-xl">
            {isMatch ? MATCHING_STATE.COMPLETED_MATCHING : MATCHING_STATE.WAITING_MATCHING}
          </div>
          <LocationInfo shopName={shopName} destination={destination} />
        </div>
      </div>

      {page === 0 ? (
        <>
          <PickUpInfo
            isMatch={isMatch}
            finishedAt={finishedAt}
            beverages={beverages}
            tip={tip}
            request={request}
            pickerBank={pickerBank}
            pickerAccount={pickerAccount}
            arrivalTime={arrivalTime}
            pickerPhoneNumber={pickerPhoneNumber}
          />
          <div className="flex px-8">
            {isMatch ? (
              <Button width="w-[100%]" height="h-9" bgColor="bg-[#949494]" bdRadius="rounded-md" disabled>
                {MATCHING_STATE.ALREADY_MATCHING}
              </Button>
            ) : (
              <Button onClick={pickUpBtnModal} width="w-[100%]" height="h-9" bdRadius="rounded-md" bgColor="bg-blue">
                {MATCHING_STATE.PICKUP_BEVERAGE}
              </Button>
            )}
          </div>
        </>
      ) : (
        <PickerTime />
      )}
    </>
  );
};

export default PickerMatchTemplate;
