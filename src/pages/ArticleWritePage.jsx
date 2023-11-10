/* eslint-disable */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import OtherNav from '@components/atoms/nav/OtherNav';
import BtnNavigate from '@components/molecules/BtnNavigate';
import CircleNavigate from '@components/organisms/CircleNavigate';
import OrderInfoTemplate from '@components/templates/articleWrite/OrderInfoTemplate';
import OrderRequestTemplate from '@components/templates/articleWrite/OrderRequestTemplate';
import OrderDeadLineTemplate from '@components/templates/articleWrite/OrderDeadLineTemplate';
import { ITEM } from '@/constant/writeArticle';
import { registerMessage } from '@/utils/alert';
import dateAndTime from '@/utils/dateAndTime';
import writeArticle from '@/apis/articleWrite';
import alertError from '@/constant/alertError';

const ArticleWritePage = () => {
  const navigate = useNavigate();
  const [focus, setFocus] = useState(1);
  const methods = useForm();
  const { handleSubmit, trigger, getValues, getFieldState } = methods;

  const { mutate } = useMutation({
    mutationFn: writeArticle,
  });

  const onSubmit = (data) => {
    const request = { ...data };

    request.finishedAt = dateAndTime(data);
    request.beverages.unshift(request.beverage);
    request.tip = +request.tip;

    delete request.hour;
    delete request.minute;
    delete request.beverage;

    // msw
    // fetch('/articles/write', {
    //   method: 'POST',
    //   body: JSON.stringify(request),
    // })
    //   .then((response) => response.json())
    //   .then((result) => console.log(result));

    // react-query
    mutate(request, {
      onSuccess: () => {
        navigate('/article');
      },
      onError: (error) => {
        console.log(error);
        console.log(data);
        alert(alertError(error));
        console.error(error);
      },
    });
  };

  const handleAlert = (data) => {
    if (focus === 3) {
      Swal.fire(registerMessage).then((result) => {
        if (result.isConfirmed) {
          onSubmit(data);
        } else {
          setFocus(3);
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
    trigger();
    const formValues = getValues(Object.values(ITEM)).map((x) => !!x);
    const isTimeValid = getFieldState(ITEM.HOUR).error && getFieldState(ITEM.MINUTE).error;

    if (focus === 1 && formValues[0] && formValues[1]) {
      setFocus((prev) => prev + 1);
    }
    if (focus === 2 && formValues[2]) {
      setFocus((prev) => prev + 1);
    }
    if (focus === 3 && formValues[5] && formValues[6]) {
      isTimeValid && handleAlert();
    }
  };

  const currentPage = (function (page) {
    if (page === 1) {
      return <OrderInfoTemplate />;
    }
    if (page === 2) {
      return <OrderRequestTemplate />;
    }
    if (page === 3) {
      return <OrderDeadLineTemplate />;
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

export default ArticleWritePage;
