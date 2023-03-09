import React, { useState } from "react";
import foodData from "../foodData/data.json";
import CarouselComp from "./CarouselComp";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {useDisclosure} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Food = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(foodData);
  const [disable, setDisable] = useState(false);

  const [editIndex, setEditIndex] = useState(0);
  const [filter, setFilter] = useState(false);
  const [checkArr, setCheckArr] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  function toggle() {
    setDisable(false);
  }

  const handleClick = (id) => {
    setEditIndex(id);
    setDisable(true);
  };

  const clickFilter = () => {
    setFilter(true);
    onOpen();
  };

  const handleChange = (e) => {
    const {value, checked} = e.target;

    if(checked){
      setCheckArr(() => {
        return [...checkArr, value];
      })
    }

    // If user unchecks
    else {
      setCheckArr(checkArr.filter((e) => e!==value));
    }
  }  

  const atc = (id) => {       
    navigate('/cart',{state: {
      name: data[id-1].name,
      price: data[id-1].price,
      img: data[id-1].image
  }});  
  }

  return (
    <>
      <Navbar />     
      <CarouselComp />
      <header className="text-gray-600 body-font mt-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl">20 Cuisines</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/sort-by-delivery"
              className="mr-10 cursor-pointer text-md hover:text-gray-900"              
            >
              Delivery Time
            </NavLink>
            <NavLink
              to="/sort-by-rating"
              className="mr-10 cursor-pointer text-md hover:text-gray-900"
            >
              Rating
            </NavLink>
            <NavLink
              to="/sort-cost-low"
              className="mr-10 cursor-pointer text-md hover:text-gray-900"
            >
              Cost: Low To High
            </NavLink>
            <NavLink
              to="/sort-cost-high"
              className="mr-10 cursor-pointer text-md hover:text-gray-900"
            >
              Cost: High To Low
            </NavLink>
            <button
              className="mr-10 cursor-pointer text-md hover:text-gray-900"
              onClick={clickFilter}
              ref={btnRef}
            >
              Filter{" "}
              <i className="bi bi-filter-circle-fill text-orange-400"></i>
              {filter ? (
                <>
                  <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size={'sm'}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerHeader> <DrawerCloseButton /><span className="ml-3">Filters</span></DrawerHeader>                     

                      <DrawerBody>
                        <div className="ml-3 mt-5 font-semibold text-md mb-2">
                          Cuisines
                        </div>
                        <div className="ml-3 grid grid-cols-2 gap-10">
                          <div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="North Indian"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">North Indian{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Indian"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Indian{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Mughlai"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Mughlai{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Biryani"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Biryani{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Fast Food"
                                onChange={handleChange}
                              />{" "}
                               <span className="text-sm ml-2 text-zinc-700">Fast Food{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Bakery"
                                onChange={handleChange}
                              />{" "}
                               <span className="text-sm ml-2 text-zinc-700">Bakery{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Tibetan"
                                onChange={handleChange}
                              />{" "}
                               <span className="text-sm ml-2 text-zinc-700">Tibetan{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="South Indian"
                                onChange={handleChange}
                              />{" "}
                               <span className="text-sm ml-2 text-zinc-700">South Indian{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Thai"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Thai{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Kashmiri"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Kashmiri{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Italian"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Italian{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Continental"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Continental{" "}</span>
                            </div>
                          </div>
                          <div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="American"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">American{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Beverages"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Beverages</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Desserts"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Desserts</span>
                            </div>{" "}
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Chinese"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Chinese</span>
                            </div>{" "}
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Snacks"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Snacks</span>
                            </div>{" "}
                            <div className="block">
                            <input
                              type="checkbox"
                              className="accent-orange-400 mt-2 mb-2"
                              name="cuisine"
                              value="Pan-Asian"
                              onChange={handleChange}
                            />{" "}
                            <span className="text-sm ml-2 text-zinc-700">Pan-Asian</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Japanese"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Japanese</span>
                            </div>{" "}
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Waffle"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Waffle</span>
                            </div>{" "}
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Ice Cream"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Ice Cream</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Sweets"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Sweets</span>
                            </div>{" "}
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                                name="cuisine"
                                value="Lebanese"
                                onChange={handleChange}
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Lebanese</span>
                            </div>{" "}
                          </div>
                        </div>
                      </DrawerBody>

                      <DrawerFooter>
                        <button className="mr-9 text-zinc-600 w-32 h-11 bg-white outline outline-gray-500" onClick={onClose}>
                          CLEAR
                        </button>
                        <NavLink to="/" className="text-white bg-orange-500 w-56 h-12 flex justify-center items-center font-semibold">SHOW RESTAURANTS</NavLink>
                      </DrawerFooter>
                    </DrawerContent> 
                  </Drawer>
                </>
              ) : null}
            </button>
          </nav>
        </div>
      </header>

      <div className="mb-5 opacity-100 -mt-2">
        <hr />
      </div>

      <div className="flex flex-row justify-evenly flex-wrap">
      {data.map((val, index) => {
          return (
            <>
              <div
                className="flex flex-row px-4 mt-8 h-96 cursor-pointer hover:outline hover:outline-neutral-200 hover:shadow-md"
                onMouseOver={() => handleClick(val.id)}
                onMouseLeave={toggle}
              >
                <div className="flex flex-col mt-4">
                  <div>
                    <img src={val.image} alt="" className="w-64 h-44" />
                  </div>
                  <div className="mt-4 font-semibold">{val.name}</div>
                  <div className="text-xs mt-1 text-gray-500">
                    {val.description}
                  </div>
                  <div className="flex flex-row justify-evenly mt-5 text-sm -ml-4">
                    <div
                      className={`w-11 h-5 ${val.color} flex justify-center items-center text-xs text-white`}
                    >
                      <i class="bi bi-star-fill mr-1"></i>
                      {val.rating}
                    </div>
                    <div className="-mt-1">.</div>
                    <div className="font-normal text-xs">{val.time} MINS</div>
                    <div className="-mt-1">.</div>
                    <div className="font-normal text-xs">
                      {val.price} FOR TWO
                    </div>
                  </div>
                  <div className="mt-3">
                    <hr />
                  </div>
                  <div className="mt-3 mb-3 text-amber-800 text-xs">
                    <span className="font-semibold ">
                      <i class="bi bi-percent"></i> {val.discount}% off
                    </span>
                    <span className="font-normal"> | </span>{" "}
                    <span className="font-semibold ">{val.code}</span>
                  </div>
                  {disable && (
                    <>
                      {editIndex === val.id ? (
                        <>
                          {" "}
                          <div className="flex justify-center items-center flex-col w-full">
                            <div className="mt-0 w-full">
                              <hr />
                            </div>
                            <button
                              onClick={() => atc(val.id)}
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
          );
        })}   
      </div>
<br />
      <Footer />
    </>
  );
};

export default Food;
