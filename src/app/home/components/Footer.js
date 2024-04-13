
import React from 'react';
import Styles from './footer.module.css';
import Image from 'next/image';

function Footer() {
  return (
    <div className={Styles.footer}>
      <div className="flex flex-row items-center justify-between w-full">
        <div>
            <Image src='/assets/footerlogo.svg' alt='Logo' width={100} height={100} className={Styles.logo}/>
            <div className={Styles.logocnt}>The fastest Way to Study Abroad</div>
        </div>
        <div className={Styles.contact}>Contact Us</div>
      </div>
      <div className={Styles.line}></div>
      <div className={Styles.footercontent}>
        <div className={Styles.socailCon}>
            <div className={Styles.socialLogo}>
                <Image className={Styles.eachlogo} src="/assets/Fb.svg" alt="FaceBook" width={100} height={100}/>
                <Image className={Styles.eachlogo} src="/assets/Insta.svg" alt="Insta" width={100} height={100}/>
                <Image className={Styles.eachlogo} src="/assets/Twitter.svg" alt="Twitter" width={100} height={100}/>
            </div>
            <div className={Styles.socailcontent}>Lorem ipsum dolor sit amet consectetur. Nisl nunc turpis sit molestie dignissim leo. Augue cras aliquet ac lobortis purus morbi. Nisl massa enim a ut odio consectetur blandit nascetur scelerisque. Viverra felis scelerisque sagittis diam urna sed quis enim mauris. Cursus pharetra molestie tempor eget. Tortor tortor amet scelerisque diam nulla volutpat imperdiet.</div>
        </div>
        <div style={{color:"white"}} className={`flex justify-between ${Styles.resource}`}>
            <div className='flex flex-col gap-4'>
                <div>Company</div>
                <div>About Us</div>
                <div>Features</div>
                <div>Works</div>
                <div>Careers</div>
            </div>
            <div className='flex flex-col gap-4'>
                <div>Help</div>
                <div>Customer Support</div>
                <div>FAQ</div>
                <div>Support</div>
                <div>Tutorials</div>
            </div>
            <div className='flex flex-col gap-4'>
                <div>Resources</div>
                <div>Blogs</div>
                <div>Study Tips</div>
                <div>Student Housing</div>
                <div>Brand Offers</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
