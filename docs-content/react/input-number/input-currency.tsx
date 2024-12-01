import React from "react";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";

const CURRENCIES = ["USD", "EUR", "CAD", "RON"];

export function InputCurrency() {
  const [currency, setCurrency] = React.useState("USD");

  return (
    <div className="w-full max-w-[24rem]">
      <Typography
        variant="small"
        color="blue-gray"
        className="mb-1 font-medium"
      >
        Amount You Send
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
        />
        <Menu placement="bottom-start">
          <MenuHandler>
            <Button
              ripple={false}
              variant="text"
              color="blue-gray"
              className="h-10 w-14 shrink-0 rounded-l-none border border-l-0 border-blue-gray-200 bg-transparent px-3"
            >
              {currency}
            </Button>
          </MenuHandler>
          <MenuList className="max-h-[20rem] max-w-[18rem]">
            {CURRENCIES.map((currency, index) => {
              return (
                <MenuItem
                  key={currency}
                  value={currency}
                  onClick={() => setCurrency(currency)}
                >
                  {currency}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}
