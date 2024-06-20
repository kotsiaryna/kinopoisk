import { useEffect, useState } from 'react';
import { reviewByFilmId } from '../../../services/api';
import { ReviewData } from '../../../types';
import ReviewItem from './Review';
import { Pages } from '../Pages/Pages';

type Props = {
  filmID: number;
};

function ReviewList({ filmID }: Props) {
  const limit = 5;
  const [reviews, setReviews] = useState<ReviewData | null>(null);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);

  useEffect(() => {
    reviewByFilmId(filmID, page)
      .then((reviews) => {
        if (reviews) setReviews(reviews);
        setError(false);
      })
      .catch(() => setError(true));
  }, [page]);

  const onPageClick = (n: number) => {
    setPage(n);
    reviewByFilmId(filmID, n)
      .then((reviews) => {
        console.log(reviews);
        if (reviews) setReviews(reviews);
        setError(false);
      })
      .catch(() => setError(true));
  };

  return (
    <>
      <div>
        {error && <p>Ошибка загрузки отзывов</p>}
        {reviews &&
          reviews.docs &&
          reviews.docs.map((review, i) => <ReviewItem key={i} {...review} />)}
      </div>
      {reviews && reviews.total > limit && (
        <Pages n={limit} length={reviews?.total || limit} onButtonClick={onPageClick} />
      )}
    </>
  );
}

export default ReviewList;
