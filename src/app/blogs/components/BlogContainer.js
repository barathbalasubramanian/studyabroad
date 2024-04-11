"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Styles from './blogpage.module.css';

const BlogContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3; // Set the maximum number of blogs per page

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
      imageUrl: '/assets/blogs1.svg',
      title: 'Why have my IELTS results been delayed?',
      description: "Why have my IELTS results been delayed?",
      author: 'Rohit Sharma',
      position: 'Head, Destination Training and Client Development (Australia) '
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

  ];

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='flex flex-col gap-10 px-40 my-10'>
      {currentBlogs.map((item, index) => (
        <div key={index} className={`${Styles.dropshaowdiv} flex flex-col gap-2 px-2`}>
          <div><Image className={Styles.blogsImage} src={item.imageUrl} alt='Blogs Image' width={100} height={100} /></div>
          <div className='text-2xl font-bold px-8'>{item.title}</div>
          <div className='text-sm font-normal px-8'>{item.description}</div>
          <div className='flex justify-around w-full my-10 px-8'>
            <div className='w-80 text-sm/[10px] leading-none'>
              <span className={`text-sm ${Styles.spanel}`}>{item.author}</span> - {item.position}
            </div>
            <div className='flex gap-10'>
              <div className={Styles.btns}>Read more</div>
              <div className={`flex gap-3 ${Styles.btns}`}>
                <Image className={Styles.shareicon} src="/assets/share.svg" alt='Share' width={100} height={100} /> Share
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={`${Styles.paginateDiv} flex items-center justify-center`}>

        <div className='flex'>
          <button className={`${Styles.arrowBtn} ${currentPage !== 1 ? Styles.active : Styles.inactive} `} onClick={() => setCurrentPage(currentPage - 1)}>
            <div className={`${Styles.arrDiv} flex items-center justify-center`}>
                <Image className={Styles.arrImg1} src='/assets/rightarrow.svg' alt='Arrow' width={100} height={100}/>
            </div>
          </button>
        </div>

        {Array.from({ length: Math.ceil(blogData.length / blogsPerPage) }, (_, i) => (
          <button
            key={i}
            className={`${Styles.eachpage} ${ i == currentPage-1 ? Styles.currpage : Styles.otherpage } ${i !== Math.ceil(blogData.length / blogsPerPage) - 1 ? Styles.eachpageborder : ''} ${currentPage === i + 1 ? Styles.activePage : ''}`}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </button>
        ))}
       
        <div className='flex'>
          <button className={`${Styles.arrowBtn} ${currentPage !== Math.ceil(blogData.length / blogsPerPage) ? Styles.active : Styles.inactive} `} onClick={() => setCurrentPage(currentPage + 1)}>
            <div className={`${Styles.arrDiv} flex items-center justify-center`}>
                <Image className={Styles.arrImg}  src='/assets/rightarrow.svg' alt='Arrow' width={100} height={100}/>
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}

export default BlogContainer;
