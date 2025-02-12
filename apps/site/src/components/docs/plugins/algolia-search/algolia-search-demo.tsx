import { DocSearch } from "@docsearch/react";
import { KeyCommand, Search } from "iconoir-react";
import { Input } from "@material-tailwind/react";

const APP_ID = "37KXIBLNGX";
const INDEX_NAME = "material-tailwind";
const API_KEY = "8cc5688018e14bad2a2528eea41fbb35";

export default function AlgoliaSearchDemo() {
  return (
    <div className="group w-72">
      <Input
        readOnly
        placeholder="Input"
        className="group-hover:border-primary group-hover:ring-primary/10 group-focus:border-primary group-focus:ring-primary/10"
      >
        <Input.Icon>
          <Search className="h-full w-full" />
        </Input.Icon>
        <kbd className="absolute right-[6px] top-1/2 flex -translate-y-[calc(50%+0.5px)] items-center gap-1 rounded border border-surface bg-surface-light px-1.5 py-1 text-[11px] font-semibold text-black shadow-[0_1.5px_0_0] shadow-surface dark:text-white">
          <KeyCommand className="h-2.5 w-2.5 stroke-2" />K
        </kbd>
        <div className="absolute inset-0 m-0 w-full opacity-0 [&_>_button]:m-0 [&_>_button]:w-full [&_>_button]:rounded-none">
          <DocSearch indexName={INDEX_NAME} apiKey={API_KEY} appId={APP_ID} />
        </div>
      </Input>
    </div>
  );
}
