import React from "react";

// @components
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

// @icons
import { CpuChipIcon } from "@heroicons/react/24/solid";

export function CryptoLogin() {
  return (
    <Card
      shadow={false}
      className="border border-gray-300 py-8 md:px-24 md:py-14"
    >
      <CardHeader shadow={false} floated={false} className="text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:text-4xl"
        >
          Web3 Login Simplified
        </Typography>
        <Typography className="text-[18px] font-normal !text-gray-600 md:max-w-sm">
          Enjoy quick and secure access to your accounts on various Web3
          platforms.
        </Typography>
      </CardHeader>
      <CardBody>
        <form action="#" className="flex flex-col gap-4 md:mt-12">
          <div>
            <label htmlFor="email">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 block font-medium"
              >
                Your Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="!w-full !border-t-blue-gray-200 placeholder:!opacity-100 focus:!border-t-primary"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <Button size="lg" color="gray" fullWidth>
            continue
          </Button>
          <Button
            variant="outlined"
            size="lg"
            className="flex h-12 items-center justify-center gap-2 border-blue-gray-200"
            fullWidth
          >
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt="google"
              className="h-6 w-6"
            />{" "}
            sign in with google
          </Button>
          <Button
            variant="outlined"
            size="lg"
            className="flex h-12 items-center justify-center gap-2 border-blue-gray-200"
            fullWidth
          >
            <CpuChipIcon className="h-6 w-6" />
            Wallet Authentication
          </Button>
          <Typography
            variant="small"
            className="mx-auto max-w-[19rem] text-center !font-medium !text-gray-600"
          >
            Upon signing in, you consent to abide by our{" "}
            <a href="#" className="text-gray-900">
              Terms of Service
            </a>{" "}
            &{" "}
            <a href="#" className="text-gray-900">
              Privacy Policy.
            </a>
          </Typography>
        </form>
      </CardBody>
    </Card>
  );
}

export default CryptoLogin;
