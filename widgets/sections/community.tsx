import Image from "next/image";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import Link from "next/link";

const DATA = [
  {
    title: "Github",
    bg: "bg-primary",
    icon: "github",
    link: "https://www.github.com/creativetimofficial?ref=material-tailwind",
    desc: "Get it free on Github and please help us spread the news with a Star.",
  },
  {
    title: "Discord",
    bg: "bg-indigo-400",
    icon: "discord",
    link: "https://discord.com/invite/gxtg2rJa?ref=material-tailwind",
    desc: "For issues, feature requests and contribute.",
  },
  {
    title: "Twitter",
    bg: "bg-blue-500",
    icon: "twitter",
    link: "https://www.twitter.com/creativetim?ref=material-tailwind",
    desc: "For announcements, articles, and other resources.",
  },
];

export function Community() {
  return (
    <section className="px-4 pt-48 pb-24">
      <div className="container mx-auto">
        <div className="mx-auto my-20 text-center lg:w-10/12 xl:w-8/12">
          <Typography
            variant="h1"
            className="my-5 text-center text-4xl font-semibold text-primary md:text-5xl"
          >
            Join our community
          </Typography>
          <Typography
            variant="paragraph"
            className="my-5 text-center text-lg font-normal !text-gray-600 md:text-xl"
          >
            Visit our communities to see the latest updates and news regarding
            our product. Whether you have questions, ideas to contribute, or
            simply want to connect with like-minded individuals, our communities
            provide a vibrant and supportive environment for your.
          </Typography>
        </div>
        <div className="mt-28 grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          {DATA.map(({ bg, title, desc, icon, link }, i) => (
            <Card key={i} className="border-blue border-[1.5px]">
              <CardBody className="flex h-full flex-col justify-between">
                <div>
                  <div
                    className={`${bg} flex h-14 w-14  items-center justify-center rounded-lg`}
                  >
                    <i className={`fab fa-${icon} text-2xl text-white`} />
                  </div>
                  <Typography
                    variant="h5"
                    className="mt-6 mb-1 font-semibold text-primary"
                  >
                    {title}
                  </Typography>
                  <Typography className="mb-4 font-normal text-gray-600">
                    {desc}
                  </Typography>
                </div>
                <Link href={link} target="_blank">
                  <Button
                    color="blue-gray"
                    variant="outlined"
                    fullWidth
                    className="border-[1.5px] border-blue-gray-50 bg-white !text-base font-medium capitalize text-primary focus:ring-transparent"
                  >
                    {title === "Discord" ? "Join" : "Visit"}
                  </Button>
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
        <Card
          color="white"
          className="relative mt-12 overflow-hidden border-[1.5px] border-blue-gray-50"
        >
          <CardBody>
            <div className="relative z-10 max-w-xs">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg !bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-12 w-12 p-2 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <Typography
                variant="h5"
                className="mt-4 font-semibold !text-primary"
              >
                Community Contributors
              </Typography>
              <Typography className="mt-2 !font-normal text-gray-600">
                Join our community of open-source <br /> contribuitors.
              </Typography>
              <Link href="https://www.github.com/creativetimofficial?ref=material-tailwind">
                <Button
                  fullWidth
                  size="lg"
                  color="gray"
                  className="mt-8 bg-primary text-base font-medium capitalize"
                >
                  Join
                </Button>
              </Link>
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2">
              <Image
                alt="community"
                src="https://docs.material-tailwind.com/svg/community.svg"
                width={500}
                height={500}
                className="scale-[1.30] opacity-25 lg:opacity-100"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Community;
