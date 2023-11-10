import { ALERT_ERROR } from '@/constant/error';

const occurError = (error) => {
  ALERT_ERROR(error);
  window.location.href = '/errorPage';
};

export default occurError;
