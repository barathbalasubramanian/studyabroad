"use client"
import React, { useState } from 'react';
import Styles from './accomodation.module.css';
import Image from 'next/image';

const AccomodationCard = () => {
  // Random content for demonstration
  const cardData = [
    { 
      name: 'The Standard', 
      address: '2580 Bancroft Way', 
      distance: '1h 15min from Stanford University', 
      price: '$303.10/week', 
      rooms: '16 room options',
      imageUrl: '/assets/house1.svg' // Random house image URL
    },
    { 
      name: 'The Luxe', 
      address: '123 Main Street', 
      distance: '30min from Downtown', 
      price: '$400.50/week', 
      rooms: '20 room options',
      imageUrl: '/assets/house4.svg' // Random house image URL
    },
    { 
        name: 'The Standard', 
        address: '2580 Bancroft Way', 
        distance: '1h 15min from Stanford University', 
        price: '$303.10/week', 
        rooms: '16 room options',
        imageUrl: '/assets/house2.svg' // Random house image URL
      },
      { 
        name: 'The Luxe', 
        address: '123 Main Street', 
        distance: '30min from Downtown', 
        price: '$400.50/week', 
        rooms: '20 room options',
        imageUrl: '/assets/house3.svg' // Random house image URL
      },
      { 
        name: 'The Standard', 
        address: '2580 Bancroft Way', 
        distance: '1h 15min from Stanford University', 
        price: '$303.10/week', 
        rooms: '16 room options',
        imageUrl: '/assets/house4.svg' // Random house image URL
      },
      { 
        name: 'The Luxe', 
        address: '123 Main Street', 
        distance: '30min from Downtown', 
        price: '$400.50/week', 
        rooms: '20 room options',
        imageUrl: '/assets/house5.svg' // Random house image URL
      },

  ];

  const amenitiesData = ["24/7 Security + CCTV" , "Central", "Heating", "Advice", "Accessibility", "Catering", "Kitchen", "Breakfast", "Air Conditioning", "Laundry", "Cinema Room", "Flexible", "On-Site Gym", "On-Site Maintenance", "Swimming Pool"]


  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionType, setSelectedOptionType] = useState(null);
  const [setAmenities, setAmenitiesValue] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionChangeType = (event) => {
    setSelectedOptionType(event.target.value);
  };

  const [value, setValue] = useState(500);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const amentiesFun = (item) => {
    setAmenitiesValue(item);
  }

  return (
    <div className='my-16 flex gap-2 mx-10'>
      <div className={`flex flex-col gap-4 py-4 px-4 ${Styles.filtersDiv}`}>
        <div className={`flex justify-between ${Styles.eachfilter} py-4 px-6` }>
            <div>Filters</div>
            <div className={`${Styles.resetbtn}`} onClick={()=>{setSelectedOption(null);setSelectedOptionType(null);setValue(100)}}>Reset All</div>
        </div>
        <div className={`flex flex-col gap-4 justify-between ${Styles.eachfilter} py-4 px-6` }>
            <div className='font-semibold'>Sort By</div>
            <div className={Styles['radio-checkbox-group']}>
                <label>
                    Nearest
                    <input type="radio" id="Nearest" name="options" value="Nearest" checked={selectedOption === "Nearest"} onChange={handleOptionChange} />
                </label>
                <label>
                    Low to High
                    <input type="radio" id="Low to High" name="options" value="Low to High" checked={selectedOption === "Low to High"} onChange={handleOptionChange} />
                </label>
                <label>
                    High to Low
                    <input type="radio" id="High to Low" name="options" value="High to Low" checked={selectedOption === "High to Low"} onChange={handleOptionChange} />
                </label>
            </div>
        </div>
        <div className={`flex flex-col justify-between ${Styles.eachfilter} py-4 px-6` }>
            <div className='font-semibold'>Budget ( Per Weeek )</div>
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
        <div className={`flex justify-between flex-col gap-4 ${Styles.eachfilter} py-4 px-6`}>
            <div className="font-semibold">Property Type</div>
            <div className={`${Styles['radio-checkbox-group']} w-full gap-2`}> 
                <label>
                    <div className='flex flex-col w-3/4'>
                        Entire Place <span className={Styles.typedesc}>Keep your sleep/study space to yourself, no need to share.</span>
                    </div>
                    <input type="radio" name="propertyType" value="Entire Place" checked={selectedOptionType === "Entire Place"} onChange={handleOptionChangeType} />
                </label>
                <label>
                <div className='flex flex-col w-3/4'>
                        Private Room <span className={Styles.typedesc}>Keep your sleep/study space to yourself, no need to share.</span>
                    </div>
                    <input type="radio" name="propertyType" value="Private Room" checked={selectedOptionType === "Private Room"} onChange={handleOptionChangeType} />
                </label>
                <label>
                    <div className='flex flex-col w-3/4'>
                        Shared Room <span className={Styles.typedesc}>Embrace the camaraderie in a communal space.</span>
                    </div>
                    <input type="radio" name="propertyType" value="Shared Room" checked={selectedOptionType === "Shared Room"} onChange={handleOptionChangeType} />
                </label>
            </div>
        </div>
        <div className={`flex justify-between flex-col gap-4 ${Styles.amenities} ${Styles.eachfilter} py-4 px-6`}>
          <div className={`font-semibold`}>Amenities</div>
          <div className={`flex flex-wrap gap-2`}>
            {/* loop this amenities data */}
            {amenitiesData.map((item, index) => (
              <div key={index} onClick={()=>amentiesFun(item)} className={`px-2 text-sm cursor-pointer ${Styles.amenity} ${ item == setAmenities ? Styles.amenityvalue : "" }`}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={` flex items-center justify-center w-full ${Styles.applyBtn}`}>Apply</div>
      </div>

      <div className={`flex flex-wrap gap-10 items-center justify-center w-full ${Styles.allAccCards}`}>
        {cardData.map((data, index) => (
          <div key={index} className={`${Styles.eachCard} flex flex-col gap-6 items-center justify-start`}>
            <div><Image className={Styles.houseImg} src={data.imageUrl} alt='House images' width={100} height={100} /></div>
            <div className={`flex flex-col gap-8 pb-8 pl-4 w-11/12`}>
              <div className={`flex flex-col`}>
                <div className='text-2xl font-semibold'>{data.name}</div>
                <div>
                  <div className='flex gap-1 px-4'> <Image className={Styles.vectoHouse} src='/assets/pin.svg' alt='House images' width={100} height={100} /> {data.address}</div>
                  <div className='flex gap-1 px-4'> <Image className={Styles.vectoHouse} src='/assets/time.svg' alt='House images' width={100} height={100} /> {data.distance}</div>
                </div>
              </div>
              <div className={`flex flex-col`}>
                <div className={`font-semibold`}>From <span className={`font-normal`}>{data.price}</span></div>
                <div className='flex gap-1 px-4'><Image className={Styles.vectoHouse} src='/assets/room.svg' alt='House images' width={100} height={100} /> {data.rooms}</div>
              </div>
              <div className={`flex w-11/12 text-center justify-center px-7 py-3 ${Styles.enquireBtn}`}>
                Enquire Now
              </div>
            </div>
          </div>
        ))}
      </div> 
    </div>
  )
}

export default AccomodationCard;
