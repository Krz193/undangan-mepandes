// import { CalendarClock, MapPin } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import Mandala from '../../../assets/images/mandala.png';
import TopMandala from '../../../assets/images/mandala-atas.png';
import { ArrowDown } from 'lucide-react';

function Index() {
    const section2Ref = useRef<HTMLElement>(null);
    const [isSection2Visible, setIsSection2Visible] = useState(false);
    const handleScroll = () => {
        section2Ref.current?.scrollIntoView({behavior: 'smooth'})
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsSection2Visible(entry.isIntersecting);
            },
            {
                threshold: 0.5
            }
        );

        if (section2Ref.current) {
            observer.observe(section2Ref.current);
        }

        // Cleanup observer saat komponen di-unmount
        return () => {
            if (section2Ref.current) {
                observer.unobserve(section2Ref.current);
            }
        };
    }, []);
    return (
        <div className='w-full h-screen bg-background overflow-y-scroll scrollbar-hidden scroll-smooth snap-y snap-mandatory relative overflow-x-hidden'>
            <section className='flex flex-col gap-8 px-8 pb-8 pt-16 h-screen snap-start'>
                <img src={TopMandala} alt="" className=''/>
                <header className='text-center flex flex-col items-center'>
                    <h1 className='h1 font-secondary text-2xl tracking-[.35em] capitalize text-light-gold'>undangan</h1>
                    <p className='font-cursive text-9xl capitalize text-gold'>mepandes</p>
                </header>
                <div 
                    onClick={handleScroll} 
                    className='absolute z-10 cursor-pointer flex items-center justify-center bottom-[20%] left-1/2 -translate-x-1/2'
                >
                    {/* Elemen untuk animasi ping (di belakang) */}
                    {/* <span className="absolute inline-flex h-full w-16 rounded-full bg-gold/75 animate-ping"></span> */}
                    {/* Tombol asli yang terlihat (di depan) */}
                    <span className="relative inline-flex rounded-full h-16 w-16 bg-background items-center justify-center border border-gold animate-bounce">
                        <ArrowDown className='text-gold text-xl'/>
                    </span>
                </div>
            </section>
            <section ref={section2Ref} className='h-screen snap-start relative'>
                <div className='absolute top-0 inset-x-0 flex justify-center'>
                    <img
                        src={Mandala}
                        alt=""
                        className={`
                        ${isSection2Visible ? 'scale-100' : 'scale-225'}
                        translate-y-[-50%]
                        animate-spin-slow
                        transition-transform duration-700 ease-in-out`}
                    />
                </div>
                <div>
                    
                </div>
            </section>
        </div>
    )
}

export default Index