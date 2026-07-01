import React from "react";
import { DocSearch } from "@docsearch/react";

export function Search() {
  return (
    <DocSearch
      indexName={process.env.REACT_APP_INDEX_NAME}
      apiKey={process.env.REACT_APP_API_KEY}
      appId={process.env.REACT_APP_APP_ID}
      placeholder="Search..."
    />
  );
}
