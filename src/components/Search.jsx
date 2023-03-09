import React, { useState } from 'react'
import Navbar from './Navbar'
import cuisineData from "../cuisineData/cuisine.json"

const Search = () => {

    const [data, setData] = useState(cuisineData);    

  return (
    <>
        <Navbar />

        <div className='flex flex-col'>
        <div className='flex w-3/4 mb-5 mt-16 ml-32'>
        <div className="relative flex-grow">        
        <input type="text" placeholder='Search for restaurants and food' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-gray-500 placeholder:font-semibold" />
      </div>
        </div>

        <div>
            <h2 className='font-bold ml-40 text-xl mt-9'>Popular Cuisines</h2>
        </div>

        <div className="flex flex-row justify-between w-40 ml-40 mt-4">

        {data.map((val, index) => {
            return (
                <>
                    <img src={val.name} className="w-16 ml-3"/>
                </>
            )
        })}
        
        </div>
        </div>
    </>
  )
}

export default Search
