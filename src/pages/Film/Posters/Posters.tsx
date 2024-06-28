import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { postersByFilmId } from '../../../services/api';
import { Poster } from '../../../types';
import { withHeading, withNotFound } from '../../../components/HOC';
import styles from './Posters.module.scss';

type Props = {
  filmId: number;
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  wideTablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};

const CarouselWithNotFound = withNotFound(Carousel);

function Posters({ filmId }: Props) {
  const [posters, setPosters] = useState<Poster[] | null>(null);

  useEffect(() => {
    postersByFilmId(filmId)
      .then((posters) => {
        console.log(posters);
        setPosters(posters);
      })
      .catch((er) => console.log(er));
  }, [filmId]);
  return (
    <div className={styles.wrapper}>
      <CarouselWithNotFound
        renderDotsOutside={true}
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={false}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
        notFound={!posters}
        name="постерах"
      >
        {posters &&
          posters.map((poster, i) => (
            <img key={i} src={poster.previewUrl} className={styles.poster} />
          ))}
      </CarouselWithNotFound>
    </div>
  );
}

const PostersWithHeading = withHeading(Posters);

export default PostersWithHeading;
