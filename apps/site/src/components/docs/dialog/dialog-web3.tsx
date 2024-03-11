import {
  Dialog,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react/dist";

import { Xmark } from "iconoir-react";

export function DialogWeb3() {
  return (
    <Dialog size="sm">
      <Dialog.Trigger as={Button}>Connect wallet</Dialog.Trigger>
      <Dialog.Overlay>
        <Dialog.Content>
          <Dialog.DismissTrigger
            as={IconButton}
            size="sm"
            variant="ghost"
            isCircular
            className="absolute right-2 top-2"
          >
            <Xmark className="h-5 w-5" />
          </Dialog.DismissTrigger>
          <Typography type="h5">Connect a Wallet</Typography>
          <Typography className="text-foreground">
            Choose which card you want to connect
          </Typography>
          <div className="mt-4">
            <Typography className="py-4 !font-bold uppercase opacity-70">
              Popular
            </Typography>
            <div className="space-y-4">
              <Button
                color="secondary"
                isFullWidth
                className="flex items-center justify-center gap-3"
              >
                <img
                  src="https://docs.material-tailwind.com/icons/metamask.svg"
                  alt="metamask"
                  className="h-6 w-6"
                />
                <Typography>Connect with MetaMask</Typography>
              </Button>
              <Button
                color="secondary"
                isFullWidth
                className="flex items-center justify-center gap-3"
              >
                <img
                  src="https://docs.material-tailwind.com/icons/coinbase.svg"
                  alt="metamast"
                  className="h-6 w-6 rounded-md"
                />
                <Typography>Connect with Coinbase</Typography>
              </Button>
            </div>

            <Typography className="mt-2 py-4 !font-bold uppercase opacity-70">
              Other
            </Typography>
            <Button
              color="secondary"
              isFullWidth
              className="flex items-center justify-center gap-3"
            >
              <img
                src="https://docs.material-tailwind.com/icons/trust-wallet.svg"
                alt="metamast"
                className="border-blue-gray-50 h-7 w-7 rounded-md border"
              />
              <Typography>Connect with Trust Wallet</Typography>
            </Button>
          </div>
          <div className="mt-12 flex w-full justify-between gap-2">
            <Typography type="small">New to Ethereum wallets?</Typography>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog>
  );
}
