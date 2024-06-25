import { ComponentType, FC } from 'react';
import NotFound from '../pages/Film/NotFound/NotFound';

type WithHeadingProps = {
  heading: string;
};

type WithNotFoundProps = {
  notFound: boolean;
  name: string;
};

export function withHeading<P extends object>(Component: ComponentType<P>) {
  const ComponentWithHeading: FC<P & WithHeadingProps> = ({ heading, ...props }) => {
    return (
      <div>
        <h4>{heading}</h4>
        <Component {...(props as P)} />
      </div>
    );
  };
  return ComponentWithHeading;
}

export function withNotFound<P extends object>(Component: ComponentType<P>) {
  const ComponentWithNotFound: FC<P & WithNotFoundProps> = ({ notFound, name, ...props }) => {
    return <> {notFound ? <NotFound name={name} /> : <Component {...(props as P)} />}</>;
  };
  return ComponentWithNotFound;
}
