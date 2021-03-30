import React from "react";

export default function IndexFooter() {
  return (
    <>
      <footer className="w-full py-5 px-9 border border-t border-b-0 border-r-0 border-l-0 border-gray-200 mt-16">
        <p className="text-gray-700 text-center">
          &copy; {new Date().getFullYear()} Material Tailwind
        </p>
      </footer>
    </>
  );
}
