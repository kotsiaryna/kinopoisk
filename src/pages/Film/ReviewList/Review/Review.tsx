import { Review } from '../../../../types';
import styles from './Review.module.scss';

const ReviewItem = ({ title, type, review, date, author }: Review) => {
  return (
    <div className={styles.review} style={{ borderColor: type === 'Негативный' ? 'red' : 'green' }}>
      <h5 className={styles.heading}>{title}</h5>
      <p className={styles.text} dangerouslySetInnerHTML={{ __html: review }} />
      <p className={styles.meta}>
        <span>{author}</span>
        <span>{new Date(date).toLocaleString()}</span>
      </p>
    </div>
  );
};

export default ReviewItem;
