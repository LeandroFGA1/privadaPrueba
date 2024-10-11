import React from 'react'
import Home from '../pages/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
    return (
        <>
            <header className='' >
                <Header/>
            </header>
            <main className='pt-[80px]   '>
                <Home/>
                
            </main>
            <footer className=' h-[200px] w-full bg-yellow-600'>  
                <Footer/>
            </footer>
        </>
    )
}

export default MainLayout