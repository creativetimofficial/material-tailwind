import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Alert,
  Button,
  Chip,
  Typography
} from "@material-tailwind/react";
import CountDown from "./count-down";

const OFFER_STORAGE_KEY = "hideOfferBar";

export function OfferBar() {
  
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const shouldHide = localStorage.getItem(OFFER_STORAGE_KEY);
    if (!shouldHide) {
      setIsVisible(true);
    }

    const hideUntil = Number(shouldHide);
    const now = new Date().getTime();
    if (hideUntil && now > hideUntil) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // add 2 days
    const hideUntil = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;
    localStorage.setItem(OFFER_STORAGE_KEY, hideUntil.toString());
  };

 
  function Icon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
    );
  }

  return (
    <>
    {isVisible && (
      <Alert className="w-full bg-deep-orange-500 justify-center rounded-none">
        
        <div className="flex flex-wrap items-center justify-center !text-white">
          Exclusive Black Friday Bundle for Developers and Designers - 80% OFF  ⏰ Hurry up!
          <CountDown type="plain" />
          <Link href="/blocks" className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none ml-8">
              View Offer
          </Link>
          <button className="font-bold ml-10 mb-0 !text-white"
             onClick={() => handleClose()}
            >
              <Icon />
          </button>
        </div>
      </Alert>
    )}
    </>
  );
}

export default OfferBar;