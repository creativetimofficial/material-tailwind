import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
require("prismjs/components/prism-jsx");

interface CodePreviewCardProps {
  code: String;
}

export default function CodePreviewCard({ code }: CodePreviewCardProps) {
  return (
    <div className="w-full rounded-xl shadow-lg overflow-y-scroll overflow-x-hidden bg-[#1E293B] mb-5 relative z-20">
      <div className="h-[25px] bg-[#1E293B] sticky top-0 z-30">
        <div className="absolute top-2/3 left-2.5 -mt-1.5 w-2.5 h-2.5 rounded-full bg-[#dc143c] shadow-[15px_0_0_#ffa500,_30px_0_0_#32cd32]"></div>
      </div>
      <div className="min-h-[220px] md:min-h-[250px] max-h-[400px] lg:min-h-[340px] pointer-events-none">
        <Editor
          value={`${code}`}
          onValueChange={() => null}
          highlight={(newCode) => highlight(newCode, languages.jsx)}
          padding={20}
          className="code-editor h-max text-white outline-none focus:outline-none"
          style={{
            fontFamily: "Fira Code",
            fontWeight: 500
          }}
        />
      </div>
    </div>
  );
}
