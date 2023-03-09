import React from 'react'

function CarouselComp() {
  return (
    <>   
        <div className='w-full h-96 bg-slate-900'>
          <div className='flex flex-row justify-evenly items-center pt-16'>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep" className='w-64 cursor-pointer hover:scale-110 transition-all duration-500' alt="" />
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t" className='w-64 cursor-pointer hover:scale-110 transition-all duration-500' alt="" />
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v" className='w-64 cursor-pointer hover:scale-110 transition-all duration-500' alt="" />
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3" className='w-64 cursor-pointer hover:scale-110 transition-all duration-500' alt="" />          
          </div>
        </div>        
    </>
  )
}

export default CarouselComp
