import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";

const Navbar = () => {
  const [log, setLog] = useState(false);
  const [sign, setSign] = useState(false); 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [user, setUser] = useState({
    userPhone: "",
    userName: "",
    userEmail: "",
    userLogPhone: "",
  });

  const handleLog = (e) => {   
    e.preventDefault();
    setLog(true);
    onOpen();
  };

  const handleSign = (e) => {
    e.preventDefault();
    setSign(true);
  };

  const handleLogin = (e) => { 
    e.preventDefault();   
    setSign(false);
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const val = e.target.value;

    setUser({ ...user, [name]: val });
  };      

  return (
    <>
      <header className="text-gray-600 bg-white body-font shadow-md fixed w-full z-100 overflow-hidden bg-scroll">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <NavLink to="/">
              <svg
                height="27"
                viewBox="-7.3 3.6 2520.1 3702.8"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1255.2 3706.3c-2.4-1.7-5-4-7.8-6.3-44.6-55.3-320.5-400.9-601.6-844.2-84.4-141.2-139.1-251.4-128.5-279.9 27.5-74.1 517.6-114.7 668.5-47.5 45.9 20.4 44.7 47.3 44.7 63.1 0 67.8-3.3 249.8-3.3 249.8 0 37.6 30.5 68.1 68.2 68 37.7 0 68.1-30.7 68-68.4l-.7-453.3h-.1c0-39.4-43-49.2-51-50.8-78.8-.5-238.7-.9-410.5-.9-379 0-463.8 15.6-528-26.6-139.5-91.2-367.6-706-372.9-1052-7.5-488 281.5-910.5 688.7-1119.8 170-85.6 362-133.9 565-133.9 644.4 0 1175.2 486.4 1245.8 1112.3 0 .5 0 1.2.1 1.7 13 151.3-820.9 183.4-985.8 139.4-25.3-6.7-31.7-32.7-31.7-43.8-.1-115-.9-438.8-.9-438.8-.1-37.7-30.7-68.1-68.4-68.1-37.6 0-68.1 30.7-68.1 68.4l1.5 596.4c1.2 37.6 32.7 47.7 41.4 49.5 93.8 0 313.1-.1 517.4-.1 276.1 0 392.1 32 469.3 90.7 51.3 39.1 71.1 114 53.8 211.4-154.9 866-1135.9 1939.1-1172.8 1983.8z"
                  fill="#fc8019"
                />
              </svg>{" "}
            </NavLink>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/search"
              className="mr-5 hover:text-gray-900 font-semibold text-lg px-3"
            >
              <i class="bi bi-search mr-2"></i>Search
            </NavLink>
            <NavLink
              to="/offers"
              className="mr-5 hover:text-gray-900 font-semibold text-lg px-3"
            >
              <i class="bi bi-percent mr-2"></i>Offers
            </NavLink>
            <a
              href="/"
              className="mr-5 hover:text-gray-900 font-semibold text-lg px-3"
            >
              <i class="bi bi-question-circle-fill mr-2"></i>Help
            </a>
            <button
              className="mr-5 hover:text-gray-900 font-semibold text-lg px-3"
              onClick={handleLog}
              ref={btnRef}
            >
              <i class="bi bi-person-circle mr-2"></i>Sign In             
            </button>
            {log ? (
              <>
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                  size={"sm"}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />

                    {sign ? (
                      <>
                        {" "}
                        <div className="mt-10 px-6">
                          <DrawerHeader>
                            <div className="flex flex-row">
                              <div>
                                <span className="text-2xl tracking-wider">
                                  Sign Up
                                </span>{" "}
                                <div className="text-sm mt-2">
                                  or{" "}
                                  <button
                                    className="text-orange-500 text-xs"
                                    onClick={handleLogin}
                                  >
                                    login to your account
                                  </button>
                                </div>{" "}
                                <div className="mt-5 w-10 border border-black h-0"></div>
                              </div>{" "}
                              <div>
                                <img
                                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                                  alt="food-image"
                                  className="w-28 h-28 ml-24"
                                />
                              </div>
                            </div>
                          </DrawerHeader>
                        </div>{" "}
                        <DrawerBody>
                          <form>
                            <div className="px-6 -mt-6">
                              <Input
                                w={350}
                                h={70}
                                mt={6}
                                placeholder="Phone Number"
                                rounded={0}
                                name="userPhone"
                                onChange={handleInput}
                                value={user.userPhone}
                                autoComplete='off'
                              />
                            </div>
                            <div className="px-6 -mt-6">
                              <Input
                                w={350}
                                h={70}
                                mt={6}
                                placeholder="Name"
                                rounded={0}
                                name="userName"
                                onChange={handleInput}
                                value={user.userName}
                                autoComplete='off'
                              />
                            </div>
                            <div className="px-6 -mt-6">
                              <Input
                                w={350}
                                h={70}
                                mt={6}
                                placeholder="Email"
                                rounded={0}
                                name="userEmail"
                                onChange={handleInput}
                                value={user.userEmail}
                                autoComplete='off'
                              />
                            </div>
                            <div className="text-indigo-700 px-6 mt-4 mb-1 font-semibold">
                              Have a referral code?
                            </div>
                            <div className="px-6">
                              <input
                                type="submit"
                                value="CONTINUE"
                                className="bg-orange-500 cursor-pointer text-white font-semibold flex justify-center items-center w-full h-12 mt-4"                                
                              />
                            </div>
                          </form>
                          <div className="text-xs mt-4 px-6">
                            By creating an account, I accept the{" "}
                            <span className="font-bold">
                              Terms & Conditions & Privacy Policy
                            </span>
                          </div>
                        </DrawerBody>
                      </>
                    ) : (
                      <>
                        {" "}
                        <div className="mt-10 px-6">
                          <DrawerHeader>
                            <div className="flex flex-row">
                              <div>
                                <span className="text-2xl tracking-wider">
                                  Login
                                </span>{" "}
                                <div className="text-sm mt-2">
                                  or{" "}
                                  <button
                                    className="text-orange-500 text-xs"
                                    onClick={handleSign}
                                  >
                                    create an account
                                  </button>
                                </div>{" "}
                                <div className="mt-5 w-10 border border-black h-0"></div>
                              </div>{" "}
                              <div>
                                <img
                                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                                  alt="food-image"
                                  className="w-28 h-28 ml-24"
                                />
                              </div>
                            </div>
                          </DrawerHeader>
                        </div>{" "}
                        <DrawerBody>
                          <form>
                            <div className="px-6">
                              <Input
                                w={350}
                                h={74}
                                mt={6}
                                placeholder="Phone Number"
                                name="userLogPhone"
                                onChange={handleInput}
                                value={user.userLogPhone}
                                autoComplete='off'
                              />
                            </div>
                            <div className="px-6">
                              <input
                                type="submit"
                                value="LOGIN"
                                className="bg-orange-500 text-white font-semibold flex justify-center items-center w-full h-12 mt-4 cursor-pointer"  
                                autoComplete='off'                        
                              />
                            </div>
                          </form>
                          <div className="text-xs mt-4 px-6">
                            By clicking on Login, I accept the{" "}
                            <span className="font-bold">
                              Terms & Conditions & Privacy Policy
                            </span>
                          </div>
                        </DrawerBody>
                      </>
                    )}
                  </DrawerContent>
                </Drawer>
              </>
            ) : null}
            <NavLink
              to="/cart"
              className="mr-5 hover:text-gray-900 font-semibold text-lg px-3"
            >
              <i class="bi bi-minecart mr-2"></i>Cart
            </NavLink>
          </nav>
        </div>
      </header>
      <br /> <br /> 
    </>
  );
};

export default Navbar;
