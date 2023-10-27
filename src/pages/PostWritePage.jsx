import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, useWatch } from 'react-hook-form';
import Swal from 'sweetalert2';
import OtherNav from '../components/atoms/OtherNav';
import BtnNavigate from '../components/molecules/BtnNavigate';
import OrderInfo from '../components/templates/OrderInfo';
import OrderRequest from '../components/templates/OrderRequest';
import OrderDeadLine from '../components/templates/OrderDeadLine';
import CircleNavigate from '../components/organisms/CircleNavigate';
import { registerMessage } from '../utils/alert';

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

  const handleAlert = () => {
    Swal.fire(registerMessage);
  };

  const handleNext = () => {
    if (focus === 1 && orderInfoValue[0] && orderInfoValue[1]) {
      setFocus((prev) => prev + 1);
    }
    if (focus === 2 && requestValue[0]) {
      setFocus((prev) => prev + 1);
    }
    if (focus === 3) handleAlert();
  };

  const onSubmit = (data) => {
    console.log(data); // api 연결 후 수정 예정
  };

  const currentPage = (function (page) {
    if (page === 1) {
      return <OrderInfo register={register} storeError={!!errors.store} beverageError={!!errors.beverage} />;
    }
    if (page === 2) {
      return <OrderRequest register={register} destinationError={!!errors.destination} />;
    }
    if (page === 3) {
      return <OrderDeadLine register={register} deadLineError={!!errors.hour || !!errors.minute} />;
    }
  })(focus);

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
