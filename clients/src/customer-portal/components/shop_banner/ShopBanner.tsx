import './ShopBanner.css'

function ShopBanner() {
    return (
        <section id="shop_banner">
            <div className="shop_banner__heading">
                <h1>Janakalyan Ayurved Paharmacy</h1>
                <div className="shop_banner__img">
                    <img src='../../images/home-image.jpg' className="shop_banner__home_image" alt="home image" />
                    <img src='../../images/yoga_namaste.jpg' className="shop_banner__yoga_namste_image" alt="yoga namaste image" />
                </div>
                <h3>Genuine Ayurveda Store with 25 years of experience</h3>
            </div>
        </section>
    )
}

export default ShopBanner
