import './Banner.css'
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
    return (
        <Carousel className="banner">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='../../images/banner_himalaya1.jpeg'
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='../../images/banner_himalaya2.jpeg'
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='../../images/banner_dabur1.jpeg'
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner
