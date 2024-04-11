import React from 'react';
import Styles from './question.module.css';
import Image from 'next/image';

const Questions = () => {

    const questions =
    [
        {
            id:1,
            ques:"Who are we ?",
            ans: ""
        },
        {
            id:2,
            ques:"What kind of stuend housing do we offer",
            ans: ""
        },
        {
            id:3,
            ques:"Will my deposit and rent be refunded if I cancel my booking?",
            ans: ""
        },
        {
            id:4,
            ques:"How much time does it take to get the refund?",
            ans: ""
        },
        {
            id:5,
            ques:"How do I know my accommodation is safe?",
            ans: ""
        },
        {
            id:6,
            ques:"How much time does it take to get the refund?",
            ans: ""
        },
        {
            id:7,
            ques:"What are the requirements for a guarantor?",
            ans: ""
        }
    ]
  return (
    <div> 
        <div className='px-8 font-bold text-2xl'>Frequently Asked Question</div>
        <div className={`flex flex-col gap-4 mx-4 my-8`}>
            {
                questions.map((ques,index) => (
                    <div key={ques.id} className={`flex items-center justify-between w-full px-8 py-4 ${Styles.quesDiv}`}>
                        <div>{ques.ques}</div>
                        <div><Image src="/assets/quesarr.svg" className={Styles.quesarr} alt='Arrow' width={100} height={100}/></div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Questions