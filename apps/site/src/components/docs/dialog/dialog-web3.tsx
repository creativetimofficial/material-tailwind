import {
  Dialog,
  Button,
  Typography,
  IconButton,
  Avatar,
} from "@material-tailwind/react/dist";

import { Xmark } from "iconoir-react";

export function DialogWeb3() {
  return (
    <Dialog size="xs">
      <Dialog.Trigger as={Button}>Connect wallet</Dialog.Trigger>
      <Dialog.Overlay>
        <Dialog.Content className="pb-4">
          <Dialog.DismissTrigger
            as={IconButton}
            size="sm"
            variant="ghost"
            isCircular
            className="absolute right-2 top-2"
          >
            <Xmark className="h-5 w-5" />
          </Dialog.DismissTrigger>
          <Typography color="primary" type="h6">
            Connect a Wallet
          </Typography>
          <Typography className="text-foreground">
            Choose which card you want to connect
          </Typography>
          <div className="mt-4">
            <Typography
              color="primary"
              className="mb-2 data-[type=p]:font-semibold"
            >
              Popular
            </Typography>
            <div className="space-y-2">
              <Button
                isFullWidth
                size="lg"
                color="warning"
                className="flex items-center justify-center gap-2"
              >
                <img
                  alt="metamask"
                  src="https://docs.material-tailwind.com/icons/metamask.svg"
                  className="h-6 w-6"
                />
                <Typography>Connect with MetaMask</Typography>
              </Button>
              <Button
                isFullWidth
                size="lg"
                color="info"
                className="flex items-center justify-center gap-2"
              >
                <img
                  alt="metamast"
                  src="https://docs.material-tailwind.com/icons/coinbase.svg"
                  className="h-6 w-6 rounded"
                />
                <Typography>Connect with Coinbase</Typography>
              </Button>
            </div>

            <Typography
              color="primary"
              className="mb-2 mt-6 data-[type=p]:font-semibold"
            >
              Other
            </Typography>
            <Button
              isFullWidth
              size="lg"
              className="flex items-center justify-center gap-2"
            >
              <img
                alt="metamast"
                src="https://docs.material-tailwind.com/icons/trust-wallet.svg"
                className="h-6 w-6 rounded"
              />
              <Typography>Connect with Trust Wallet</Typography>
            </Button>
          </div>
          <div className="mt-12 flex w-full items-center justify-between gap-2">
            <Typography type="small" className="text-foreground">
              New to Ethereum wallets?
            </Typography>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog>
  );
}