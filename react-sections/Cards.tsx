import Image from "next/image";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "../packages/material-tailwind-react/src";
import { Typography } from "../packages/material-tailwind-react/src";
import { Button } from "../packages/material-tailwind-react/src";
import { Input } from "../packages/material-tailwind-react/src";

export default function Cards() {
  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-12">Cards</h2>
      <div className="flex items-end gap-8">
        <Card className="w-96">
          <CardHeader className="h-56" floated={false} shadow={false}>
            <Image
              src="/test-img.jpeg"
              alt="Hello"
              layout="fill"
              objectFit="cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-grey" className="mb-2">
              Card Title
            </Typography>
            <Typography variant="paragraph" color="grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              voluptatum voluptas. Provident, porro nostrum? Explicabo saepe est
              iusto repellendus itaque quis.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient">Learn More</Button>
          </CardFooter>
        </Card>
        <Card className="w-96">
          <CardHeader className="h-56">
            <Image
              src="/test-img.jpeg"
              alt="Hello"
              layout="fill"
              objectFit="cover"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography
              variant="h5"
              className="mb-2 font-medium !text-[#344767] hover:!text-light-blue-500 cursor-pointer transition-colors duration-300"
            >
              Cozy 5 Stars Apartment
            </Typography>
            <Typography variant="paragraph" className="text-[#7b809a]">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to Naviglio where you can enjoy the main night life
              in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter divider className="flex items-center justify-between">
            <Typography
              variant="paragraph"
              className="font-normal text-[#7b809a]"
            >
              $899/night
            </Typography>
            <Typography
              variant="paragraph"
              className="flex gap-2 text-[#7b809a]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[18px] w-[18px] mt-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Barcelona, Spain
            </Typography>
          </CardFooter>
        </Card>
        <Card className="w-96">
          <CardHeader
            className="px-4 pt-7 pb-8 text-center"
            variant="gradient"
            color="light-blue"
          >
            <Typography variant="h3" color="white">
              Register
            </Typography>
          </CardHeader>
          <CardBody className="mt-6 px-8 space-y-8">
            <Input
              variant="standard"
              size="lg"
              label="First Name"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
            <Input
              type="email"
              variant="standard"
              size="lg"
              label="Email"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              }
            />
            <Input
              type="password"
              variant="standard"
              size="lg"
              label="Password"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
          </CardBody>
          <CardFooter className="text-center mb-4">
            <Button variant="gradient">Get Started</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
