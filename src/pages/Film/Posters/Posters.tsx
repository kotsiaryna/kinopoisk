import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { postersByFilmId } from '../../../services/api';
import { Poster } from '../../../types';

type Props = {
  filmId: number;
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

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
    <>
      {posters && (
        <Carousel
          swipeable={false}
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
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {posters.map((poster, i) => (
            <div key={i}>
              <img src={poster.previewUrl} width="auto" height="100px" />
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
}

export default Posters;
