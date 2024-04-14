import React from 'react'
import Header from '../../components/home/components/Header'
import Footer from '../../components/home/components/Footer'
import UniversityCard from './components/UniversityCard'

function UniversityPage() {
  return (
    <div>
      <Header/>
        <div className='flex items-center justify-center text-5xl m-auto w-2/4 text-center'>800+ Global Universities to choose from</div>
        <div className='flex items-center justify-center text-sm w-1/2 px-4 mt-3 text-center m-auto'>Choose a university that fuels your passion & purpose and that quenches your academic & career pursuits.</div>
        <UniversityCard/>
      <Footer/>
    </div>
  )
}

export default UniversityPage
