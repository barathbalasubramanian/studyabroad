"use client";
import React, { useState } from 'react';
import Styles from '@/app/housing/components/accomodation.module.css';
import Image from 'next/image';

function UniversityCard() {

    const categories = [
        'Architecture',
        'Computer Science',
        'Law',
        'Literature',
        'Medicine',
        'Geology',
        'Finance and Accounting',
        'Business and Management',
        'Music and Arts',
        'IT',
    ];
    
    const [selectedOption, setSelectedOption] = useState(null);
     
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    
    const [value, setValue] = useState(100);
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleClick = (category) => {
        if (!selectedCategories.includes(category)) {
        setSelectedCategories([...selectedCategories, category]);
        } else {
        setSelectedCategories(selectedCategories.filter((item) => item !== category));
        }
    };

    const universities = [
        {
            logo: '/assets/unilogo1.svg',
            name: 'Imperial College London',
            location: 'London, UK',
            rating: 6.5,
            ranking: 3
        },
        {
            logo: '/assets/unilogo1.svg',
            name: 'Imperial College London',
            location: 'London, UK',
            rating: 6.5,
            ranking: 3
        },
        {
            logo: '/assets/unilogo1.svg',
            name: 'Imperial College London',
            location: 'London, UK',
            rating: 6.5,
            ranking: 3
        },
        {
            logo: '/assets/unilogo1.svg',
            name: 'Imperial College London',
            location: 'London, UK',
            rating: 6.5,
            ranking: 3
        },
        {
            logo: '/assets/unilogo1.svg',
            name: 'Imperial College London',
            location: 'London, UK',
            rating: 6.5,
            ranking: 3
        },
    ];

  return (
    <div className='my-16 flex gap-2 mx-10'>
        {/* Filters */}
        <div className={`flex flex-col gap-4 py-4 px-4 ${Styles.filtersDiv}`}>
            <div className={`flex justify-between ${Styles.eachfilter} py-4 px-6` }>
                <div>Filters</div>
                <div className={`${Styles.resetbtn}`} onClick={()=>{setSelectedOption(null);setValue(100);setSelectedCategories([])}}>Reset All</div>
            </div>
            <div className={`flex flex-col gap-4 justify-between ${Styles.eachfilter} py-4 px-6` }>
                <div className='font-semibold'>Sort By</div>
                <div className={Styles['radio-checkbox-group']}>
                    <label>
                        Ranking: Low to High
                        <input type="radio" id="Low to High" name="options" value="Low to High" checked={selectedOption === "Low to High"} onChange={handleOptionChange} />
                    </label>
                    <label>
                        Ranking: High to Low
                        <input type="radio" id="High to Low" name="options" value="High to Low" checked={selectedOption === "High to Low"} onChange={handleOptionChange} />
                    </label>
                </div>
            </div>
            <div className={`flex flex-col justify-between ${Styles.eachfilter} py-4 px-6` }>
                <div className='font-semibold'>Fees</div>
                <div className='w-full'>
                    <div className={Styles.rangeContainer}>
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            value={value}
                            onChange={handleChange}
                            className={Styles.rangeInput}
                        />
                        <div className={Styles.selectedRange} style={{ width: `${(value / 1000) * 100}%` }}></div>
                        <div>
                            <div className={Styles.startDot}></div>
                            <div className={Styles.dotValue}>0</div>
                        </div>
                        <div>
                            <div className={Styles.endDot}></div>
                            <div className={Styles.dotValue1}>1000</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col justify-between ${Styles.eachfilter} py-4 px-6` }>
                <div className='font-bold text-lg mb-4'>Courses</div>
                <div>
                    <ul>
                        {categories.map((category) => (
                            <li key={category} onClick={() => handleClick(category)} className={Styles.category}>
                            <span className={`${Styles.circle} ${selectedCategories.includes(category) ? Styles.blue : ''}`}></span>
                            {category}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={` flex items-center justify-center w-full ${Styles.applyBtn}`}>Save</div>
        </div>
        {/* Cards */}
        <div className={`${Styles.allCards} flex flex-wrap gap-x-8 gap-y-8 justify-start`}>
        {universities.map((university, index) => (
            <div key={index} className={`${Styles.eachCarduni} flex flex-col justify-around px-4 py-4 gap-8`}>
                <div className={`flex gap-4 items-center justify-evenly`}>
                    <div><Image className={`${Styles.uniIcons} ${Styles.uniLogo}`} src={university.logo} alt='Uni Logo' width={100} height={100} /></div>
                    <div className={`flex flex-col justify-start`}>
                        <div className={`${Styles.uniName} font-semibold`}>{university.name}</div>
                        <div className={`${Styles.uniLoc}`}>{university.location}</div>
                    </div>
                    <div><Image className={Styles.uniIcons} src='/assets/star.svg' alt='Star' width={100} height={100} /></div>
                </div>
                <div className={`flex flex-row gap-4 items-center pl-10`}>
                    <div><Image className={Styles.uniIcons} src='/assets/file.svg' alt='File Logo' width={100} height={100} /></div>
                    <div className={`flex flex-col`}>
                        <div className={`${Styles.uniContent} font-semibold`}>{university.rating}</div>
                        <div className={`${Styles.uniContent}`}>Minimum IELTS Required</div>
                    </div>
                </div>
                <div className={`flex flex-row gap-4 items-center pl-10`}>
                    <div><Image className={Styles.uniIcons} src='/assets/world.svg' alt='World Logo' width={100} height={100} /></div>
                    <div className={`flex flex-col`}>
                        <div className={`${Styles.uniContent} font-semibold`}>{university.ranking}</div>
                        <div className={`${Styles.uniContent}`}>Ranking</div>
                    </div>
                </div>
                <div className={`flex w-11/12 text-center justify-center font-semibold px-6 py-2 ${Styles.ApplyBtn}`}>Apply Now</div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default UniversityCard;
