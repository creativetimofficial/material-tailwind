import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Alert, Button, Chip, Typography } from "@material-tailwind/react";

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    );
  }

  return (
    <>
      {isVisible && (
        <Alert
          variant="ghost"
          className="w-full justify-center rounded-none bg-gray-900 text-white"
        >
          {/* <div className="relative flex flex-wrap items-center justify-center gap-2 !text-blue-gray-900">
            <div className="flex items-center gap-2">
              <Link href="/v3/pro" className="hover:text-primary transition-colors" target="_blank">
              🔥 Get <span className="font-bold">290+ PRO Blocks for v3</span> and receive complimentary access to v2 PRO Blocks.
              </Link>
             
            </div>
          </div>
          <button
              className="absolute right-4 top-1/2 -translate-y-1/2 font-bold !text-grey-900 hover:text-primary transition-colors"
              onClick={() => handleClose()}
            >
              <Icon />
            </button> */}
            <div className="relative flex flex-wrap items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <Link href="https://www.creative-tim.com/ui/black-friday?utm_source=offer_bar&utm_medium=material-tailwind&utm_campaign=black_friday_2025" className="hover:text-primary transition-colors" target="_blank">
              🔥🔥🔥  <span className="font-bold">Black Friday Offer 80% OFF</span> shadcn/ui Blocks, n8n Templates, Material Tailwind v2 + v3, UI/UX Book and more...
              </Link>
             
            </div>
          </div>
          <button
              className="absolute right-4 top-1/2 -translate-y-1/2 font-bold !text-grey-900 hover:text-primary transition-colors"
              onClick={() => handleClose()}
            >
              <Icon />
            </button>
        </Alert>
      )}
    </>
  );
}

export default OfferBar;


{/* <div className="flex flex-wrap items-center justify-center !text-blue-gray-900">
  <Link href="/blocks" className="m-0 flex items-center font-medium">
    <Chip
      variant="outlined"
      value="NEW"
      className="mr-2 px-2 py-1 !text-blue-gray-900"
    />{" "}
    Material Tailwind Blocks
  </Link>
  , a comprehensive compilation of{" "}
  <Typography className="mx-1 font-bold">230+</Typography>
  blocks, now available for your use.&nbsp;
  <Link href="/blocks" className="font-bold">
    Check out &rarr;
  </Link>
  <button
    className="!text-grey-900 mb-0 ml-10 font-bold"
    onClick={() => handleClose()}
  >
    <Icon />
  </button>
</div> */}