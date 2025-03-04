import { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/Common/SectionTitle';
import './featuredProduct.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import { BsCartPlus } from "react-icons/bs";
import { CiHeart } from 'react-icons/ci';
import { IoIosExpand } from 'react-icons/io';
import BuyNow from '../../../Components/Buttons/BuyNow';
import BrowseMore from '../../../Components/Buttons/BrowseMore';

const FeaturedProducts = () => {
    const [product, setProduct] = useState([])
    useEffect(() =>{
          axios.get('/Bed.json')
          .then(data => setProduct(data.data))
    }, [])

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
        {product.map(data => {
          const subtitle = (data?.sub_title)?.split(" ").slice(0, 5).join(" ") + " ..."          
          return(
              <SwiperSlide key={data?.sku}>
                <div className="flex product-img h-56 bg-gray-100 rounded-2xl my-6">
                  <div className="w-1/2 relative">
                    <div className="overlay-icon">
                      <div className='icon'>
                        <BsCartPlus />
                      </div>
                      <div className='icon'>
                        <IoIosExpand />
                      </div>
                      <div className='icon'>
                        <CiHeart />
                      </div>
                    </div>
                    <img src={data?.image?.[0]} alt={data.title} />
                  </div>
                  <div className="w-1/2 flex flex-col justify-between p-2">
                    <div>
                      <span>{data?.cat}</span>
                      <h2 className='text-xl'>{data?.title}</h2>
                      <p className='text-xs'>{subtitle}</p>
                    </div>
                    <div>
                      <h3 className='text-xl'>{data?.price}</h3>
                      <div className="">4.9</div>
                      <BuyNow link={'/'} />
                    </div>

                  </div>
                </div>
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