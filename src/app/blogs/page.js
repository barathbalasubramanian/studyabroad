import React from 'react'
import Header from '../../components/home/components/Header'
import Footer from '../../components/home/components/Footer'
import Styles from './components/blogpage.module.css'
import BlogContainer from './components/BlogContainer'

const BlogsPage = () => {

    const blogData = [
        {
          imageUrl: '/assets/blogs1.svg',
          title: 'Genuine Student Requirement (GS Requirement) to study in Australia',
          description: 'Know everything about the recent change to study in Australia',
          author: 'Rohit Sharma',
          position: 'Head, Destination Training and Client Development (Australia)'
        },
        {
          imageUrl: '/assets/blogs5.svg',
          title: 'Genuine Student Requirement (GS Requirement) to study in Australia',
          description: 'Know everything about the recent change to study in Australia',
          author: 'Rohit Sharma',
          position: 'Head, Destination Training and Client Development (Australia)'
        },
        {
          imageUrl: '/assets/blogs2.svg',
          title: 'Canada student visas now require an attestation letter',
          description: 'Confused about what PAL is? Here’s help!',
          author: 'Mukta Sanjeev',
          position: 'Director Canada Destination (South Asia)'
        },
        {
          imageUrl: '/assets/blogs3.svg',
          title: 'Study Math-free courses in Canada',
          description: 'If Math isn’t your favourite subject, then read on',
          author: 'Akshita',
          position: 'Certified senior counsellor'
        },
        {
          imageUrl: '/assets/blogs4.svg',
          title: 'Why have my IELTS results been delayed?',
          description: "Why have my IELTS results been delayed?",
          author: 'Rohit Sharma',
          position: 'Head, Destination Training and Client Development (Australia) '
        },
    
    ];

  return (
    <div className={Styles.blogspage}>
        <Header/>
        <div className={Styles.blogsContainer}>
            <div className='flex items-center justify-center text-3xl m-auto font-bold'>Study Abroad Blogs</div>
            <div className='flex items-center justify-center text-sm w-1/2 px-4 mt-3 text-center m-auto'>One place where you can get all information you need when planning to study abroad! Read these informative blogs that cover your entire journey of international education – from planning to studying at your desired institution.</div>
            <BlogContainer/>
        </div>
        <Footer/>
    </div>
  )
}

export default BlogsPage