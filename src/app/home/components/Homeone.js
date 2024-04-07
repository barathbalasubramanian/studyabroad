import React from 'react'
import Styles from './homeone.module.css'
import Image from 'next/image';

function Homeone() {

    const imageSources = [
        '/assets/image1.svg',
        '/assets/image2.svg',
        '/assets/image3.svg',
        '/assets/image4.svg',
        '/assets/image5.svg',
      ];


  return (
    <div className={Styles.homeone}>
      <div className={Styles.container1}>
        <div className={Styles.con1}>
            <div className={Styles.content}>
                <div> Discover The World, </div>
                <div>Shape Your Future:</div>
                <div> Expect Guidance For Your </div>
                <div>Study Abroad Adventure! </div>
            </div>
            <div className={Styles.getbtn}>
                Get Started  →
            </div>
        </div>
        <div className={Styles.imagevector}>
        </div>
      </div>
      <div className={Styles.container2}>
        <div className={Styles.scrollDiv}>
            <div className='text-sm'>Universities who trust us →</div>
            <div>
                <marquee scrollamount="3" direction="left" behavior="scroll" loop="infinite" >
                    <div className={Styles.allimages}>
                        {imageSources.map((image, index) => (
                            <div className={Styles.image} key={index}> 
                                <Image key={index} src={image} alt={`Image ${index + 1}`} width={150} height={100}/>
                            </div>
                        ))}
                    </div>
                </marquee>
            </div>
        </div>
        <div className={Styles.students}>
            <div className='text-2xl'>Join Thousands Of Smart Students</div>
            <div className={Styles.stats}> 
                <div className={Styles.eachstat}><div style={{color:"#42F645",fontSize:"24px"}}>15000+</div><div className={{"font-size":"12px"}}>Serving 15k Students and Growing </div></div>
                <div className={Styles.eachstat}><div style={{color:"#421193",fontSize:"24px"}}>50+</div><div>Partnered Universities Trust Us </div></div>
                <div className={Styles.eachstat}><div style={{color:"#FFCD07",fontSize:"24px"}}>3000+</div><div>Successfully Accommodation Bookings Made</div></div>
            </div>
            <div className={Styles.borderline}></div>
            <div className={Styles.joinbtn}>Join Now</div>
        </div>
      </div>
    </div>
  )
}

export default Homeone
