import { ErrorResponse, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import styles from './ErrorElement.module.scss';

function ErrorElement() {
  const error = useRouteError() as ErrorResponse;
  const { data, statusText } = error;
  return (
    <div className={styles.wrapper}>
      {isRouteErrorResponse(error) ? (
        <ErrorMessage message={`${statusText}. ${data}`} />
      ) : (
        <p>Что-то пошло не так...</p>
      )}
    </div>
  );
}
export default ErrorElement;
