import {
  Card,
  Typography,
  Button,
  Input,
  Checkbox,
} from "@material-tailwind/react/dist";

export function LoginCard() {
  return (
    <Card className="max-w-xs">
      <Card.Header
        as={Card}
        color="primary"
        className="grid h-24 place-items-center shadow-none"
      >
        <Typography as="span" variant="h4" color="secondary">
          Sign In
        </Typography>
      </Card.Header>
      <Card.Body as="form">
        <Input isFullWidth className="mb-4 mt-2 space-y-1.5">
          <Typography
            as="label"
            htmlFor="email"
            variant="small"
            color="primary"
            className="font-semibold"
          >
            Email
          </Typography>
          <Input.Field
            id="email"
            type="email"
            placeholder="someone@example.com"
          />
        </Input>
        <Input isFullWidth className="mb-4 space-y-1.5">
          <Typography
            as="label"
            htmlFor="password"
            variant="small"
            color="primary"
            className="font-semibold"
          >
            Password
          </Typography>
          <Input.Field
            id="password"
            type="password"
            placeholder="************"
          />
        </Input>
        <div className="mb-6 flex items-center gap-2">
          <Checkbox id="remember" />
          <Typography
            as="label"
            htmlFor="remember"
            className="text-gray-500 dark:text-gray-400"
          >
            Remember Me
          </Typography>
        </div>
        <Button isFullWidth>Sign In</Button>
      </Card.Body>
      <Card.Footer className="text-center">
        <Typography
          variant="small"
          className="my-1 flex items-center justify-center gap-1"
        >
          Don't have an account?
          <Typography variant="small" as="a" href="#" className="font-bold">
            Sign up
          </Typography>
        </Typography>
      </Card.Footer>
    </Card>
  );
}
