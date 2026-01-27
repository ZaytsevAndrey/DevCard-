import { useState, useEffect } from 'react';

const useDeviceType = () => {
    const [isMobile, setIsMobile] = useState(false);

    const checkDevice = () => {
        if (typeof window === 'undefined') return false;
        
        const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera || '';
        
        // Перевірка User Agent для визначення мобільного пристрою через тернарний оператор
        const isMobileUA = userAgent 
            ? /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())
            : false;
        
        // Fallback: перевірка розміру екрану (якщо User Agent не визначив, але екран маленький)
        const isSmallScreen = window.innerWidth <= 768;
        
        // Мобільний пристрій = User Agent мобільний АБО маленький екран
        return isMobileUA || isSmallScreen;
    };

    useEffect(() => {
        setIsMobile(checkDevice());
        
        const handleResize = () => {
            setIsMobile(checkDevice());
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};

export default useDeviceType;
