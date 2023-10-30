import { Button } from "@material-tailwind/react/dist";
import { BitcoinCircle, GoogleCircle, Facebook } from "iconoir-react";

export function CustomAuthButton() {
  return (
    <div className="flex gap-4">
      <Button className="border-amber-500 bg-amber-500 text-gray-950 hover:border-amber-600 hover:bg-amber-600 focus:border-amber-600 focus:bg-amber-600 dark:border-amber-500 dark:bg-amber-500 dark:text-gray-950 dark:hover:border-amber-600 dark:hover:bg-amber-600 dark:focus:border-amber-600 dark:focus:bg-amber-600">
        <BitcoinCircle className="mr-2 h-4 w-4 stroke-2" /> Connect Wallet
      </Button>
      <Button className="border-blue-50 bg-white text-gray-950 shadow-lg shadow-gray-100 hover:border-blue-100 hover:bg-white hover:text-blue-500 focus:border-blue-100 focus:bg-white focus:text-blue-500 dark:border-blue-50 dark:bg-white dark:text-gray-950 dark:shadow-lg dark:shadow-black/10 dark:hover:border-blue-100 dark:hover:bg-white dark:hover:text-blue-500 dark:focus:border-blue-100 dark:focus:bg-white dark:focus:text-blue-500">
        <GoogleCircle className="mr-2 h-4 w-4 stroke-2" /> Continue with Google
      </Button>
      <Button className="border-blue-500 bg-blue-500 text-white hover:border-blue-600 hover:bg-blue-600 focus:border-blue-600 focus:bg-blue-600 dark:border-blue-500 dark:bg-blue-500 dark:text-white dark:hover:border-blue-600 dark:hover:bg-blue-600 dark:focus:border-blue-600 dark:focus:bg-blue-600">
        <Facebook className="mr-2 h-4 w-4 stroke-2" /> Continue with Facebook
      </Button>
    </div>
  );
}
