import React, { useState } from "react";
import Navbar from "./Navbar";
import CopyToClipboard from "react-copy-to-clipboard";
import availableData from "../coupons/available.json";
import unavailableData from "../coupons/unavailable.json";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import Footer from "./Footer";

const Offers = () => {
  const [available, setAvailable] = useState(availableData);
  const [unavailable, setUnavailable] = useState(unavailableData);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [editIndex, setEditIndex] = useState(0);
  const [copyIndex, setCopyIndex] = useState(0);

  const handleClick = (id) => {
    setEditIndex(id);
    onOpen();
  };

  const handleCopy = (id) => {
    setCopyIndex(id);
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-72 bg-cyan-900">
        <div className="flex w-full h-72 justify-center flex-row px-4">
          <div className="flex w-full h-72 justify-center flex-col px-4">
            <div>
              <h2 className="text-white text-5xl font-semibold">
                Offers for you
              </h2>
            </div>
            <div className="text-slate-300 text-xl mt-3">
              Explore top deals and offers exclusively for you!
            </div>
          </div>
          <div className="flex w-96 mt-4 h-68 items-center justify-center px-4">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham"
              className="w-30"
            />
          </div>
        </div>
      </div>

      <div className="mt-7 text-2xl font-semibold px-6">
        <h2>Available Coupons</h2>
      </div>

      <div className="flex flex-row justify-evenly flex-wrap">
        {available.map((val, index) => {
          return (
            <>
              <div className="flex flex-row px-4 mt-8 outline outline-zinc-200 w-96 h-64">
                <div className="flex flex-col mt-4">
                  <div className="flex flex-row">
                    <img src={val.image} alt="" className="w-6 h-6 mr-4" />
                    <div className="mt-0 font-semibold">{val.name}</div>
                  </div>
                  <div className="px-5 text-md font-semibold mt-5 text-black">
                    {val.line}
                  </div>
                  <div className="px-5 text-xs mt-2 text-gray-500">
                    {val.description}
                  </div>
                  <div className="px-4 mt-2">                   
                    <button
                      className="text-sky-600 text-xs font-bold"
                      onClick={() => handleClick(val.id)}
                    >
                      {editIndex === val.id ? (
                        <>
                          <div>
                            <i class="bi bi-plus-lg mr-1 font-bold"></i>MORE
                            <Modal isOpen={isOpen} onClose={onClose}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalBody>
                                  <div className="flex flex-col mt-4">
                                    <div className="flex flex-row">
                                      <img
                                        src={val.image}
                                        alt=""
                                        className="w-6 h-6 mr-4"
                                      />
                                      <div className="mt-0 font-semibold">
                                        {val.name}
                                      </div>
                                    </div>
                                    <div className="px-5 text-md font-semibold mt-5 text-black">
                                      {val.line}
                                    </div>
                                    <div className="px-5 text-xs mt-2 text-gray-500">
                                      {val.description}
                                    </div>
                                    <div className="px-5 text-sm mt-2 mb-3 text-gray-900">
                                      Terms and Conditions
                                    </div>
                                    {val.terms.map((v, i) => {
                                      return (
                                        <>
                                          <div>
                                          <ul className="text-justify list-disc px-9">
                                            <li className="text-xs mb-2 text-gray-500">
                                              {v}
                                            </li>
                                            </ul>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                  <div className="px-4 mt-4">
                                    <CopyToClipboard text={val.name}>
                                      <button
                                        className={`hover:shadow-lg border-2 border-orange-300 w-28 h-10 text-sm text-orange-400 font-bold`}
                                        onClick={() => handleCopy(val.id)}
                                      >
                                        {copyIndex === val.id
                                          ? "COPIED"
                                          : "COPY CODE"}
                                      </button>
                                    </CopyToClipboard>
                                  </div>{" "}
                                  <br />
                                </ModalBody>
                              </ModalContent>
                            </Modal>
                          </div>
                        </>
                      ) : (
                        <>
                          <i class="bi bi-plus-lg mr-1 font-bold"></i>MORE
                        </>
                      )}
                    </button>
                  </div>
                  <div className="px-4 mt-4">
                    <CopyToClipboard text={val.name}>
                      <button
                        className={`hover:shadow-lg border-2 border-orange-300 w-28 h-10 text-sm text-orange-400 font-bold`}
                        onClick={() => handleCopy(val.id)}
                      >
                        {copyIndex === val.id ? "COPIED" : "COPY CODE"}
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="mt-7 text-2xl font-semibold px-6">
        <h2>Unavailable Coupons</h2>
      </div>

      <div className="flex flex-row justify-evenly flex-wrap">
        {unavailable.map((val, index) => {
          return (
            <>
              <div className="flex flex-row px-4 mt-8 outline outline-zinc-200 w-96 h-64">
                <div className="flex flex-col mt-4">
                  <div className="flex flex-row">
                    <img src={val.image} alt="" className="w-6 h-6 mr-4" />
                    <div className="mt-0 font-semibold">{val.name}</div>
                  </div>
                  <div className="px-5 text-md font-semibold mt-5 text-black">
                    {val.line}
                  </div>
                  <div className="px-5 text-xs mt-2 text-gray-500">
                    {val.description}
                  </div>
                  <div className="px-4 mt-2">                   
                    <button
                      className="text-sky-600 text-xs font-bold"
                      onClick={() => handleClick(val.id)}
                    >
                      {editIndex === val.id ? (
                        <>
                          <div>
                            <i class="bi bi-plus-lg mr-1 font-bold"></i>MORE
                            <Modal isOpen={isOpen} onClose={onClose}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalBody>
                                  <div className="flex flex-col mt-4">
                                    <div className="flex flex-row">
                                      <img
                                        src={val.image}
                                        alt=""
                                        className="w-6 h-6 mr-4"
                                      />
                                      <div className="mt-0 font-semibold">
                                        {val.name}
                                      </div>
                                    </div>
                                    <div className="px-5 text-md font-semibold mt-5 text-black">
                                      {val.line}
                                    </div>
                                    <div className="px-5 text-xs mt-2 text-gray-500">
                                      {val.description}
                                    </div>
                                    <div className="px-5 text-sm mt-2 mb-3 text-gray-900">
                                      Terms and Conditions
                                    </div>
                                    {val.terms.map((v, i) => {
                                      return (
                                        <>
                                          <div>
                                          <ul className="text-justify list-disc px-9">
                                            <li className="text-xs mb-2 text-gray-500">
                                              {v}
                                            </li>
                                            </ul>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                  <div className="px-4 mt-4">
                                    <CopyToClipboard text={val.name}>
                                      <button
                                        className={`hover:shadow-lg border-2 border-orange-300 w-28 h-10 text-sm text-orange-400 font-bold`}
                                        onClick={() => handleCopy(val.id)}
                                      >
                                        {copyIndex === val.id
                                          ? "COPIED"
                                          : "COPY CODE"}
                                      </button>
                                    </CopyToClipboard>
                                  </div>{" "}
                                  <br />
                                </ModalBody>
                              </ModalContent>
                            </Modal>
                          </div>
                        </>
                      ) : (
                        <>
                          <i class="bi bi-plus-lg mr-1 font-bold"></i>MORE
                        </>
                      )}
                    </button>
                  </div>
                  <div className="px-4 mt-4">
                    <CopyToClipboard text={val.name}>
                      <button
                        className={`hover:shadow-lg border-2 border-orange-300 w-28 h-10 text-sm text-orange-400 font-bold`}
                        onClick={() => handleCopy(val.id)}
                      >
                        {copyIndex === val.id ? "COPIED" : "COPY CODE"}
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
        <br /> <br />
      <Footer />
    </>
  );
};

export default Offers;
