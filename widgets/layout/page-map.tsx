import React from "react";
import Image from "next/image";
import {
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tabs,
  TabsHeader,
  Tab,
  Textarea,
  IconButton,
  CardBody,
  Card,
  CardHeader,
} from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function PageMap({ type, frontMatter }) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [hash, setHash] = React.useState(frontMatter[0]);
  const [feedbackType, setFeedbackType] = React.useState("issue");
  const frameWorkType = pathname.includes("/docs/react") ? "react" : "html";

  const handleOpen = () => setOpen(!open);

  React.useEffect(() => {
    const hashLink = window.location.hash.replace("#", "");

    setHash(hashLink);
  }, []);

  React.useEffect(() => {
    window.addEventListener("hashchange", () => {
      const hashLink = window.location.hash.replace("#", "");

      setHash(hashLink);
    });
  }, []);

  return (
    <aside className="sticky top-14 ml-auto hidden h-screen w-64 pb-4 pt-6 lg:block">
      <div className="h-screen w-64 overflow-y-scroll pb-40">
        <Typography
          variant="small"
          className="font-bold capitalize text-primary"
        >
          On This Page
        </Typography>
        <ul className="mb-8 list-none pt-2">
          {frontMatter.navigation &&
            frontMatter.navigation.map((el, key) => (
              <li key={key}>
                <a
                  href={`#${el}`}
                  className={`relative list-item w-full py-1 text-sm capitalize transition-colors hover:text-primary focus:text-primary ${
                    hash === el
                      ? "font-medium text-blue-500"
                      : "font-normal text-gray-600"
                  }`}
                >
                  {el.includes("-") ? el.split("-").join(" ") : el}
                </a>
              </li>
            ))}
        </ul>

        <Typography
          variant="small"
          className="font-bold capitalize text-primary"
        >
          Contribute
        </Typography>
        <ul className="mb-8 list-none pt-2">
          <li>
            <a
              target="_blank"
              href="https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=material-tailwind"
              className="relative list-item w-full py-1 text-sm capitalize text-gray-600 transition-colors hover:text-primary focus:text-primary"
              rel="noreferrer"
            >
              Contributor guides
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href={`https://www.github.com/creativetimofficial/material-tailwind/blob/main/documentation/${type}/${frontMatter.github}.mdx?ref=material-tailwind`}
              className="relative list-item w-full py-1 text-sm capitalize text-gray-600 transition-colors hover:text-primary focus:text-primary"
              rel="noreferrer"
            >
              Edit this page
            </a>
          </li>
          {/* <li>
            <a
              href="#"
              className="relative list-item w-full py-1 text-sm capitalize text-gray-600 transition-colors hover:text-primary focus:text-primary"
            >
              Translate this page
            </a>
          </li> */}
        </ul>

        <Typography
          variant="small"
          className="font-bold capitalize text-primary"
        >
          Community
        </Typography>
        <ul className="mb-8 list-none pt-2">
          <li>
            <a
              target="_blank"
              href="https://discord.com/invite/gxtg2rJa?ref=material-tailwind"
              className="relative list-item w-full py-1 text-sm capitalize text-gray-600 transition-colors hover:text-primary focus:text-primary"
              rel="noreferrer"
            >
              Join us on Discord
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.creative-tim.com/blog?ref=material-tailwind"
              className="relative list-item w-full py-1 text-sm capitalize text-gray-600 transition-colors hover:text-primary focus:text-primary"
              rel="noreferrer"
            >
              Read blog posts
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://opencollective.com/material-tailwind?ref=material-tailwind"
              className="relative list-item w-full py-1 text-sm capitalize text-gray-600 transition-colors hover:text-primary focus:text-primary"
            >
              Open Collective
            </a>
          </li>
          {/* <li className="mt-4">
            <Button
              size="sm"
              variant="outlined"
              onClick={handleOpen}
              className="relative inline-flex items-center gap-3 border-[1.5px] border-blue-gray-50 bg-white text-sm font-medium capitalize text-primary focus:ring-transparent"
            >
              give us feedback
            </Button>
          </li> */}
        </ul>
        <Typography
          variant="small"
          className="font-bold capitalize text-primary"
        >
          Frameworks
        </Typography>
        <ul className="mb-8 list-none pt-2">
          <li className="mb-3">
            <Link
              href="/docs/react/installation"
              className={`${
                frameWorkType === "react"
                  ? "pointer-events-none"
                  : "pointer-events-auto opacity-70 transition-opacity duration-300 hover:opacity-100"
              } flex items-center gap-2`}
            >
              <Image
                src="https://docs.material-tailwind.com/svg/react.svg"
                alt="react"
                width={48}
                height={48}
                className="h-5 w-5"
              />
              <Typography variant="small" className="font-medium text-primary">
                React
              </Typography>
            </Link>
          </li>
          <li>
            <Link
              href="/docs/html/installation"
              className={`${
                frameWorkType === "html"
                  ? "pointer-events-none"
                  : "pointer-events-auto opacity-70 transition-opacity duration-300 hover:opacity-100"
              } flex items-center gap-2`}
            >
              <Image
                src="https://docs.material-tailwind.com/svg/html.svg"
                alt="html"
                width={48}
                height={48}
                className="h-5 w-5"
              />
              <Typography variant="small" className="font-medium text-primary">
                HTML
              </Typography>
            </Link>
          </li>
          <li className="mt-8">
            <Link
              href="https://github.com/creativetimofficial/material-tailwind?ref=material-tailwind"
              target="_blank"
            >
              <Button
                size="sm"
                variant="outlined"
                className="relative inline-flex items-center gap-3 border-[1.5px] border-blue-gray-50 bg-white text-sm font-medium capitalize text-primary focus:ring-transparent"
              >
                <i className="fab fa-github text-base text-primary" />
                Give us Star
              </Button>
            </Link>
          </li>
        </ul>
        <Link
          href="https://www.material-tailwind.com/roots-of-ui-ux-design?ref=material-tailwind"
          target="_blank"
        >
          <Card
            color="transparent"
            shadow={false}
            className="border border-blue-gray-50"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="mx-4 mb-0 mt-4"
            >
              <Image
                src="https://docs.material-tailwind.com/image/ui-ux-book.jpg"
                alt="book"
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className="p-4">
              <Typography variant="h6" color="blue-gray">
                Roots of UI/UX Design
              </Typography>
              <Typography
                variant="small"
                className="mb-2 block font-normal !text-gray-600"
              >
                By Creative Tim
              </Typography>
              <Typography
                variant="small"
                className="font-normal !text-gray-600"
              >
                Learn to Develop Intuitive Web Experiences
              </Typography>
            </CardBody>
          </Card>
        </Link>
      </div>
      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="relative justify-center p-4 text-center"
      >
        <IconButton
          size="sm"
          color="gray"
          variant="text"
          onClick={handleOpen}
          className="!absolute right-1 top-1 rounded-full text-gray-600 hover:text-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
        <DialogHeader className="flex-col justify-center text-center">
          What is on your mind?
          <Tabs value={feedbackType} className="mt-8 w-full max-w-[280px]">
            <TabsHeader
              className="rounded-none border-b border-transparent bg-transparent p-0"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-primary shadow-none rounded-none",
              }}
            >
              <Tab
                value="issue"
                onClick={() => setFeedbackType("issue")}
                className={`px-0 ${
                  feedbackType === "issue"
                    ? "font-medium text-primary"
                    : "text-gray-600"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="mr-2 inline-block h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
                Issue
              </Tab>
              <Tab
                value="idea"
                onClick={() => setFeedbackType("idea")}
                className={
                  feedbackType === "idea"
                    ? "font-medium text-primary"
                    : "text-gray-600"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="-mt-1 mr-2 inline-block h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
                Idea
              </Tab>
              <Tab
                value="other"
                onClick={() => setFeedbackType("other")}
                className={
                  feedbackType === "other"
                    ? "font-medium text-primary"
                    : "text-gray-600"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="-mt-1 mr-2 inline-block h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
                Other
              </Tab>
            </TabsHeader>
          </Tabs>
        </DialogHeader>
        <DialogBody>
          <Textarea
            rows={7}
            placeholder="What do you want us to know?"
            className="!w-full !border-[1.5px] !border-blue-gray-50 bg-white text-blue-gray-800 ring-4 ring-transparent placeholder:text-blue-gray-600 focus:!border-primary focus:!border-t-primary"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </DialogBody>
        <DialogFooter className="grid grid-cols-1 items-center gap-2 pt-0 sm:grid-cols-2">
          <Button
            variant="outlined"
            className="relative w-full items-center gap-3 border-[1.5px] border-blue-gray-50 bg-white text-sm font-medium capitalize text-primary focus:ring-transparent"
          >
            Send Feedback
          </Button>
          <Button
            color="gray"
            variant="filled"
            className="w-full bg-primary text-sm font-medium capitalize"
          >
            <i className="fab fa-github mr-2 translate-y-px text-lg" /> Create
            Github Issue
          </Button>
        </DialogFooter>
      </Dialog>
    </aside>
  );
}
