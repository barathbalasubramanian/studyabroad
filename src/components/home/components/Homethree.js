import React from 'react';
import Swiper from './Swiper';
import Image from 'next/image';
import Styles from './homethree.module.css';
import Blogs from './Blogs';
// import Blogs from './Blogs';

function Homethree() {

 

    return (
        <div>
            <div>
                <div>
                    <div className={Styles.con1}>
                        <div><Image src='/assets/person.svg' className={Styles.imgperson} alt='person' width={100} height={100}/></div>
                        <div className={Styles.content1}>
                            <div className={`text-lg ${Styles.cont1}`}>
                                <div>
                                    Consortium of 
                                </div>
                                <div>
                                    Best Educational Consultants 
                                </div>
                                <div>
                                    for Global Admissions
                                </div>
                            </div>
                            <div className={` ${Styles.cont2}`}> 
                                Lorem ipsum dolor sit amet consectetur. Mauris arcu vulputate ipsum ac pretiumest laoreet porta sed. 
                            </div>
                            <div className={`text-sm ${Styles.getbtn}`}>
                                Get Started
                            </div>
                        </div>
                    </div>
                    <div className={Styles.con1}>
                        <div className={Styles.content2}>
                            <div className={`text-lg ${Styles.cont12}`}>
                                <div>
                                    Choose 
                                </div>
                                <div>
                                    the best sanctuary 
                                </div>
                                <div>
                                    for your child.
                                </div>
                            </div>
                            <div className={` ${Styles.cont22}`}> 
                                Lorem ipsum dolor sit amet consectetur. Mauris arcu vulputate ipsum ac pretiumest laoreet porta sed. 
                            </div>
                            <div className={`text-sm ${Styles.getbtn}`}>
                                Get Started
                            </div>
                            <div className={Styles.rndarr}>
                                <Image src='/assets/randowarr.svg' alt='Arrow' width={100} height={100} />
                            </div>
                        </div>
                        <div className={Styles.imgdiv1}>
                            <div>
                                <Image src='/assets/house.svg' className={Styles.house} alt='person' width={100} height={100}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Styles.sliderdiv}>
                    <div className={Styles.sliderheader}>See What Our Students Are Saying</div>
                    <Swiper />
                </div>

                <div>
                    {/* <div className={Styles.blog}>
                        <div>
                            <div className='text-lg'>Read Our Blog</div>
                            <div className='text-sm'>Lorem ipsum dolor sit amet consectetur.. </div>
                        </div>
                        <div className='flex flex-row gap-5'>
                            <div className={Styles.rnd}>←</div>
                            <div className={Styles.rnd}>→</div>
                        </div>
                    </div>
                    <div className={Styles.blogscontainer}>
                        <Blogs/>
                    </div> */}
                    <Blogs/>    
                </div>
            </div>
        </div>
  )
}

export default Homethree

