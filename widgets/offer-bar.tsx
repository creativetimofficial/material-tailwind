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
          className="w-full justify-center rounded-none bg-blue-gray-50"
        >
          <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-center !tw-text-blue-gray-900">
            🔥 The Wait Is Over! Pre-Order the Latest <span className="tw-font-bold mx-1">Material Tailwind V3 PRO</span> Now&nbsp;
            <Link href="/v3/preorder" className="tw-font-bold">
              Check out
              <i className="fa-solid fa-chevron-right tw-ml-1.5 tw-text-xs"></i>
            </Link>
            <button
              className="tw-font-bold tw-ml-10 tw-mb-0 !tw-text-grey-900"
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