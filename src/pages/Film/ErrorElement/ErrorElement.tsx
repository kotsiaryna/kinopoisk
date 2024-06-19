import { ErrorResponse, isRouteErrorResponse, useRouteError } from 'react-router-dom';

function ErrorElement() {
  const error = useRouteError() as ErrorResponse;
  const { data, statusText } = error;

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <div>{statusText}</div>
        <div>{data}</div>
      </>
    );
  } else {
    return <div>Oops</div>;
  }
}
export default ErrorElement;
