// react-simple-code-editor components
import Editor from "react-simple-code-editor";

// prism.js
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
require("prismjs/components/prism-jsx");

// prop-types
interface Props {
  code: String;
}

export default function CodePreview({ code }: Props) {
  return (
    <div className="relative z-20 mb-5 w-full overflow-x-hidden overflow-y-scroll rounded-xl bg-[#1E293B] shadow-lg">
      <div className="sticky top-0 z-30 h-[25px] bg-[#1E293B]">
        <div className="absolute top-2/3 left-2.5 -mt-1.5 h-2.5 w-2.5 rounded-full bg-[#dc143c] shadow-[15px_0_0_#ffa500,_30px_0_0_#32cd32]"></div>
      </div>
      <div className="pointer-events-none max-h-[400px] min-h-[220px] md:min-h-[250px] lg:min-h-[340px]">
        <Editor
          value={`${code}`}
          onValueChange={() => null}
          highlight={(newCode) => highlight(newCode, languages.jsx)}
          padding={20}
          className="code-editor h-max text-white outline-none focus:outline-none"
          style={{
            fontFamily: "Fira Code",
            fontWeight: 500,
          }}
        />
      </div>
    </div>
  );
}
