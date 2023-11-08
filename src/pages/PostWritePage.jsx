import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import OtherNav from '../components/atoms/nav/OtherNav';
import BtnNavigate from '../components/molecules/BtnNavigate';
import OrderInfo from '../components/templates/postWrite/OrderInfoTemplate';
import OrderRequest from '../components/templates/postWrite/OrderRequestTemplate';
import OrderDeadLine from '../components/templates/postWrite/OrderDeadLineTemplate';
import CircleNavigate from '../components/organisms/CircleNavigate';
import { STORE, BEVERAGE } from '../constant/postWrite/orderInfo';
import { DESTINATION } from '../constant/postWrite/orderRequest';
import { HOUR, MINUTE } from '../constant/postWrite/orderDeadLine';
import { registerMessage } from '../utils/alert';
import dateAndTime from '../utils/dateAndTime';
import writePost from '../apis/postWrite';

const PostWritePage = () => {
  const navigate = useNavigate();
  const [focus, setFocus] = useState(1);
  const methods = useForm();
  const { handleSubmit } = methods;

  const inputValue = methods.watch({
    control: methods.control,
    name: [STORE, `${BEVERAGE}[0].value`, DESTINATION, HOUR, MINUTE],
  });

  const { mutate } = useMutation({
    mutationFn: writePost,
  });

  // msw
  const onSubmit = (data) => {
    const request = { ...data };
    request.finishedAt = dateAndTime(data);

    // msw
    fetch('/articles/write', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));

    // react-query
    mutate(data, {
      onError: (error) => {
        console.error(error);
      },
    });
  };

  const handleAlert = (data) => {
    if (focus === 3 && inputValue.hour && inputValue.minute) {
      Swal.fire(registerMessage).then((result) => {
        if (result.isConfirmed) {
          onSubmit(data);
        }
      });
    }
  };

  const handlePrev = () => {
    if (focus > 1) {
      setFocus((prev) => prev - 1);
    } else {
      navigate(-1);
    }
  };

  const handleNext = () => {
    if (focus === 1 && inputValue.store && inputValue.beverage[0].value) {
      setFocus((prev) => prev + 1);
    }
    if (focus === 2 && inputValue.destination) {
      setFocus((prev) => prev + 1);
    }
    if (focus === 3 && inputValue.hour && inputValue.minute) {
      handleAlert();
    }
  };

  // eslint-disable-next-line
  const currentPage = (function (page) {
    if (page === 1) {
      return <OrderInfo />;
    }
    if (page === 2) {
      return <OrderRequest />;
    }
    if (page === 3) {
      return <OrderDeadLine />;
    }
  })(focus);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleAlert)}>
        <div className="page--layout flex flex-col justify-between">
          <div className="flex flex-col justify-start">
            <OtherNav />
            <CircleNavigate navigate={focus} />
            <div className="p-[35px]">{currentPage}</div>
          </div>
          <div className="mb-8">
            <BtnNavigate handlePrev={handlePrev} handleNext={handleNext} />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default PostWritePage;
