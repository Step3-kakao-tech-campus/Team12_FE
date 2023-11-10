import { useNavigate } from 'react-router-dom';
import { ALERT_ERROR } from '@/constant/error';

const navigate = useNavigate();

const occurError = (error) => {
  ALERT_ERROR(error);
  navigate('/errorPage');
};

export default occurError;
