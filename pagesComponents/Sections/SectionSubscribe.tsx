import {
  Typography,
  Button,
  Input
} from "../../packages/material-tailwind-react/src";

export default function SectionSubscribe() {
  return (
    <div
      className="w-4/5 md:w-3/5 rounded-xl -mt-40 mb-20 mx-auto relative z-90"
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
          <form
            action="https://material-tailwind.us1.list-manage.com/subscribe/post?u=e97df4875fc1b2fb28f609b88&amp;id=628d9b1722"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            className="block md:flex mt-4 lg:mt-0"
          >
            <div className="w-full md:w-8/12">
              <Input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                label="Enter your email"
                size="lg"
                className="text-white/80"
                labelProps={{
                  className:
                    "peer-placeholder-shown:text-white/80 text-white/80"
                }}
                required
              />
            </div>
            <Button
              variant="gradient"
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="mt-3 md:mt-0 md:ml-3 w-full md:w-auto"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
