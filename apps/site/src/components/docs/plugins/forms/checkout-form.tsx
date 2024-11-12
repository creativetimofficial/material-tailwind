"use client";

import * as React from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  Tabs,
  Input,
  Button,
  Checkbox,
  Typography,
  InputFieldProps,
} from "@material-tailwind/react";
import {
  Mail,
  Calendar,
  CreditCard,
  LockSquare,
  ProfileCircle,
  Globe,
  Post,
} from "iconoir-react";

const cardFormSchema = z.object({
  email: z.string().email({ message: "Invalid email." }),
  cardNumber: z.string().min(15, { message: "Invalid card number." }),
  expiry: z.string().min(4, { message: "Invalid expiry date." }),
  cvc: z.string().min(3, { message: "Invalid CVC." }),
  holderName: z.string().min(1, { message: "Holder name is required." }),
});

const paypalFormSchema = z.object({
  email: z.string().email({ message: "Invalid email." }),
  country: z.string().min(1, { message: "Country is required." }),
  postalCode: z.string().min(1, { message: "Postal code is required." }),
});

type CardFormInputs = z.infer<typeof cardFormSchema>;
type PaypalFormInputs = z.infer<typeof paypalFormSchema>;

type TextFieldProps = InputFieldProps & {
  label: string;
  error?: string;
  icon: React.ElementType;
};

const TextField = React.forwardRef<typeof Input.Field, TextFieldProps>(
  ({ label, error, icon: Icon, ...props }, ref) => {
    const id = React.useId();

    return (
      <Typography
        as="label"
        htmlFor={id}
        color="default"
        className="mb-6 block w-full space-y-1.5"
      >
        <span className="text-sm font-semibold">{label}</span>
        <Input
          ref={ref}
          {...props}
          id={id}
          isError={Boolean(error)}
          color={error ? "error" : "primary"}
        >
          <Input.Icon>
            <Icon className="h-full w-full" />
          </Input.Icon>
        </Input>
        {error && (
          <Typography type="small" color="error">
            {error}
          </Typography>
        )}
      </Typography>
    );
  },
);

function formatExpires(value: string) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

export function CheckoutForm() {
  const cardForm = useForm<CardFormInputs>({
    resolver: zodResolver(cardFormSchema),
    defaultValues: {
      email: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
      holderName: "",
    },
  });

  const paypalForm = useForm<PaypalFormInputs>({
    resolver: zodResolver(paypalFormSchema),
    defaultValues: {
      email: "",
      country: "",
      postalCode: "",
    },
  });

  function cardFormOnSubmit(data: CardFormInputs) {
    console.log(data);
  }

  function paypalFormOnSubmit(data: PaypalFormInputs) {
    console.log(data);
  }

  const emailError = cardForm.formState.errors.email?.message;
  const cardNumberError = cardForm.formState.errors.cardNumber?.message;
  const expiryError = cardForm.formState.errors.expiry?.message;
  const cvcError = cardForm.formState.errors.cvc?.message;
  const holderNameError = cardForm.formState.errors.holderName?.message;

  const emailErrorPaypal = paypalForm.formState.errors.email?.message;
  const countryError = paypalForm.formState.errors.country?.message;
  const postalCodeError = paypalForm.formState.errors.postalCode?.message;

  return (
    <Card className="w-full max-w-md">
      <Card.Header>
        <Card
          color="primary"
          className="grid h-40 place-items-center rounded-md shadow-none"
        >
          <Typography type="h5" className="text-white">
            Material Tailwind PRO
          </Typography>
        </Card>
      </Card.Header>
      <Card.Body>
        <Tabs defaultValue="card">
          <Tabs.List className="w-full">
            <Tabs.Trigger type="button" className="w-full" value="card">
              Card
            </Tabs.Trigger>
            <Tabs.Trigger type="button" className="w-full" value="paypal">
              PayPal
            </Tabs.Trigger>
            <Tabs.TriggerIndicator />
          </Tabs.List>
          <Tabs.Panel
            as="form"
            onSubmit={cardForm.handleSubmit(cardFormOnSubmit)}
            value="card"
          >
            <TextField
              type="email"
              label="Email Address"
              error={emailError}
              icon={Mail}
              placeholder="someone@example.com"
              {...cardForm.register("email")}
            />
            <TextField
              label="Card Number"
              error={cardNumberError}
              icon={CreditCard}
              placeholder="XXXX XXXX XXXX XXXX"
              {...cardForm.register("cardNumber")}
              value={cardForm.watch("cardNumber")}
              onChange={(event) => {
                const newValue = event.target.value;
                const digits = newValue.replace(/\D/g, "");

                if (digits.length > 16) {
                  return;
                }

                if (!digits || /^[\d\s]+$/.test(digits)) {
                  const formattedDigits = digits.replace(
                    /(\d{4})(?=\d)/g,
                    "$1 ",
                  );

                  cardForm.setValue("cardNumber", formattedDigits);
                }

                cardForm.trigger("cardNumber");
              }}
            />
            <div className="flex w-full gap-4">
              <TextField
                label="Expiry Date"
                error={expiryError}
                icon={Calendar}
                placeholder="mm/yy"
                {...cardForm.register("expiry")}
                value={cardForm.watch("expiry")}
                onChange={(event) => {
                  const newValue = event.target.value;
                  const digits = newValue.replace(/\D/g, "");

                  if (digits.length > 4 || digits.length < 4) {
                    cardForm.setError("expiry", {
                      type: "manual",
                      message: "Invalid expiry date.",
                    });
                  }

                  cardForm.setValue("expiry", formatExpires(digits));

                  cardForm.trigger("expiry");
                }}
              />
              <TextField
                label="CVC"
                error={cvcError}
                icon={LockSquare}
                placeholder="000"
                maxLength={3}
                {...cardForm.register("cvc")}
                value={cardForm.watch("cvc")}
                onChange={(event) => {
                  const newValue = event.target.value;
                  const digits = newValue.replace(/\D/g, "");

                  if (digits.length > 3) {
                    return;
                  }

                  cardForm.setValue("cvc", digits);

                  cardForm.trigger("cvc");
                }}
              />
            </div>
            <TextField
              label="Holder Name"
              error={holderNameError}
              icon={ProfileCircle}
              placeholder="Alex Smith"
              {...cardForm.register("holderName")}
            />
            <div className="my-6 flex items-center gap-2">
              <Checkbox>
                <Checkbox.Indicator />
              </Checkbox>
              <Typography
                htmlFor="remember"
                className="flex items-center gap-1 text-foreground"
              >
                I&apos;m agree with the
                <Typography as="a" href="#" color="primary">
                  Terms and Conditions
                </Typography>
              </Typography>
            </div>
            <Button type="submit" className="w-full">
              Pay Now
            </Button>
          </Tabs.Panel>
          <Tabs.Panel
            as="form"
            onSubmit={paypalForm.handleSubmit(paypalFormOnSubmit)}
            value="paypal"
          >
            <TextField
              type="email"
              label="Email Address"
              error={emailErrorPaypal}
              icon={Mail}
              placeholder="someone@example.com"
              {...paypalForm.register("email")}
            />
            <TextField
              label="Country"
              error={countryError}
              icon={Globe}
              placeholder="United Arab Emirates"
              {...paypalForm.register("country")}
            />
            <TextField
              label="Postal Code"
              error={postalCodeError}
              icon={Post}
              placeholder="123456"
              {...paypalForm.register("postalCode")}
              value={paypalForm.watch("postalCode")}
              onChange={(event) => {
                const newValue = event.target.value;
                const digits = newValue.replace(/\D/g, "");

                if (newValue !== digits) {
                  return;
                }

                paypalForm.setValue("postalCode", digits);
                paypalForm.trigger("postalCode");
              }}
            />
            <Button type="submit" className="w-full">
              Pay With PayPal
            </Button>
          </Tabs.Panel>
        </Tabs>
        <Typography
          type="small"
          className="my-4 flex items-center justify-center gap-1 text-foreground"
        >
          Payments are secure and encrypted
        </Typography>
      </Card.Body>
    </Card>
  );
}
