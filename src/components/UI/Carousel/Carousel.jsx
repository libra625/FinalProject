import {data} from './data.js';
import Slider from "react-slick";
import './Carousel.css';


const Carousel = () => {
    const settings = {
        infinite: true,
        speed: 250,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,     //Need
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", marginRight: "38px", zIndex: 999 }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", marginLeft: "38px", zIndex: 999}}
                onClick={onClick}
            />
        );
    }


    return (
        <section style={{backgroundColor: 'rgba(0,0,0,0.06)', height: '550px', display: 'flex', alignItems: 'center'}}>
            <div style={{
                width: '1200px',
                margin: '0 auto',
                padding: '0 24px',

            }}>
                <Slider {...settings}>
                    {data.map((banner, index) => (
                        <div key={index} style={'slick-slide-custom'}>
                            <div>
                                <a href={'#'}>
                                    <img src={banner.img} alt={banner.title}
                                         className='banner-image'/>
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Carousel;
