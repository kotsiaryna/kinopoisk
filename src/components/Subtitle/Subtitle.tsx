import styles from './Subtitle.module.scss';

type Props = {
  text: string;
};

const Subtitle = ({ text }: Props) => {
  return <h3 className={styles.h3}>{text}</h3>;
};

export default Subtitle;
