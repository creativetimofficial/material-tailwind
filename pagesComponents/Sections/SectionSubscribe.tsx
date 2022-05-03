import {
  Typography,
  Button,
  Input
} from "../../packages/material-tailwind-react/src";

export default function SectionSubscribe() {
  return (
    <div
      className="w-4/5 md:w-3/5 rounded-xl -mt-28 mx-auto z-90 relative"
      style={{ backgroundImage: "url('/img/subscribe.jpg')" }}
    >
      <div className="items-center flex flex-wrap p-5 md:p-10">
        <div className="w-full lg:w-6/12 px-4">
          <Typography
            variant="h2"
            color="white"
            className="!font-sans font-black tracking-normal mb-2"
          >
            Sign up for our newsletter
          </Typography>
          <Typography color="white" className="opacity-80">
            Join our newsletter and get news in your inbox every week! We hate
            spam too, so no worries about this.
          </Typography>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="block md:flex mt-4 lg:mt-0">
            <div className="w-full md:w-8/12">
              <Input
                type="email"
                label="Enter your email"
                size="lg"
                className="text-white/80"
                labelProps={{
                  className:
                    "peer-placeholder-shown:text-white/80 text-white/80"
                }}
              />
            </div>
            <Button
              variant="gradient"
              className="mt-3 md:mt-0 md:ml-3 w-full md:w-auto"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
