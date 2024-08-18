import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'react-awesome-slider/dist/styles.css';
import 'swiper/css/pagination';
import './home.css';

import men_slide from '../../assets/img/men_slide.webp'
import shirts_slide from '../../assets/img/shirts_slide.webp'
import homeMen from '../../assets/img/homeMen.webp'
import homeWomen from '../../assets/img/homeWomen.webp'
import siteData from '../../data';
import CategoryProducts from '../../components/shop/category';
import ThemeProducts from '../../components/shop/theme';
import FeaturedProducts from '../../components/shop/products';
import TemplateProducts from '../../components/shop/template';

const Home = () => {
    return (
        <div className='pdTop_80'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={men_slide} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={shirts_slide} alt="" />
                </SwiperSlide>
            </Swiper>
            <div className='row justify-content-spaceBetween'>
                <div className='col-4_5'>
                    <img className='w-100 px-10 py-10' src={homeMen} alt="banner" />
                </div>
                <div className='col-4_5'>
                    <img className='w-100 px-10 py-10' src={homeWomen} alt="banner" />
                </div>
            </div>
            <div className='container shopDivCategory'>
                <div className='row'><h3>SHOP BY CATEGORY</h3></div>
                <div className='row menCategory justify-content-spaceEvenly'>
                    {
                        siteData.category.Men.map((item, index) => <CategoryProducts key={index} {...item} />)
                    }
                </div>
                <div className='row womenCategory justify-content-spaceEvenly'>
                    {
                        siteData.category.Women.map((item, index) => <CategoryProducts key={index} {...item} />)
                    }
                </div>
            </div>
            <div className='container'>
                <div className='row'><h3>SHOP BY THEME</h3></div>
                <div className='row justify-content-spaceEvenly'>
                    {
                        siteData.theme.map((item, index) => <ThemeProducts key={index} {...item} />)
                    }
                </div>
            </div>
            <div className='contanier'>
                <div className='row'>
                    {
                        siteData.template.map((item, index) => <TemplateProducts key={index}{...item} />)
                    }
                </div>
            </div>
            <div className='container'>
                <div className='row mx-10'>
                    <h3 className='featuredProH_3'>Featured Products</h3>
                </div>
                <Swiper
                    spaceBetween={40}
                    slidesPerView={5}
                    navigation={true}
                    modules={[Navigation]}
                >
                    {
                        siteData.products.map((item, index) => (
                            <SwiperSlide  key={index}>
                                <div className='shopFeatured'>
                                    <FeaturedProducts {...item} />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default Home;
