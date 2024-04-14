"use client"
import Image from  'next/image';
import React, { useState } from "react";
import Styles from './homethree.module.css';

function Blogs() {

    const [visibleIndex, setVisibleIndex] = useState(0);
    const [animationDirection, setAnimationDirection] = useState(null); 

    const handleNext = () => {
        console.log(visibleIndex);
        if (visibleIndex >= 0 && visibleIndex < blogsContent.length - 2) { 
            setVisibleIndex(prevIndex => prevIndex + 1);
            setAnimationDirection("slideLeft");
        }

    };
    
    const handlePrev = () => {
        console.log(visibleIndex);
        if ( visibleIndex  >  0 ) {
            setVisibleIndex(prevIndex => prevIndex - 1);
            setAnimationDirection("slideRight");
        }
    };

    const blogsContent = [
        {
            image: '/assets/blogimg1.svg',
            title: '10 essential Study Hacks for college',
            decs: 'Lorem ipsum dolor sit amet consectetur. Mauris arcu vulputate ipsum ac pretiumest laoreet porta sed. ',
            arrow: "/assets/arrow.svg"            
        },
        {
            image: '/assets/blogimg2.svg',
            title: '10 essential Study Hacks for college',
            decs: 'Lorem ipsum dolor sit amet consectetur. Mauris arcu vulputate ipsum ac pretiumest laoreet porta sed. ',
            arrow: "/assets/arrow.svg"            
        },
        {
            image: '/assets/blogimg3.svg',
            title: '10 essential Study Hacks for college',
            decs: 'Lorem ipsum dolor sit amet consectetur. Mauris arcu vulputate ipsum ac pretiumest laoreet porta sed. ',
            arrow: "/assets/arrow.svg"            
        },
        {
            image: '/assets/blogimg1.svg',
            title: '10 essential Study Hacks for college',
            decs: 'Lorem ipsum dolor sit amet consectetur. Mauris arcu vulputate ipsum ac pretiumest laoreet porta sed. ',
            arrow: "/assets/arrow.svg"            
        }
    ] 
    
    return (
        <>
            <div className={Styles.blog}>
                <div>
                    <div className='text-2xl font-bold'>Read Our Blog</div>
                    <div className='text-sm'>Lorem ipsum dolor sit amet consectetur.. </div>
                </div>
            <div className='flex flex-row gap-5'>
                <div className={`${Styles.lnd} ${visibleIndex  >  0 ? Styles.active : ""}`} onClick={handlePrev}><Image className={Styles.back} src="/assets/backarrow.svg" alt='Arrow' width={100} height={100}/></div>
                <div className={`${Styles.rnd} ${visibleIndex >= 0 && visibleIndex < blogsContent.length - 2 ? Styles.active : ""}`} onClick={handleNext}><Image className={Styles.front}  src="/assets/frontarrow.svg" alt='Arrow' width={100} height={100}/></div>
            </div>
            </div>
            <div className={Styles.blogsContainer}>
                {blogsContent.slice(visibleIndex, visibleIndex + 3).map((blog, index) => (
                    <div key={index} className={Styles.eachblog}>
                        <div><Image className={Styles.blogeachimg} src={blog.image} alt='Blog Image' width={100} height={100}/></div>
                        <div className={Styles.title}>{blog.title}</div>
                        <div className={Styles.decs}>{blog.decs}</div>
                        <div className={Styles.arrowimg}><Image className={Styles.blogarrimg} src={blog.arrow} alt='Arrow' width={100} height={100}/></div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Blogs;
