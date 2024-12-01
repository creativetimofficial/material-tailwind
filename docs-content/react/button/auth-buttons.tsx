import { Button } from "@material-tailwind/react";

export function AuthButtons() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="lg" color="white" className="flex items-center gap-3">
        <img
          src="https://docs.material-tailwind.com/icons/metamask.svg"
          alt="metamask"
          className="h-6 w-6"
        />
        Connect Wallet
      </Button>
      <Button
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3"
      >
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="metamask"
          className="h-6 w-6"
        />
        Continue with Google
      </Button>
      <Button
        size="lg"
        variant="gradient"
        color="light-blue"
        className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
      >
        Sign in with Twitter
        <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
          <img
            src="https://docs.material-tailwind.com/icons/twitter.svg"
            alt="metamask"
            className="h-6 w-6"
          />
        </span>
      </Button>
    </div>
  );
}
