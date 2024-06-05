import { Button } from "@material-tailwind/react";
import { BitcoinCircle, GoogleCircle, Facebook } from "iconoir-react";

export function CustomAuthButton() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button className="border-[#F7931A] bg-[#F7931A] text-white hover:border-[#F7931A] hover:bg-[#F7931A] hover:brightness-110">
        <BitcoinCircle className="mr-2 h-4 w-4 stroke-2" /> Connect Wallet
      </Button>
      <Button className="border-white bg-white text-black shadow-md shadow-black/10 hover:border-white hover:bg-white hover:brightness-110">
        <GoogleCircle className="mr-2 h-4 w-4 stroke-2" /> Continue with Google
      </Button>
      <Button className="border-[#1877F2] bg-[#1877F2] text-white hover:border-[#1877F2] hover:bg-[#1877F2] hover:brightness-110">
        <Facebook className="mr-2 h-4 w-4 stroke-2" /> Continue with Facebook
      </Button>
    </div>
  );
}
