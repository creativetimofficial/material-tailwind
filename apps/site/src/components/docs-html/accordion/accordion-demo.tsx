"use client";

import { useEffect } from "react";

export function AccordionDemo() {
  useEffect(() => {
    const accordionItems = document.querySelectorAll("[data-open]");

    const setAccordionState = (item, isOpen) => {
      const content = item.querySelector("div[data-content]");
      const button = item.querySelector("button");

      item.setAttribute("data-open", isOpen ? "true" : "false");
      content?.setAttribute("data-open", isOpen ? "true" : "false");
      button?.setAttribute("data-open", isOpen ? "true" : "false");

      if (content) {
        content.classList.toggle("hidden", !isOpen);
        content.classList.toggle("h-0", !isOpen);
        content.classList.toggle("block", isOpen);
        content.classList.toggle("h-auto", isOpen);
      }
    };

    const toggleAccordion = (clickedItem) => {
      const isCurrentlyOpen = clickedItem.getAttribute("data-open") === "true";
      accordionItems.forEach((item) =>
        setAccordionState(item, item === clickedItem && !isCurrentlyOpen),
      );
    };

    // Add event listeners for each accordion item
    accordionItems.forEach((item) => {
      const button = item.querySelector("button");
      if (button) {
        button.addEventListener("click", () => toggleAccordion(item));
      }
    });

    // Cleanup function to remove event listeners
    return () => {
      accordionItems.forEach((item) => {
        const button = item.querySelector("button");
        if (button) {
          button.removeEventListener("click", () => toggleAccordion(item));
        }
      });
    };
  }, []);

  return (
    <div className="w-full">
      <div
        id="accordion-demo"
        data-open="true"
        className="items-center justify-between block w-full border-b cursor-pointer group border-surface"
      >
        <button
          data-open="true"
          className="flex items-center justify-between w-full py-3 font-medium text-left text-black dark:text-white"
        >
          Material Tailwind React
          <svg
            width="1.5em"
            height="1.5em"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-4 w-4 group-data-[open=true]:rotate-180"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div
          className="block h-auto pb-3 text-foreground"
          data-content
          data-open="true"
        >
          Material Tailwind is an open-source crafted in Tailwind CSS. Get
          Material Tailwind and take advantage of its free components and
          features that will help you set up your web project quickly.
        </div>
      </div>

      <div
        id="accordion-demo2"
        data-open="false"
        className="items-center justify-between block w-full border-b cursor-pointer group border-surface"
      >
        <button
          data-open="false"
          className="flex items-center justify-between w-full py-3 font-medium text-left text-black dark:text-white"
        >
          Material Tailwind HTML
          <svg
            width="1.5em"
            height="1.5em"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-4 w-4 group-data-[open=true]:rotate-180"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div
          className="hidden h-0 pb-3 text-foreground"
          data-content
          data-open="false"
        >
          Material Tailwind is an open-source crafted in Tailwind CSS. Get
          Material Tailwind and take advantage of its free components and
          features that will help you set up your web project quickly.
        </div>
      </div>

      <div
        id="accordion-demo3"
        data-open="false"
        className="items-center justify-between block w-full border-b cursor-pointer group border-surface"
      >
        <button
          data-open="false"
          className="flex items-center justify-between w-full py-3 font-medium text-left text-black dark:text-white"
        >
          Material Tailwind Vue
          <svg
            width="1.5em"
            height="1.5em"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-4 w-4 group-data-[open=true]:rotate-180"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div
          className="hidden h-0 pb-3 text-foreground"
          data-content
          data-open="false"
        >
          Material Tailwind is an open-source crafted in Tailwind CSS. Get
          Material Tailwind and take advantage of its free components and
          features that will help you set up your web project quickly.
        </div>
      </div>
    </div>
  );
}
