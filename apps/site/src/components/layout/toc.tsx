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
  Journal,
  Star,
} from "iconoir-react";
import { useEventListener } from "usehooks-ts";
import { Card, Typography } from "@material-tailwind/react";
import { twMerge } from "tailwind-merge";
import { ThemeProvider } from "./theme-provider";

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
        className="flex items-center gap-2 py-1.5 text-sm text-foreground transition-colors duration-300 hover:text-orange-500"
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
    <li className={twMerge(isSubHeading && `ml-1.5 border-l border-surface`)}>
      <Link
        href={`#${id}`}
        className={twMerge(
          clsx(
            "block text-sm transition-colors duration-300 hover:text-orange-500",
            {
              "text-foreground": !isVisible,
              "font-medium text-orange-500": isVisible,
              "py-1.5": !isSubHeading,
              "-translate-x-px border-l border-transparent py-1 pl-3 pr-1 hover:border-primary":
                isSubHeading,
              "border-primary": isVisible && isSubHeading,
            },
          ),
        )}
      >
        {(children as any)?.replaceAll("#", "")}
      </Link>
    </li>
  );
}

export function Toc({
  contentRef,
  githubPage,
}: {
  contentRef: React.MutableRefObject<HTMLDivElement>;
  githubPage?: string;
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
    <ThemeProvider>
      <div className="sticky bottom-0 right-[max(0px,calc(50%-42rem))] top-[105px] z-1 hidden h-[calc(100vh-4px)] w-60 shrink-0 overflow-y-auto bg-background pb-24 pt-8 xl:block">
        <div className="fixed top-[100px] h-14 w-full bg-gradient-to-b from-background to-transparent" />
        <ul className="border-b border-surface pb-4">
          <li className="py-2 text-sm font-medium text-black dark:text-white">
            On this page
          </li>
          <ul>{getToc()}</ul>
        </ul>
        <ul
          className={clsx("border-b py-4 transition-colors duration-300", {
            "border-surface": isScrolled,
            "border-transparent": !isScrolled,
          })}
        >
          {/* <ListItem
          href={`https://github.com/creativetimofficial/material-tailwind/blob/main/apps/site/src/app/docs/content/react/${githubPage}.mdx`}
          icon={EditPencil}
        >
          Edit this page on GitHub
        </ListItem> */}
          <ListItem
            href="https://github.com/creativetimofficial/material-tailwind"
            icon={Star}
          >
            Give us star on GitHub
          </ListItem>
          <ListItem
            href="https://opencollective.com/material-tailwind?ref=material-tailwind"
            icon={Donate}
          >
            Donate on Open Collective
          </ListItem>
          <ListItem
            href="https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md"
            icon={GitPullRequest}
          >
            Read contribution guide
          </ListItem>
          <ListItem href="https://discord.com/invite/FhCJCaHdQa" icon={Discord}>
            Join Discord community
          </ListItem>
          <ListItem href="https://tally.so/r/3NLRQ0" icon={Journal}>
            Write us your feedback
          </ListItem>
        </ul>
        <div
          className={clsx("pt-4 transition-all duration-300", {
            "translate-y-3 opacity-0": !isScrolled,
            "translate-y-0 opacity-100": isScrolled,
          })}
        >
          <li
            role="button"
            tabIndex={0}
            onClick={scrollToTop}
            onKeyDown={scrollToTopOnEnter}
            className="flex items-center gap-2 py-1.5 text-sm text-foreground transition-colors duration-300 hover:text-orange-500"
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
              src="https://rawcdn.githack.com/creativetimofficial/public-assets/master/ct-assets/book.webp"
              alt="book"
              width={512}
              height={512}
              className="h-full w-full object-cover"
            />
          </Card.Header>
          <Card.Body>
            <Typography color="default" className="font-bold">
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
        <div className="sticky -bottom-24 h-14 w-full bg-gradient-to-t from-background to-transparent" />
      </div>
    </ThemeProvider>
  );
}

export default Toc;
