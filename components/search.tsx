import React from "react";
import { DocSearch } from "@docsearch/react";

const APP_ID = "9L75JI2AZ0";
const INDEX_NAME = "materialtailwind";
const API_KEY = "e42451017f9ef426e61ba325355485d1";

export function SearchProvider() {
  return <DocSearch indexName={INDEX_NAME} apiKey={API_KEY} appId={APP_ID} />;
}
