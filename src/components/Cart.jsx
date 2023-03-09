import React, { useState } from 'react'
import paymentD from "../payment/payment.json";
import Navbar from './Navbar';
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';
import veg from "../images/veg.png";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton
  ,useDisclosure
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

const Cart = () => {  
  const location = useLocation(); 
  const [paymentData, setPaymentData] = useState(paymentD);
  const [payment, setPayment] = useState(false);
  const [count, getCount] = useState(1);
  const [pay, setPay] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [disabled, setDisabled] = useState(false);
  const [color, setColor] = useState("bg-green-600")
  const [payName, setPayname] = useState("");
  const cancelRef = React.useRef()
  const toast = useToast()  
 
  function add() {   
    getCount(count + 1);  
    if(count == 10){
      alert("Max 10 quantities are allowed per order");
      getCount(10);
    }    
  }

  function minus() {
    if (count === 1 || count <= 0) {
      getCount(1);
      return false;
    } else {
      getCount(count - 1);     
    }
  }

  const showPayment = () => {
    setPayment(true);   
  }

  const dontShowPayment = () => {
    setPayment(false);
  }

  const afterPay = (name) => {    
    setPay(true);
    onOpen();
    setPayname(name);
  }

  return (
    <>
        <Navbar />    
    
        {/* Modal */}
        {pay ? <>
          <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Payment Confirmation</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure to pay ₹{count * (location.state.price/2) + 32.45 + 40} via {payName} to place your order on Dev's Swiggy ?
          </AlertDialogBody>
          <AlertDialogFooter>
            <button ref={cancelRef} onClick={onClose} className='w-12 h-8 mr-3 text-white bg-black'>
              Back
            </button>
            <button className='w-12 h-8 text-white bg-orange-500' disabled={disabled} onClick={() => {
                toast({
          title: 'Order Confirmed',
          description: "We've received your order and will prepare soon.",
          status: 'success',
          duration: 4000,
          isClosable: true,
        });

        setDisabled(true);   
        setColor("bg-gray-200");        
            }
            
      }>
              Yes
            </button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
        </> : null}
        <div className='bg-gray-200'>
        <div className='flex justify-around px-12'>
        {payment ? <>
          <div
                className="mt-10 pl-10 cursor-pointer hover:shadow-xl bg-white w-3/4 h-52"
                onClick={dontShowPayment}
              >
                <div className="flex flex-row justify-between">
                  <div className="mt-8 text-lg font-semibold">
                    <h2>
                      Delivery address{" "}
                      <span>
                        <i class="bi bi-check-circle-fill text-green-600 ml-4"></i>
                      </span>
                    </h2>
                  </div>
                  <div className="pr-10">
                    <button className="text-orange-500 mt-8 font-bold text-sm ">
                      CHANGE
                    </button>
                  </div>{" "}
                </div>
                <div className="mt-6">
                  <div className="mt-3 font-medium">
                    <h2>Work</h2>
                  </div>
                  <div className="text-zinc-500 text-sm w-3/4 mt-1">
                    Jaypee Institute of Information Technology Gate 3, Maal Rd,
                    Jaypee Wish Town Village, Sultanpur, Noida, Uttar Pradesh
                  </div>
                  <div className="font-bold text-xs mt-3">22 MINS</div>
                </div>
              </div>
        </> : <>
                <div className='mt-10 pl-10 shadow-xs bg-white w-3/4 h-96'>
                    <div className='mt-8 text-lg font-semibold'><h2>Select delivery address</h2></div>
                    <div className='text-zinc-500'>You have a saved address in this location</div>
                    <div className='mt-8'>
                        <div className='w-96 border border-zinc-200 h-48 pl-8 hover:shadow-lg cursor-pointer'>
                        <div className='mt-4 font-medium'><h2><i class="bi bi-briefcase"></i><span className='ml-3'>Work</span></h2></div>
                        <div className='text-zinc-500 text-sm px-7'>Jaypee Institute of Information Technology Gate 3, Maal Rd, Jaypee Wish Town Village, Sultanpur, Noida, Uttar Pradesh</div>
                        <div className='font-bold text-xs mt-3 pl-7'>22 MINS</div>
                        <div className='mt-3 pl-7'><button className='text-white font-semibold bg-green-600 w-32 h-8' onClick={showPayment}>DELIVER HERE</button></div>
                        </div>
                    </div>
                </div>
        </>}             
                <div className='mt-10 shadow-xs bg-white ml-4 w-96 h-96 px-7'>
                <div className="flex flex-row mt-4">
                  <div>
                    <img
                      src={location.state.img}
                      alt="restaurant"
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="ml-4">
                    <h2 className="font-semibold text-md">{location.state.name}</h2>
                    <h2 className="text-xs text-zinc-500">Indirapuram</h2>
                    <div className="border border-black mt-2 w-8"></div>
                  </div>
                </div>

                <div className="overflow-y-auto h-72">
                <form method='POST'>
                <div>
                  <div className="flex flex-row mt-7">
                    <div className='mt-1'>
                      <img src={veg} alt="veg" className="w-3 h-3" />
                    </div>
                    <div className='-mt-1'>
                      <input className="ml-4 text-sm w-28 outline-none border-none" value={location.state.name} name="inputName" disabled={true} />
                    </div>
                    <div className="flex justify-center ml-2 -mt-1 border border-zinc-300 px-2 h-8">
                      {" "}
                      <svg
                        class="fill-current text-gray-400 w-2 cursor-pointer"
                        viewBox="0 0 448 512"
                        onClick={minus}
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                      <input
                        className="text-center w-8 text-green-600 text-sm"
                        type="text"
                        value={count}
                        name="inputQuantity"
                      />
                      <svg
                        className="fill-current w-2 cursor-pointer text-green-600"
                        viewBox="0 0 448 512"
                        onClick={add}
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </div>
                    <div className="text-sm ml-5 -mt-1">₹{count * (location.state.price/2)}</div>
                  </div>

                  <div className="bg-neutral-50 h-12 flex items-center pl-2 mt-3"><span><i class="bi bi-quote mr-1"></i></span><input type="text" placeholder="Any suggesstions? We will pass it on..." className="text-xs border-none outline-none bg-neutral-50 w-52 font-semibold" /></div>
                </div>

               <div className="mt-3"><h2 className="text-xs font-semibold text-black">Bill Details</h2></div>
               <div className="flex flex-row justify-between mt-2">
                  <div><h1 className="text-xs">Item Total</h1></div>
                  <div className="pr-7"><h1 className="text-xs">₹{count * (location.state.price/2)}</h1></div>
               </div>
               <div className="flex flex-row justify-between mt-2">
                  <div><h1 className="text-xs">Delivery Fee | 2.0 kms</h1></div>
                  <div className="pr-7"><h1 className="text-xs">₹40</h1></div>
               </div>

               <div className="mt-4"><hr /></div>

               <div className="flex flex-row justify-between mt-4">
                  <div><h1 className="text-xs">Govt Taxes & Other Charges</h1></div>
                  <div className="pr-7"><h1 className="text-xs">₹32.45</h1></div>
               </div>

               <div className="mt-5 h-1 rounded-md bg-black w-64 opacity-60"></div>

               <div className="flex flex-row justify-between mt-5">
                  <div><h1 className="text-sm font-bold">TO PAY</h1></div>
                  <div className="pr-7 -mt-1">₹<input className="text-sm font-bold w-16 -mr-3 border-none outline-none" value={count * (location.state.price/2) + 32.45 + 40} disabled={true} name="inputAmount" /></div>
               </div>
                </form>
               </div>
                </div>
            </div>

            {/* Payment */}
            {payment ? <>
              <div className="flex justify-around px-12 -mt-36">
              <div className="px-10 hover:shadow-xl bg-white w-3/4 h-3/4 mb-10">
                <div className={`mt-8 text-lg font-bold`}>
                  <h2>Choose payment method</h2>
                </div>
                <div className="flex flex-row justify-between flex-wrap mb-10">
                  {paymentData.map((val, index) => {
                    return (
                      <>
                        <div className="border border-zinc-200 bg-white w-80 h-40 mt-10 p-4">
                          <div>
                            <img
                              src={val.image}
                              alt="amazon_pay"
                              className="w-11 h-11"
                            />
                          </div>
                          <div>
                            <h2 className="mt-2 font-semibold">{val.name}</h2>
                          </div>
                          <div className="mt-2">
                            <button className={`${color} text-white w-32 h-8 font-bold hover:shadow-xl`} onClick={() => afterPay(val.name)} disabled={disabled}>
                              PAY ₹{count * (location.state.price/2) + 32.45 + 40}
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="mt-40 shadow-xs bg-white ml-4 w-96 h-64 p-4">
                <div className="border border-zinc-300">
                  <div className="flex flex-col pl-4 mt-3">
                    <div className="w-60">
                      <h2 className="font-bold text-sm">
                        Review your order and address details to avoid
                        cancellations
                      </h2>
                    </div>
                    <div className="mt-4">
                      <span className="text-red-500 font-semibold text-xs">
                        Note:{" "}
                      </span>
                      <span className="text-xs">
                        If you cancel within 60 seconds of placing your order, a
                        100% refund will be issued. No refund for cancellations
                        made after 60 seconds.
                      </span>
                    </div>
                    <div className="mt-6 text-xs text-zinc-500">
                      Avoid cancellation as it leads to food wastage.
                    </div>
                    <div className="mt-3 mb-2">
                      <button className="text-sm text-red-500 font-semibold border-t-0 border-l-0 border-r-0 border border-b-red-500">
                        Read cancellation policy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </> : <>
              <div className='flex justify-around px-12'>
            <div className='pl-10 mt-5 shadow-xs bg-white w-3/4 h-24'>
            <div className={`mt-8 text-lg font-bold text-zinc-400`}><h2>Payment</h2></div>
            </div>
            <div className='mt-5 shadow-xs bg-white ml-4 w-96 h-64 p-4'>
                <div className='border border-zinc-300'>
                    <div className='flex flex-col pl-4 mt-3'>
                        <div className='w-60'><h2 className='font-bold text-sm'>Review your order and address details to avoid cancellations</h2></div>
                        <div className='mt-4'><span className='text-red-500 font-semibold text-xs'>Note: </span><span className='text-xs'>If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.</span></div>
                        <div className='mt-6 text-xs text-zinc-500'>Avoid cancellation as it leads to food wastage.</div>
                        <div className='mt-3 mb-2'><button className='text-sm text-red-500 font-semibold border-t-0 border-l-0 border-r-0 border border-b-red-500'>Read cancellation policy</button></div>                       
                    </div>
                </div>
            </div>       
            </div>
            </>}            

            <br /> <br /> <br /> <br />
        </div>             
        <Footer />
    </>
  )
}

export default Cart
