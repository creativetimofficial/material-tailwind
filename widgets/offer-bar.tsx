import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Alert,
  Button,
  Chip,
  Typography
} from "@material-tailwind/react";

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
      <Alert variant="ghost" className="w-full bg-blue-gray-50 justify-center rounded-none">
        
        <div className="flex flex-wrap items-center justify-center !text-blue-gray-900">
            <Link href="/blocks" className="font-medium m-0 flex items-center">
              <Chip variant="outlined" value="NEW" className="mr-2 !text-blue-gray-900 py-1 px-2" /> Material Tailwind Blocks</Link>, a comprehensive compilation of <Typography className="font-bold mx-1">170+</Typography>
            blocks, now available for your use.&nbsp;
            
            <Link href="/blocks" className="font-bold">
              Check out 
              &rarr;
            </Link>
            <button className="font-bold ml-10 mb-0 !text-grey-900"
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