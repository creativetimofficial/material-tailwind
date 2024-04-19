import { Button } from "@material-tailwind/react";
import { BitcoinCircle, GoogleCircle, Facebook } from "iconoir-react";

export function CustomAuthButton() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button className="border-amber-500 bg-amber-500 text-gray-950 hover:border-amber-600 hover:bg-amber-600 focus:border-amber-600 focus:bg-amber-600">
        <BitcoinCircle className="mr-2 h-4 w-4 stroke-2" /> Connect Wallet
      </Button>
      <Button className="border-blue-50 bg-secondary text-gray-950 hover:border-blue-100 hover:bg-secondary hover:text-info focus:border-blue-100 focus:bg-secondary focus:text-info">
        <GoogleCircle className="mr-2 h-4 w-4 stroke-2" /> Continue with Google
      </Button>
      <Button className="border-info bg-info text-secondary hover:border-info-dark hover:bg-info-dark focus:border-info-dark focus:bg-info-dark">
        <Facebook className="mr-2 h-4 w-4 stroke-2" /> Continue with Facebook
      </Button>
    </div>
  );
}
