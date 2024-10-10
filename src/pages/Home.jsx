import React from 'react'
import CarouselBanner from '../components/Carousel'
import Info from '../components/Info'
import CardCategory from '../components/CardCategory'
import CardCategoryGenerator from '../components/CardCategoryGenerator'
import UnderlineTabs from '../components/UnderlineTabs'
import OtherBanner from '../components/OtherBanner'
import VideoPrueba from '../components/VideoPrueba'

const Home = () => {
    return (
        <>
            <div className=' h-[calc(100vh-100px)]'>
                <CarouselBanner/>
            </div>
            <div className='h-[75vh] sm:h-[60vh]  flex items-center justify-center '>
                <Info/>
            </div>
            <div className='flex items-center justify-center flex-col '>
                <h2 className=' font-extrabold text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <CardCategoryGenerator/>
            </div>
            <div className=''>
                <UnderlineTabs/>
                <OtherBanner/>
                <VideoPrueba/>
            </div>
            
        </>
        
    )
}

export default Home