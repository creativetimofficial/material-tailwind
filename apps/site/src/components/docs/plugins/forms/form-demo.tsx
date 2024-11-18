"use client";

import * as React from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Input,
  Button,
  Checkbox,
  Typography,
  InputFieldProps,
} from "@material-tailwind/react";
import { Lock, Mail, ProfileCircle } from "iconoir-react";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

type FormInputs = z.infer<typeof formSchema>;

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
        className="mb-6 block space-y-1.5"
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

export function FormDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: FormInputs) {
    console.log(data);
  }

  const nameError = errors.name?.message;
  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
      <TextField
        label="Name"
        error={nameError}
        icon={ProfileCircle}
        placeholder="Alex Smith"
        {...register("name")}
      />
      <TextField
        type="email"
        label="Email Address"
        error={emailError}
        icon={Mail}
        placeholder="someone@example.com"
        {...register("email")}
      />
      <TextField
        type="password"
        label="Password"
        error={passwordError}
        icon={Lock}
        placeholder="******"
        {...register("password")}
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
        Sign Up
      </Button>
      <Typography
        type="small"
        className="my-4 flex items-center justify-center gap-1 text-foreground"
      >
        Already have an account?
        <Typography
          as="a"
          href="#"
          type="small"
          color="primary"
          className="font-bold"
        >
          Sign In
        </Typography>
      </Typography>
    </form>
  );
}
