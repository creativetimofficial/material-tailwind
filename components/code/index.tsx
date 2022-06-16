// prop-types
interface Props {
  html: boolean;
  small: boolean;
  children: any;
}

export default function Code({ html = false, small = false, children }: Props) {
  return (
    <code
      className={`rounded-md px-1 font-['Fira_Code'] font-normal ${
        html
          ? "bg-pink-500/[0.15] text-pink-500"
          : "bg-blue-500/[0.15] text-blue-500"
      } ${small ? "text-sm" : "text-[15px]"}`}
    >
      {children}
    </code>
  );
}
