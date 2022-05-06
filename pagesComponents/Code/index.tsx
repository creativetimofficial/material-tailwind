export default function Code({
  html = false,
  small = false,
  children
}: {
  html: boolean;
  small: boolean;
  children: any;
}) {
  return (
    <code
      className={`font-['Fira_Code'] font-normal px-1 rounded-md ${
        html
          ? "text-pink-500 bg-pink-500/[0.15]"
          : "text-blue-500 bg-blue-500/[0.15]"
      } ${small ? "text-sm" : "text-[15px]"}`}
    >
      {children}
    </code>
  );
}
