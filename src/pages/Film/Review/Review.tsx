import { Review } from '../../../types';

const ReviewItem = ({ title, type, review, date, author }: Review) => {
  return (
    <div style={{ border: `1px solid ${type === 'Негативный' ? 'red' : 'green'}` }}>
      <h5>{title}</h5>
      <p>{review}</p>
      <p>{`Автор ${author}. Дата: ${new Date(date).toLocaleString()}`}</p>
    </div>
  );
};

export default ReviewItem;
