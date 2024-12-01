import { Typography, Card } from "@material-tailwind/react";

export default function App() {
  return (
    <div className="relative grid min-h-[100vh] w-screen p-8">
      <div className="flex flex-col-reverse items-center justify-between gap-4 self-start md:flex-row">
        <Card className="h-max w-max border border-blue-gray-50 py-4 px-5 shadow-lg shadow-blue-gray-900/5">
          <code className="text-blue-gray-900">
            Get started by editing <strong>src/App.tsx</strong>
          </code>
        </Card>
        <Card className="h-max w-max flex-row items-center border border-blue-gray-50 font-semibold text-blue-gray-900 shadow-lg shadow-blue-gray-900/5">
          <img src="/logo512.png" alt="React Logo" className="ml-4 h-7 w-7" />
          <div className="py-4 pl-4 pr-5">CRA + TypeScript Template</div>
        </Card>
      </div>
      <div className="flex-col gap-2 pt-56 pb-40 text-center">
        <Typography variant="h1" color="blue-gray">
          Material Tailwind React
        </Typography>
        <Typography variant="lead" color="blue-gray" className="opacity-70">
          An easy to use components library for Tailwind CSS and React.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-4 self-end md:grid-cols-2 lg:grid-cols-4">
        <a
          href="https://www.material-tailwind.com/docs/react/accordion?ref=template-cra-ts"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            shadow={false}
            className="border border-blue-gray-50 py-4 px-5 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-gray-100/60 hover:shadow-blue-gray-900/5"
          >
            <Typography variant="h5" color="blue-gray" className="mb-3 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                />
              </svg>
              Documentation
            </Typography>
            <Typography color="blue-gray" className="font-normal opacity-70">
              Find everything you need to know about Material Tailwind in our official
              documentation.
            </Typography>
          </Card>
        </a>
        <a
          href="https://www.material-tailwind.com/blocks?ref=template-cra-ts"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            shadow={false}
            className="border border-blue-gray-50 py-4 px-5 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-gray-100/60 hover:shadow-blue-gray-900/5"
          >
            <Typography variant="h5" color="blue-gray" className="mb-3 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                />
              </svg>
              Blocks
            </Typography>
            <Typography color="blue-gray" className="font-normal opacity-70">
              Ready-to-use section, like Hero, Blog, Pricing, and more, for building projects in no
              time!
            </Typography>
          </Card>
        </a>
        <a
          href="https://github.com/creativetimofficial/material-tailwind?ref=template-cra-ts"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            shadow={false}
            className="border border-blue-gray-50 py-4 px-5 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-gray-100/60 hover:shadow-blue-gray-900/5"
          >
            <Typography variant="h5" color="blue-gray" className="mb-3 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Github
            </Typography>
            <Typography color="blue-gray" className="font-normal opacity-70">
              Contributions are always welcome, you can check out the Github repository for more.
            </Typography>
          </Card>
        </a>
        <a
          href="https://github.com/creativetimofficial/material-tailwind?ref=template-cra-ts"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            shadow={false}
            className="border border-blue-gray-50 py-4 px-5 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-gray-100/60 hover:shadow-blue-gray-900/5"
          >
            <Typography variant="h5" color="blue-gray" className="mb-3 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="28px"
                height="28px"
              >
                <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z" />
              </svg>
              Discord
            </Typography>
            <Typography color="blue-gray" className="font-normal opacity-70">
              Join our Discord server to get help and suggest new features for Material Tailwind.
            </Typography>
          </Card>
        </a>
      </div>
    </div>
  );
}
