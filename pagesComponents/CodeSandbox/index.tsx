import {
  IconButton,
  Tooltip
} from "../../packages/material-tailwind-react/src";

export default function CodeSandbox({ link, color }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Tooltip
        content="CodeSandbox"
        placement="bottom"
        className="text-xs font-medium py-1 px-2 rounded-md"
      >
        <IconButton type="button" variant="text" size="sm" color={color}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22.5,17.95L22.41,6L11.955,0L1.5,6v12l10.455,6L22.5,17.95z M20.327,13.239L16.982,15.1v3.514L13.01,20.91v-8.272l7.317-4.157V13.239z M10.905,20.91l-3.972-2.296v-3.516l-3.345-1.86V8.481l7.317,4.157V20.91z M4.634,6.601L4.633,6.6l3.913-2.255l3.43,1.968l3.41-1.945l3.871,2.197l-7.32,4.18L4.634,6.601z" />
          </svg>
        </IconButton>
      </Tooltip>
    </a>
  );
}
