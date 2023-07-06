import { useState, useRef } from "react";

// next.js components
import Image from "next/image";

// @material-tailwind/react components
import {
  Button,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const socials = [
  {
    title: "GitHub",
    desc: "Get it free on Github and please help us with a Star.",
    icon: "fa fa-github",
    bg: "bg-gray-900",
  },
  {
    title: "Discord",
    desc: "Get it free on Github and please help us with a Star",
    icon: "discord",
    bg: "bg-deep-purple-400",
  },
  {
    title: "Twitter",
    desc: "Get it free on Github and please help us with a Star",
    icon: "fa fa-twitter",
    bg: "bg-blue-400",
  },
]

export default function Community() {
  return (
    <section className="pb-12 pt-20">
      <div className="mx-auto mb-10 text-center lg:w-10/12 xl:w-8/12">
        <Typography
          variant="h1"
          className="mb-5 mt-5 relative text-center text-4xl md:text-5xl font-semibold leading-tight tracking-normal text-blue-gray-900"
        >
          Join our community
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 mt-5 relative text-center text-lg md:text-xl font-normal leading-relaxed tracking-normal text-blue-gray-400"
        >
          Visit our communities to see the latest updates and news regarding our product. Whether you have questions, ideas to contribute, or simply want to connect with like-minded individuals, our communities provide a vibrant and supportive environment for your.
        </Typography>
      </div>
      <div className="flex flex-col lg:flex-row items-center mt-16">
        {socials.map((social, i) => (
          <div className="lg:w-4/12 mt-8 lg:mt-0 px-4" key={i}>
            <Card className="bg-white border shadow-md">
              <CardBody>
                <div className={`w-[50px] h-[50px] rounded-lg ${social.bg} flex items-center justify-center`}>
                  {social.icon === "discord" ? 
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 640 512"><path className="fill-white" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg> : 
                    <i className={`${social.icon} text-white text-2xl`}></i>
                  }
                </div>
                <Typography className="mt-5 text-xl text-gray-900 font-semibold">
                  {social.title}
                </Typography>
                <Typography className="text-blue-gray-400 mt-4 font-normal">
                  {social.desc}
                </Typography>
                <Button className="w-full mt-5 border border-blue-gray-100 bg-transparent shadow-none text-blue-gray-900 hover:shadow-blue-gray-500/20 shadow-blue-gray-500/20 capitalize text-md font-medium">
                  {social.icon === "discord" ? "Join" : "Visit" }
                </Button>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
      <div className="lg:w-full flex lg:block justify-center lg:flex-row px-4 mt-8">
        <Card className="bg-white border shadow-md">
          <CardBody className="flex py-0">
            <div className="lg:w-4/12 py-6">
              <div className="w-[50px] h-[50px] rounded-lg bg-gray-900 flex items-center justify-center">
                <i className="fa fa-group text-white"></i>
              </div>
              <Typography className="mt-5 text-xl text-gray-900 font-semibold">
                Community Contributors
              </Typography>
              <Typography className="text-blue-gray-400 mt-4 font-normal">
                Join our community of open-source contribuitors.
              </Typography>
              <Button className="w-full mt-5 border border-blue-gray-100 bg-transparent shadow-none text-blue-gray-900 hover:shadow-blue-gray-500/20 shadow-blue-gray-500/20 capitalize text-md font-medium">
                Join
              </Button>
            </div>

            <div className="lg:w-6/12 ml-auto hidden lg:block">
              <img src="/img/community.png" alt="community" className="w-full" />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
