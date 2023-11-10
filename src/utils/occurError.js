import { useNavigate } from 'react-router-dom';
import { ALERT_ERROR } from '@/constant/error';

const occurError = (error) => {
  const navigate = useNavigate();
  ALERT_ERROR(error);
  navigate('/errorPage');
};

export default occurError;
