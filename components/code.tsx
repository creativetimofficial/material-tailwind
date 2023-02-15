// prop-types
interface Props {
  html: boolean;
  children: any;
  className: string;
}

export default function Code({ html = false, children, className }: Props) {
  return (
    <code
      className={`rounded-md px-1 font-['Fira_Code'] font-normal ${
        html
          ? "bg-pink-500/[0.15] text-pink-500"
          : "bg-blue-500/[0.15] text-blue-500"
      } text-sm`}
    >
      {children}
    </code>
  );
}
