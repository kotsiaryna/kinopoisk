import spinner from '../../assets/gif/spinner.gif';
import styles from './Loader.module.scss';

const Loader = () => {
  return <img src={spinner} alt="loading" className={styles.loader} />;
};

export default Loader;
