import styles from './NotFound.module.scss';

type Props = {
  name: string;
};

const NotFound = ({ name }: Props) => {
  return <div className={styles.notFound}>{`Нет информации о ${name}`}</div>;
};

export default NotFound;
