import { useEffect, useState } from 'react';
import { reviewByFilmId } from '../../../services/api';
import ReviewItem from './Review/Review';
import { Pages } from '../Pages/Pages';
import { ResponseData, Review } from '../../../types';
import NotFound from '../NotFound/NotFound';
import { withHeading } from '../../../components/HOC';
import styles from './ReviewList.module.scss';

type Props = {
  filmID: number;
};

function ReviewList({ filmID }: Props) {
  const width = window.innerWidth;
  const limit = width > 1200 ? 5 : width > 800 ? 3 : 1;
  const [reviews, setReviews] = useState<ResponseData<Review[]> | null>(null);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);

  useEffect(() => {
    reviewByFilmId(filmID, page, limit)
      .then((reviews) => {
        if (reviews) setReviews(reviews);
        setError(false);
      })
      .catch(() => setError(true));
  }, [page, filmID]);

  const onPageClick = (n: number) => {
    setPage(n);
    reviewByFilmId(filmID, n, limit)
      .then((reviews) => {
        console.log(reviews);
        if (reviews) setReviews(reviews);
        setError(false);
      })
      .catch(() => setError(true));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {error && <p>Ошибка загрузки отзывов</p>}
        {reviews && reviews.docs ? (
          reviews.docs.map((review, i) => <ReviewItem key={i} {...review} />)
        ) : (
          <NotFound name="отзывы" />
        )}
      </div>
      {reviews && reviews.total > limit && (
        <Pages n={limit} length={reviews?.total || limit} onButtonClick={onPageClick} />
      )}
    </div>
  );
}

const ReviewListWithHeading = withHeading(ReviewList);

export default ReviewListWithHeading;
