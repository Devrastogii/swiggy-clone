import React, { useState } from "react";
import foodData from "../../foodData/data.json";
import CarouselComp from "../CarouselComp";
import Footer from "../Footer";
import Navbar from "../Navbar";
import {useDisclosure} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Sort from "../Sort";
import { NavLink } from "react-router-dom";

const CostLow = () => {
  const [data, setData] = useState(foodData);
  const [filter, setFilter] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const clickFilter = () => {
    setFilter(true);
    onOpen();
  };


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
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">North Indian{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Indian{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Mughlai{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Biryani{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                               <span className="text-sm ml-2 text-zinc-700">Fast Food{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                               <span className="text-sm ml-2 text-zinc-700">Bakery{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                               <span className="text-sm ml-2 text-zinc-700">Tibetan{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                               <span className="text-sm ml-2 text-zinc-700">South Indian{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Thai{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Kashmiri{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Italian{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Continental{" "}</span>
                            </div>
                          </div>
                          <div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">American{" "}</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Beverages</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Desserts</span>
                            </div>{" "}
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Chinese</span>
                            </div>{" "}
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Snacks</span>
                            </div>{" "}
                            <div className="block">
                            <input
                              type="checkbox"
                              className="accent-orange-400 mt-2 mb-2"
                            />{" "}
                            <span className="text-sm ml-2 text-zinc-700">Pan-Asian</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Japanese</span>
                            </div>{" "}
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Waffle</span>
                            </div>{" "}
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Ice Cream</span>
                            </div>
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
                              />{" "}
                              <span className="text-sm ml-2 text-zinc-700">Sweets</span>
                            </div>{" "}
                            <div className="block">
                              <input
                                type="checkbox"
                                className="accent-orange-400 mt-2 mb-2"
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
                        <button className="text-white bg-orange-500 w-56 h-12 font-semibold">SHOW RESTAURANTS</button>
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
       {data.sort((a,b) => a.price - b.price).map((val, index) => {
        return (
            <>
            <Sort image = {val.image}
              id = {index}
              description = {val.description}
              rating = {val.rating}
              time = {val.time}
              price = {val.price}
              discount = {val.discount}
              code = {val.code}
              name = {val.name}
            />
              </>
          );
      })}        
      </div>

      <Footer />
    </>
  );
};

export default CostLow;