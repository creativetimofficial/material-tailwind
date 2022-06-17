// @material-tailwind/react
import { IconButton, IconButtonProps, Tooltip } from "@material-tailwind/react";

// prop-types
interface Props {
  link: string;
  color: IconButtonProps["color"];
}

export default function StackBlitz({ link, color = "blue" }: Props) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Tooltip
        content="StackBlitz"
        placement="bottom"
        className="rounded-md py-1 px-2 text-xs font-medium"
      >
        <IconButton type="button" variant="text" size="sm" color={color}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
        </IconButton>
      </Tooltip>
    </a>
  );
}
