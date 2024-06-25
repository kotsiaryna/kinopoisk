import styles from './ErrorMessage.module.scss';

type Props = {
  message: string;
};

const ErrorMessage = ({ message }: Props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Ошибка загрузки</p>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
