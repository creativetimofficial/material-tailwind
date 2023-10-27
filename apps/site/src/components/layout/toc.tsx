"use client";
import React from "react";
import Link from "next/link";
import { useToc } from "@hooks";
import clsx from "clsx";
import {
  ArrowUpCircle,
  Discord,
  Donate,
  EditPencil,
  GitPullRequest,
  Star,
} from "iconoir-react";
import { useEventListener } from "usehooks-ts";

interface ListItemProps {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

function ListItem({ href, icon: Icon, children }: ListItemProps) {
  return (
    <li>
      <Link
        href={href}
        target="_blank"
        className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200"
      >
        <Icon className="h-[18px] w-[18px] stroke-[1.5]" />
        {children}
      </Link>
    </li>
  );
}

interface TocItemProps {
  id: string;
  isVisible?: boolean;
  isSubHeading?: boolean;
  children: React.ReactNode;
}

function TocItem({ id, isSubHeading, isVisible, children }: TocItemProps) {
  return (
    <li
      className={
        isSubHeading
          ? "ml-3 border-l border-gray-200 py-1 dark:border-gray-900"
          : ""
      }
    >
      <Link
        href={`#${id}`}
        className={clsx(
          "block text-sm transition-colors duration-300 hover:text-gray-950 dark:hover:text-gray-200",
          {
            "font-normal text-gray-500 dark:text-gray-400": !isVisible,
            "font-medium text-blue-500 dark:text-blue-500": isVisible,
            "border-blue-500": isVisible && isSubHeading,
            "px-2 py-1.5": !isSubHeading,
            "-translate-x-px border-l border-transparent py-0.5 pl-3 pr-2 hover:border-gray-950 dark:hover:border-gray-200":
              isSubHeading,
          },
        )}
      >
        {children}
      </Link>
    </li>
  );
}

export function Toc({
  contentRef,
}: {
  contentRef: React.MutableRefObject<HTMLDivElement>;
}) {
  const { toc, activeToc } = useToc(contentRef);
  const [isScrolled, setIsScrolled] = React.useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToTopOnEnter(event: React.KeyboardEvent<HTMLSpanElement>) {
    if (event.key === "Enter") {
      scrollToTop();
    }
  }

  function onScroll() {
    if (window.scrollY >= 200) {
      setIsScrolled(true);
    } else if (window.scrollY < 200) {
      setIsScrolled(false);
    }
  }

  useEventListener("scroll", onScroll);

  function getToc() {
    return toc.map(({ id, text, subHeadings }, idx) => {
      const noActive = !activeToc;
      const firstActive = idx === 0 && noActive;
      const activeHeading = noActive ? firstActive : activeToc === id;

      if (subHeadings) {
        return (
          <React.Fragment key={id}>
            <TocItem id={id} isVisible={activeHeading}>
              {text}
            </TocItem>
            {subHeadings.map(({ id: subID, text: subText }) => (
              <TocItem
                key={subID}
                id={subID}
                isVisible={activeToc === subID}
                isSubHeading
              >
                {subText}
              </TocItem>
            ))}
          </React.Fragment>
        );
      }

      return (
        <TocItem key={id} id={id} isVisible={activeHeading}>
          {text}
        </TocItem>
      );
    });
  }

  return (
    <div className="fixed bottom-0 right-[max(0px,calc(50%-42rem))] top-[65px] z-20 w-60 overflow-y-scroll pb-10">
      <div className="pointer-events-none sticky top-0 z-30 h-10 bg-gradient-to-b from-white from-50% to-transparent dark:from-gray-950" />
      <ul className="border-b border-gray-200 pb-4 dark:border-gray-900">
        <li className="p-2 text-sm font-medium text-gray-950 dark:text-gray-100">
          On this page
        </li>
        <ul className="mx-0.5">{getToc()}</ul>
      </ul>
      <ul
        className={clsx(
          "mx-0.5 border-b py-4 pr-2 transition-colors duration-300",
          {
            "border-gray-200 dark:border-gray-900": isScrolled,
            "border-transparent": !isScrolled,
          },
        )}
      >
        <ListItem href="#" icon={EditPencil}>
          Edit this page on GitHub
        </ListItem>
        <ListItem href="#" icon={Star}>
          Give us star on GitHub
        </ListItem>
        <ListItem href="#" icon={Donate}>
          Donate on Open Collective
        </ListItem>
        <ListItem href="#" icon={GitPullRequest}>
          Read contribution guide
        </ListItem>
        <ListItem href="#" icon={Discord}>
          Join Discord Community
        </ListItem>
      </ul>
      <div
        className={clsx("mx-0.5 pt-4 transition-all duration-300", {
          "translate-y-3 opacity-0": !isScrolled,
          "translate-y-0 opacity-100": isScrolled,
        })}
      >
        <li
          role="button"
          tabIndex={0}
          onClick={scrollToTop}
          onKeyDown={scrollToTopOnEnter}
          className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <ArrowUpCircle className="h-[18px] w-[18px] stroke-[1.5]" />
          Scroll to top
        </li>
      </div>
    </div>
  );
}

export default Toc;
