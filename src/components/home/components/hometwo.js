import React from 'react';
import Styles from './hometwo.module.css';
import Image from 'next/image';

function Hometwo() {

    const cardData = [
        {
            icon: "/assets/img1.svg",
            title: "Experts in foreign university admissions",
            description: "Lorem ipsum dolor sit amet consectetur. Mauris arcu vulputate ipsum ac est laoreet porta sed.",
            arrow: "/assets/arrow.svg"
        },
        {
            icon: "/assets/img2.svg",
            title: "Hassle-Free Housing Search",
            description: "Lorem ipsum dolor sit amet consectetur. Mauris arcu vulputate ipsum ac est laoreet porta sed.",
            arrow: "/assets/arrow1.png"
        },
        {
            icon: "/assets/img3.svg",
            title: "We Offer All The Destinations You Love",
            description: "Lorem ipsum dolor sit amet consectetur. Mauris arcu vulputate ipsum ac est laoreet porta sed.",
            arrow: "/assets/arrow1.png"
        },
        {
            icon: "/assets/img4.svg",
            title: "One Stop University Registration",
            description: "Lorem ipsum dolor sit amet consectetur. Mauris arcu vulputate ipsum ac est laoreet porta sed.",
            arrow: "/assets/arrow1.png"
        },
        {
            icon: "/assets/img5.svg",
            title: "Student Community Hub",
            description: "Lorem ipsum dolor sit amet consectetur. Mauris arcu vulputate ipsum ac est laoreet porta sed.",
            arrow: "/assets/arrow1.png"
        },
        
    ];

  return (
    <div className={Styles.allcards}>
        {/* <div></div> */}
        <div className={Styles.container1}>
            <div className={Styles.content}>
                <div>One Platform,</div>
                <div>Endless Possiblities For Success</div>
            </div>
            <div className={Styles.browsebtn}>
                Browse Services
            </div>
        </div>


        {/* cards  */}
        {cardData.map((data, index) => (
            <div key={index} className={`${index === 0 ? Styles.eachcard : Styles.eachcard1}`}>
                <div>
                    <div className={`${index === 0 ? Styles.icondiv : Styles.icondiv1}`}>
                        {/* <img src={data.icon} alt="home" className={Styles.iconimg} /> */}
                        <Image src={data.icon} alt="home" className={Styles.iconimg} width={150} height={100}/>
                    </div>
                </div>
                <div style={{ fontSize: "21px", width: "11em", textAlign: "left" }}>{data.title}</div>
                <div style={{ fontSize: "12px", width: "20em" }}>{data.description}</div>
                <div className={`${index === 0 ? Styles.arrDiv : Styles.arrDiv1}`}>
                    {/* <img src={data.arrow} alt="Arrow" /> */}
                    <Image src={data.arrow} alt="Arrow" className={Styles.iconimg} width={150} height={100}/>
                </div>
            </div>
        ))}

    </div>
  )
}

export default Hometwo
