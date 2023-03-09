import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import foodData from "../foodData/data.json";

const Sort = (props) => {    
  const [disable, setDisable] = useState(false);

  const [editIndex, setEditIndex] = useState(0);
  const [data, setData] = useState(foodData);

  const navigate = useNavigate();

  const handleClick = (id) => {
    setEditIndex(id);
    setDisable(true);
  };

  function toggle() {
    setDisable(false);
  }

  const atc = (id) => {       
    navigate('/cart',{state: {
      name: data[id].name,
      price: data[id].price,
      img: data[id].image
  }});  
  }

    return (
        <>     
                <div
                className="flex flex-row px-4 mt-8 h-96 cursor-pointer hover:outline hover:outline-zinc-200 hover:shadow-md" 
                onMouseOver={() => handleClick(props.id)}
                onMouseLeave={toggle}              
              >
                <div className="flex flex-col mt-4">
                  <div>
                    <img src={props.image} alt="" className="w-64 h-44" />
                  </div>
                  <div className="mt-4 font-semibold">{props.name}</div>
                  <div className="text-xs mt-1 text-gray-500">
                    {props.description}
                  </div>
                  <div className="flex flex-row justify-evenly mt-5 text-sm -ml-4">
                    <div
                      className={`w-11 h-5 bg-emerald-500 flex justify-center items-center text-xs text-white`}
                    >
                      <i class="bi bi-star-fill mr-1"></i>
                      {props.rating}
                    </div>
                    <div className="-mt-1">.</div>
                    <div className="font-normal text-xs">{props.time} MINS</div>
                    <div className="-mt-1">.</div>
                    <div className="font-normal text-xs">
                      {props.price} FOR TWO
                    </div>
                  </div>
                  <div className="mt-3">
                    <hr />
                  </div>
                  <div className="mt-3 mb-3 text-amber-800 text-xs">
                    <span className="font-semibold ">
                      <i class="bi bi-percent"></i> {props.discount}% off
                    </span>
                    <span className="font-normal"> | </span>{" "}
                    <span className="font-semibold ">{props.code}</span>
                  </div>   
                  {disable && (
                    <>
                      {editIndex === props.id ? (
                        <>
                          {" "}
                          <div className="flex justify-center items-center flex-col w-full">
                            <div className="mt-0 w-full">
                              <hr />
                            </div>
                            <button
                              onClick={() => atc(props.id)}
                              className="text-emerald-500 font-bold mb-3 mt-1"                              
                            >
                              ADD TO CART{" "}                             
                            </button>{" "}
                          </div>
                        </>
                      ) : null}
                    </>
                  )}             
                </div>
              </div>               
            </>        
  )
}

export default Sort
