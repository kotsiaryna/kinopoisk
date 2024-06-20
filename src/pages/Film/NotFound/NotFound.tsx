type Props = {
  name: string;
};

const NotFound = ({ name }: Props) => {
  return <div>{`Нет информации о ${name}`}</div>;
};

export default NotFound;
