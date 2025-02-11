import {
  Dialog,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Xmark } from "iconoir-react";

export default function DialogWeb3() {
  return (
    <Dialog size="sm">
      <Dialog.Trigger as={Button}>Connect Wallet</Dialog.Trigger>
      <Dialog.Overlay>
        <Dialog.Content className="pb-4">
          <Dialog.DismissTrigger
            as={IconButton}
            size="sm"
            variant="ghost"
            color="secondary"
            isCircular
            className="absolute right-2 top-2"
          >
            <Xmark className="h-5 w-5" />
          </Dialog.DismissTrigger>
          <Typography type="h6">Connect a Wallet</Typography>
          <Typography className="text-foreground">
            Choose which card you want to connect
          </Typography>
          <div className="mt-4">
            <Typography color="default" className="mb-2 font-semibold">
              Popular
            </Typography>
            <div className="space-y-2">
              <Button
                isFullWidth
                color="secondary"
                className="flex items-center justify-center gap-2"
              >
                <img
                  alt="metamask"
                  src="https://docs.material-tailwind.com/icons/metamask.svg"
                  className="h-5 w-5"
                />
                <Typography className="font-semibold">
                  Connect with MetaMask
                </Typography>
              </Button>
              <Button
                isFullWidth
                color="secondary"
                className="flex items-center justify-center gap-2"
              >
                <img
                  alt="metamast"
                  src="https://docs.material-tailwind.com/icons/coinbase.svg"
                  className="h-6 w-6 rounded"
                />
                <Typography className="font-semibold">
                  Connect with Coinbase
                </Typography>
              </Button>
            </div>

            <Typography color="default" className="mb-2 mt-6 font-semibold">
              Other
            </Typography>
            <Button
              isFullWidth
              color="secondary"
              className="flex items-center justify-center gap-2"
            >
              <img
                alt="metamast"
                src="https://docs.material-tailwind.com/icons/trust-wallet.svg"
                className="h-6 w-6 rounded"
              />
              <Typography className="font-semibold">
                Connect with Trust Wallet
              </Typography>
            </Button>
          </div>
          <div className="mt-12 flex w-full items-center justify-between gap-2">
            <Typography type="small" className="text-foreground">
              New to Ethereum wallets?
            </Typography>
            <Button variant="outline" color="secondary" size="sm">
              Learn More
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog>
  );
}
