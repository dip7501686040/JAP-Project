import React from 'react'
import Banner from '../../components/banner/Banner'
import BrandPromotion from '../../components/BrandPromotion/BrandPromotion'
import Footer from '../../components/Footer/Footer'
import Greetings from '../../components/Greetings/Greetings'
import Header from '../../components/Header/Header'
import Shop from '../../components/Shop/Shop'
import ShopBanner from '../../components/shop_banner/ShopBanner'
import TrendingOffer from '../../components/TrendingOffer/TrendingOffer'
import './home-screen.css'

function HomeScreen() {
    return (
                <div>
                    <div className="App">
            {/* header */}
            <Header />
            {/* shop banner */}
            <ShopBanner />

            {/* banner */}
            <Banner />
            {/* brand promotion */}
            <BrandPromotion />
            {/* trending offer */}
            <TrendingOffer />
            {/* shop */}
            <Shop />
            {/* greetings */}
            <Greetings />
            {/* footer */}
            <Footer />
            </div>
        </div>
    )
}

export default HomeScreen