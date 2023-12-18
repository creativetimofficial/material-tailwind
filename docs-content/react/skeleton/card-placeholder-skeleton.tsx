import { Button, Typography } from "@material-tailwind/react";
import Card, {
  CardBody,
  CardFooter,
  CardHeader,
} from "packages/material-tailwind-react/src/components/Card";

export function CardPlacehoderSkeleton() {
  return (
    <Card className="mt-6 w-96 animate-pulse">
      <CardHeader
        color="blue-gray"
        className="relative flex h-56 items-center justify-center bg-gray-200 dark:bg-gray-700"
      >
        <svg
          className="h-10 w-10 text-gray-300 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </CardHeader>
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 h-3 w-56 rounded-full bg-gray-200 dark:bg-gray-700"
        ></Typography>
        <div className="flex flex-col">
          <Typography className="mb-2 h-2 w-72 rounded-full bg-gray-200 dark:bg-gray-700"></Typography>
          <Typography className="mb-2 h-2 w-72 rounded-full bg-gray-200 dark:bg-gray-700"></Typography>
          <Typography className="mb-2 h-2 w-60 rounded-full bg-gray-200 dark:bg-gray-700"></Typography>
          <Typography className="mb-2 h-2 w-40 rounded-full bg-gray-200 dark:bg-gray-700"></Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="h-8 w-20 bg-gray-200"></Button>
      </CardFooter>
    </Card>
  );
}
