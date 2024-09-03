"use client";

import { useEffect } from "react";

export function AccordionAllOpen() {
  useEffect(() => {
    const accordionIds = ["accordion1", "accordion2", "accordion3"];

    accordionIds.forEach((id) => {
      const accordion = document.getElementById(id);
      if (!accordion) return; 

      const button = accordion.querySelector("button");
      const content = accordion.querySelector("div[data-content]");

      // open accordions by default
      accordion.setAttribute("data-open", "true");
      button?.setAttribute("data-open", "true");
      content?.setAttribute("data-open", "true");

      if (content) {
        content.classList.remove("hidden", "h-0");
        content.classList.add("block", "h-auto");
      }

      // Click listener to toggle accordion state
      accordion.addEventListener("click", function () {
        const isOpen = this.getAttribute("data-open") === "true";
        const newOpenState = !isOpen;

        this.setAttribute("data-open", newOpenState ? "true" : "false");
        button?.setAttribute("data-open", newOpenState ? "true" : "false");
        content?.setAttribute("data-open", newOpenState ? "true" : "false");

        if (content) {
          if (newOpenState) {
            content.classList.remove("hidden", "h-0");
            content.classList.add("block", "h-auto");
          } else {
            content.classList.remove("block", "h-auto");
            content.classList.add("hidden", "h-0");
          }
        }
      });
    });
  }, []);
  return (
    <div className="w-full">
      <div
        id="accordion1"
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
        id="accordion2"
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
        id="accordion3"
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
