import React from 'react'
import Image from 'next/image';
import Styles from './about.module.css';

function AboutContainer() {
  return (
    <div className={` ${Styles.aboutDiv} flex gap-8`}>
        <div className='flex flex-col gap-8 w-2/3'>
            <div className={`${Styles.aboutTit} font-bold text-3xl`}>About Us</div>
            <div className='text-lg font-extralight'> Giving wings to your dreams! </div>
            <div>With such a goal in mind, the team here at Study Aboad is here to assist you in your passion to study abroad and fulfill your edification. Although located at the southernmost tip of India, Kerala, we have established ourselves as a trusted overseas educational expert and a visa consultant provider since 2010. Our overseas bonds extend over the top educational institutions in International Education, particularly in countries such as the United Kingdom, Germany, Australia, France, and Canada.</div>
            <div className={`${Styles.readbtn}`}>Read more </div>
        </div>
        <div>
            <Image className={`${Styles.aboutImg}`} src="/assets/about.svg" alt='About' width={100} height={100}/>
        </div>
    </div>
  )
}

export default AboutContainer
