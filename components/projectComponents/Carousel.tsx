import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface carouselProps {
  images: string[];
  imageDir: string;
}

export default function Carousel({ images, imageDir }: carouselProps) {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Lazy, Autoplay, Pagination, Navigation]}
      className="border-stone-600 my-2 bg-stone-800 border-2 w-full h-96"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <Image
            src={imageDir + img}
            alt={`${img}`}
            layout="fill"
            objectFit="contain"
            priority={idx == 0}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
