import React from "react";
import { DocSearch } from "@docsearch/react";

const APP_ID = "37KXIBLNGX";
const INDEX_NAME = "material-tailwind";
const API_KEY = "8cc5688018e14bad2a2528eea41fbb35";

export function Search() {
  return <DocSearch indexName={INDEX_NAME} apiKey={API_KEY} appId={APP_ID} />;
}
