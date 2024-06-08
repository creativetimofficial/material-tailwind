import { Button } from "@material-tailwind/react";
import Link from "next/link";

export function ButtonDemo() {
  return (
    <Button as={Link} href="/home" size="lg" variant="solid" color="primary">
      Button
    </Button>
  );
}
