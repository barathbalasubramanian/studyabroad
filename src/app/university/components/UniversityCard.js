"use client";
import React, { useState } from 'react';
import Styles from '@/app/housing/components/accomodation.module.css';

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
    
      const [value, setValue] = useState(500);
    
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


  return (
    <div className='my-16 flex gap-2 mx-10'>
        {/* Filters */}
        <div className={`flex flex-col gap-4 py-4 px-4 ${Styles.filtersDiv}`}>
        <div className={`flex justify-between ${Styles.eachfilter} py-4 px-6` }>
            <div>Filters</div>
            <div className={`${Styles.resetbtn}`} onClick={()=>{setSelectedOption(null);setSelectedOptionType(null);setValue(100)}}>Reset All</div>
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
        <div></div>
    </div>
  )
}

export default UniversityCard;
