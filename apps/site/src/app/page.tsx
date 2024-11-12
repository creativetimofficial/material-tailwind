import { redirect } from "next/navigation";

export default function Page() {
  redirect(
    process.env.NODE_ENV === "production"
      ? "/docs/v3/react/installation"
      : "/docs/react/installation",
  );
}
