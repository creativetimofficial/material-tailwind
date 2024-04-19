"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
import { Card, Typography } from "@material-tailwind/react";

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
        className="flex items-center gap-2 px-2 py-1.5 text-sm text-foreground transition-colors duration-300 hover:text-primary"
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
    <li className={isSubHeading ? "border-sureface ml-3 border-l py-1" : ""}>
      <Link
        href={`#${id}`}
        className={clsx(
          "block text-sm transition-colors duration-300 hover:text-primary",
          {
            "font-normal text-foreground": !isVisible,
            "font-medium text-info": isVisible,
            "border-info": isVisible && isSubHeading,
            "px-2 py-1": !isSubHeading,
            "-translate-x-px border-l border-transparent py-0.5 pl-3 pr-2 hover:border-primary":
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
    <div className="sticky bottom-0 right-[max(0px,calc(50%-42rem))] top-[65px] z-20 hidden h-[calc(100vh-70px)] w-60 overflow-y-scroll pb-10 lg:block">
      <div className="pointer-events-none sticky top-0 z-30 h-10 bg-gradient-to-b from-background from-50% to-transparent" />
      <ul className="border-b border-surface pb-4">
        <li className="p-2 text-sm font-medium text-primary">On this page</li>
        <ul className="mx-0.5">{getToc()}</ul>
      </ul>
      <ul
        className={clsx(
          "mx-0.5 border-b py-4 pr-2 transition-colors duration-300",
          {
            "border-surface": isScrolled,
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
          className="flex items-center gap-2 px-2 py-1.5 text-sm text-foreground transition-colors duration-300 hover:text-primary"
        >
          <ArrowUpCircle className="h-[18px] w-[18px] stroke-[1.5]" />
          Scroll to top
        </li>
      </div>
      <Card
        as={Link}
        target="_blank"
        variant="outline"
        color="secondary"
        className="mt-4 grid"
        href="https://www.material-tailwind.com/roots-of-ui-ux-design?ref=material-tailwind"
      >
        <Card.Header>
          <Image
            src="/book.webp"
            alt="book"
            width={512}
            height={512}
            className="h-full w-full object-cover"
          />
        </Card.Header>
        <Card.Body>
          <Typography color="primary" className="font-bold">
            Roots of UI/UX Design
          </Typography>
          <Typography type="small" className="text-foreground">
            By Creative Tim
          </Typography>
          <Typography type="small" className="mt-2 block text-foreground">
            Learn to Develop Intuitive Web Experiences
          </Typography>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Toc;
