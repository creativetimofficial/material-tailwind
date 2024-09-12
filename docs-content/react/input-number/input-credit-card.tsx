import React from "react";
import { Input, Typography, Button } from "@material-tailwind/react";

export function InputCreditCard() {
  const [cvv, setCvv] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [expirationDate, setExpirationDate] = React.useState("");
  const [cardholderName, setCardholderName] = React.useState("");
  return (
    <div className="w-full max-w-sm">
      <Typography
        variant="small"
        color="blue-gray"
        className="mb-1 block font-medium"
      >
        Cardholder Name
      </Typography>
      <Input
        placeholder="e.g John Doe"
        className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300  placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
        value={cardholderName}
        onChange={(e) => setCardholderName(e.target.value)}
      />

      <Typography
        variant="small"
        color="blue-gray"
        className="mb-1 mt-4 block font-medium"
      >
        Card Number
      </Typography>
      <Input
        placeholder="1234 5678 9012 3456"
        maxLength={19}
        className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300  placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
        value={cardNumber
          .replace(/\s/g, "")
          .replace(/(\d{4})/g, "$1 ")
          .trim()}
        onChange={(e) => setCardNumber(e.target.value)}
      />

      <div className="mt-4 flex">
        <div className="mr-4 w-full md:w-8/12">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-1 block font-medium"
          >
            Expiration Date
          </Typography>
          <Input
            placeholder="MM/YY"
            maxLength={5}
            pattern="\d{2}/\d{2}"
            className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300  placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            value={expirationDate
              .replace(/[^0-9]/g, "")
              .replace(/(\d{2})(\d{1,2})/, "$1/$2")
              .substring(0, 5)}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </div>
        <div className="w-full md:w-4/12">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-1 block font-medium"
          >
            CVV
          </Typography>
          <Input
            placeholder="123"
            maxLength={3}
            pattern="\d{3}"
            className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300  placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            value={cvv.replace(/[^0-9]/g, "").replace(/(\..*)\./g, "$1")}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
      </div>
      <Button className="mt-4" fullWidth>
        Purchase Now
      </Button>
    </div>
  );
}
