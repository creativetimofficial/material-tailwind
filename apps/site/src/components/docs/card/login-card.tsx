import {
  Card,
  Typography,
  Button,
  Input,
  Checkbox,
} from "@material-tailwind/react";

export default function LoginCard() {
  return (
    <Card className="max-w-xs">
      <Card.Header
        as={Card}
        color="primary"
        className="grid h-24 place-items-center shadow-none"
      >
        <Typography as="span" type="h4" className="text-primary-foreground">
          Sign In
        </Typography>
      </Card.Header>
      <Card.Body as="form">
        <div className="mb-4 mt-2 space-y-1.5">
          <Typography
            as="label"
            htmlFor="email"
            type="small"
            color="default"
            className="font-semibold"
          >
            Email
          </Typography>
          <Input id="email" type="email" placeholder="someone@example.com" />
        </div>
        <div className="mb-4 space-y-1.5">
          <Typography
            as="label"
            htmlFor="password"
            type="small"
            color="default"
            className="font-semibold"
          >
            Password
          </Typography>
          <Input id="password" type="password" placeholder="************" />
        </div>
        <label htmlFor="remember" className="mb-4 flex items-center gap-2">
          <Checkbox id="remember">
            <Checkbox.Indicator />
          </Checkbox>
          <Typography className="text-foreground">Remember Me</Typography>
        </label>
        <Button isFullWidth>Sign In</Button>
      </Card.Body>
      <Card.Footer className="text-center">
        <Typography
          type="small"
          className="my-1 flex items-center justify-center gap-1 text-foreground"
        >
          Don't have an account?
          <Typography
            type="small"
            as="a"
            href="#"
            color="primary"
            className="font-bold"
          >
            Sign up
          </Typography>
        </Typography>
      </Card.Footer>
    </Card>
  );
}
