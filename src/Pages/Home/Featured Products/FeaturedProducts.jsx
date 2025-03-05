import SectionTitle from '../../../Components/Common/SectionTitle';
import './featuredProduct.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { BsCartPlus } from "react-icons/bs";
import { CiHeart } from 'react-icons/ci';
import { IoIosExpand } from 'react-icons/io';
import BuyNow from '../../../Components/Buttons/BuyNow';
import BrowseMore from '../../../Components/Buttons/BrowseMore';
import { GiRoundStar } from 'react-icons/gi';
import useProducts from '../../../Hooks/Products/useProducts';
import SlideCard from '../../../Components/Products/SlideCard';

const FeaturedProducts = () => {

  const {featuredData} = useProducts('true')

    return (
      <>
        <SectionTitle title='Featured Products' subtitle= 'Elevate Your Collection with Our Top Choices'/>
        <div className='py-8'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {featuredData.map(data => {
          return(
              <SwiperSlide className='pb-8' key={data?._id}>
                <SlideCard data={data} />
              </SwiperSlide>
          )
        })}
        <SwiperSlide>
          <div className="my-6">
            <BrowseMore link='/products' className={'h-56'}/>
          </div>
        </SwiperSlide>     
      </Swiper>
      </div>
      </>
    );
};

export default FeaturedProducts;