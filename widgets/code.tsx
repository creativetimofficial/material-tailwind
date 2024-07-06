interface Props {
  html: boolean;
  children: any;
  className: string;
}

export function Code({ html = false, children }: Props) {
  return (
    <code
      className={`rounded-md px-1 font-['Fira_Code'] font-normal ${
        html
          ? "bg-pink-500/[0.15] text-gray-900"
          : "bg-gray-900/[0.1] text-gray-900"
      } text-sm`}
    >
      {children}
    </code>
  );
}
