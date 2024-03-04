export function DocsTitle({ children, href }) {
  return (
    <div
      id={href}
      className="group relative -ml-4 flex scroll-pt-64 items-center pl-4"
    >
      <a
        href={`#${href}`}
        className="absolute z-50 -ml-10 mb-2.5 rounded-md border border-surface bg-surface-light p-1 opacity-0 hover:opacity-100 group-hover:opacity-100"
      >
        #
      </a>
      {children}
    </div>
  );
}

export default DocsTitle;
