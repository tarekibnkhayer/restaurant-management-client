import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../shared/SectionTitle';


const Category = () => {
    return (
       <div>
        <SectionTitle heading={"order online"} subHeading='From 11:00am to 10:00pm'></SectionTitle>
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide><img src={slide1} alt="" />
        <h2 className='uppercase text-[32px] -mt-20 text-center text-white font-cinzel font-normal'>Salads</h2>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h2 className='uppercase text-[32px] -mt-20 text-center text-white font-cinzel font-normal'>pizzas</h2>
        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h2 className='uppercase text-[32px] -mt-20 text-center text-white font-cinzel font-normal'>Soups</h2>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <h2 className='uppercase text-[32px] -mt-20 text-center text-white font-cinzel font-normal'>Desserts</h2>
        </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" />
        <h2 className='uppercase text-[32px] -mt-20 text-center text-white font-cinzel font-normal'>Salads</h2>
        </SwiperSlide>
      </Swiper>
       </div>
    );
};

export default Category;