// eslint-disable-next-line
import { ErrorMessage } from '@hookform/error-message';

const ErrorMsg = ({ errors, name, as }) => {
  return <ErrorMessage className="text-red-600 text-sm" errors={errors} name={name} as={as} />;
};

export default ErrorMsg;
