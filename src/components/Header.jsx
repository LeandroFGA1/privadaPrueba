import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
    const [navbarSize, setNavbarSize] = useState('h-[100px]');
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const scrollThreshold = window.innerHeight / 2;
        const currentScrollY = window.scrollY;

        if(window.scrollY > 20){
            setNavbarSize("h-20")
        }else{
            setNavbarSize("h-[100px]")
        }

        if (currentScrollY > scrollThreshold) {
            setNavbarSize('h-0 opacity-0'); 
        }

        if (currentScrollY < lastScrollY && currentScrollY > 20) {
            setNavbarSize('duration-500 h-20 opacity-100');
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className={`bg-main/95  border-black/20 
        shadow-lg border-b fixed z-50 w-full transition-all duration-300 ${navbarSize}`}>
            <div className='bg-gray-300/90 w-full h-full'>
            <Navbar/>
            </div>
            
        </div>
    );
};

export default Header;
