import React from 'react'
import Header from '../home/components/Header'
import Footer from '../home/components/Footer'
import Styles from './components/accomodation.module.css';
import AccomodationCard from './components/AccomodationCard';

const HousingPage = () => {
  return (
    <div>
      <Header/>
      <div>
            <div className='flex items-center justify-center text-5xl m-auto w-2/4 text-center'>Find Student Accommodation,That Best Suits You</div>
            <div className='flex items-center justify-center text-sm w-1/2 px-4 mt-3 text-center m-auto'>On a Budget or something with a view? We've got you!</div>
            {/* SearchDIv */}
            <div className={`flex items-center justify-between px-8 py-4 ${Styles.searchDiv}`}>
                <div className='w-full'><input type="text" className={Styles.SearchInput}/></div>
                <div className='flex items-center justify-center gap-4 '>
                    <div className={`${Styles.Searchdate}`}>Move in Apr , 2024</div>
                    <div className={Styles.searchBtn}>Search</div>
                </div>
            </div>
            {/* ListView Options */}
            <div className={`flex items-center justify-between px-10 m-auto`}>
                <div className='text-lg font-medium'>5 Student Accommodations in Stamford University</div>
                <div className={`flex ${Styles.viewbtns}`}> 
                    <div className={`${Styles.viewsbtn} ${Styles.maptbnt}`}>Map View</div>
                    <div className={`${Styles.viewsbtn} ${Styles.listbtn}`}>List View</div>
                </div>
            </div>

            {/* Filters ans Availables */}
            <div>
                <AccomodationCard/>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default HousingPage
