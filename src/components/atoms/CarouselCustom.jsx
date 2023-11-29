/* eslint-disable */
import { Carousel } from '@material-tailwind/react';
import carousel from '@/assets/images/carousel.png';
import carousel2 from '@/assets/images/carousel2.png';

const CarouselCustom = () => {
  return (
    <Carousel
      autoplay={true}
      autoplayDelay={3000}
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? 'w-8 bg-blue' : 'w-4 bg-zinc-100'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="w-[360px]">
        <img src={carousel} alt="image 1" className="h-full w-full object-cover" />
      </div>
      <div className="w-[360px]">
        <img src={carousel2} alt="image 2" className="h-full w-full object-cover" />
      </div>
    </Carousel>
  );
};

export default CarouselCustom;
