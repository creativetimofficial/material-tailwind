import React from "react";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";

export function InputCurrencyConversion() {
  const [fromCurrency, setFromCurrency] = React.useState("USD");
  const [toCurrency, setToCurrency] = React.useState("EUR");
  const [fromAmount, setFromAmount] = React.useState("");
  const [toAmount, setToAmount] = React.useState("");

  const currencies = ["USD", "EUR", "CAD", "RON"];

  const handleCurrencyChange = (type: "from" | "to", currency: string) => {
    if (type === "from") {
      setFromCurrency(currency);
    } else {
      setToCurrency(currency);
    }
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <div className="mx-auto mt-4 w-full max-w-xl">
      <Typography className="mb-4 font-normal text-blue-gray-500">
        Enter the amount you wish to convert and select the desired currency.
      </Typography>
      <div className="flex flex-col items-center justify-between">
        <div className="mt-4 w-full max-w-sm">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-1 font-medium"
          >
            From
          </Typography>
          <div className="relative flex w-full max-w-sm">
            <Input
              type="number"
              placeholder="1,000"
              className="appearance-none rounded-r-none !border-t-blue-gray-200 placeholder:text-blue-gray-300  placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
            />
            <Menu placement="bottom-start">
              <MenuHandler>
                <Button
                  ripple={false}
                  variant="text"
                  color="blue-gray"
                  className="h-10 w-14 shrink-0 rounded-l-none border border-l-0 border-blue-gray-200 bg-transparent px-3"
                >
                  {fromCurrency}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-[20rem] max-w-[18rem]">
                {currencies.map((currency, index) => {
                  return (
                    <MenuItem
                      key={currency}
                      value={currency}
                      onClick={() => handleCurrencyChange("from", currency)}
                    >
                      {currency}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
          </div>
        </div>

        <div className="mb-4 mt-8 flex items-center justify-center">
          <IconButton
            variant="outlined"
            color="blue-gray"
            onClick={handleSwap}
            className="rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M13.78 10.47a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l.97.97V5.75a.75.75 0 0 1 1.5 0v5.69l.97-.97a.75.75 0 0 1 1.06 0ZM2.22 5.53a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v5.69a.75.75 0 0 1-1.5 0V4.56l-.97.97a.75.75 0 0 1-1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </IconButton>
        </div>

        <div className="w-full max-w-sm">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-1 font-medium"
          >
            To
          </Typography>
          <div className="relative flex w-full">
            <Input
              type="number"
              placeholder="1,000"
              className="appearance-none rounded-r-none !border-t-blue-gray-200 placeholder:text-blue-gray-300  placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
            />
            <Menu placement="bottom-start">
              <MenuHandler>
                <Button
                  ripple={false}
                  variant="text"
                  color="blue-gray"
                  className="h-10 w-14 shrink-0 rounded-l-none border border-l-0 border-blue-gray-200 bg-transparent px-3"
                >
                  {fromCurrency}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-[20rem] max-w-[18rem]">
                {currencies.map((currency, index) => {
                  return (
                    <MenuItem
                      key={currency}
                      value={currency}
                      onClick={() => handleCurrencyChange("from", currency)}
                    >
                      {currency}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-blue-gray-500">
        <Typography variant="small" className="font-normal">
          Rates are updated every hour to provide the most accurate conversions.
        </Typography>
        <Typography variant="small" className="mt-1 font-normal">
          <b>Last updated</b>: July 30, 2024, 3:00 PM
        </Typography>
      </div>
    </div>
  );
}
