import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, useWatch } from 'react-hook-form';
import OtherNav from '../components/atoms/OtherNav';
import BtnNavigate from '../components/molecules/BtnNavigate';
import OrderInfo from '../components/templates/OrderInfo';
import OrderRequest from '../components/templates/OrderRequest';
import OrderDeadLine from '../components/templates/OrderDeadLine';
import CircleNavigate from '../components/organisms/CircleNavigate';

const PostWritePage = () => {
  const navigate = useNavigate();
  const [focus, setFocus] = useState(1);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tip: 1000,
    },
  });
  let currentPage;

  const orderInfoValue = useWatch({
    control,
    name: ['store', 'beverage'],
  });

  const requestValue = useWatch({
    control,
    name: ['destination'],
  });

  const handlePrev = () => {
    if (focus > 1) {
      setFocus((prev) => prev - 1);
    } else {
      navigate(-1);
    }
  };

  const handleNext = () => {
    if (focus === 1 && orderInfoValue[0] && orderInfoValue[1]) {
      setFocus((prev) => prev + 1);
    }
    if (focus === 2 && requestValue[0]) {
      setFocus((prev) => prev + 1);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  switch (focus) {
    case 1:
      currentPage = <OrderInfo register={register} storeError={!!errors.store} beverageError={!!errors.beverage} />;
      break;
    case 2:
      currentPage = <OrderRequest register={register} destinationError={!!errors.destination} />;
      break;
    case 3:
      currentPage = <OrderDeadLine register={register} deadLineError={!!errors.hour || !!errors.minute} />;
      break;
    default:
      currentPage = null;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
  );
};

export default PostWritePage;
