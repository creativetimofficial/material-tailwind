import { Typography, Input, Button } from "@material-tailwind/react";

export function Subscribe() {
  return (
    <section className="px-4">
      <div className="container mx-auto">
        <div className="z-90 relative mx-auto mb-20 w-full rounded-xl bg-gradient-to-r from-blue-500 via-light-blue-500 to-deep-purple-600">
          <div className="flex flex-wrap items-center p-10 lg:p-16">
            <div className="w-full px-4 lg:w-5/12">
              <Typography
                variant="h2"
                color="white"
                className="mb-2 font-black tracking-normal"
              >
                Sign up for our newsletter
              </Typography>
              <Typography color="white" className="font-normal">
                Join our newsletter and get news in your inbox every week! We
                hate spam too, so no worries about this.
              </Typography>
            </div>
            <div className="ml-auto w-full px-4 lg:w-6/12">
              <form
                action="https://gmail.us13.list-manage.com/subscribe/post?u=2343d646c60fd2780c7858d3b&amp;id=aae21e5fd9&amp;f_id=00c88fe4f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="mt-4 flex flex-col justify-end gap-4 md:flex-row lg:mt-0"
                target="_self"
                noValidate
              >
                <div className="mt-6 w-full lg:mt-0 lg:w-8/12">
                  <Input
                    required
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    size="lg"
                    placeholder="Enter your email"
                    className="!border-[1.5px] !border-blue-gray-50 !bg-white py-6 !px-4 text-primary !ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-primary focus:ring-primary/20"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>
                <Button
                  size="lg"
                  color="blue-gray"
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="mt-2 shrink-0 bg-primary text-base font-medium capitalize md:mt-0 md:w-auto"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
