"use client";
// pages/your-page.tsx or wherever your component is

// import tsxCodeContent from '../components/docs/accordion/accordion-demo.tsx?raw';
import tsxCodeContent from '!!raw-loader!../components/docs/accordion/accordion-demo.tsx';

// import htmlCodeContent from '../components/docs-html/accordion/accordion-demo.tsx?raw';
import htmlCodeContent from '!!raw-loader!../components/docs-html/accordion/accordion-demo.tsx';

import ComponentPreview from '../components/ComponentPreview';

import CodeSnippet from '../components/CodeSnippet';

function CodeSection() {
  return (
    <div>
      <ComponentPreview componentPath="./docs/accordion/accordion-demo" />
      <p>React Component:</p>
      <CodeSnippet codeContent={tsxCodeContent} language="tsx" />
      <p>HTML:</p>
      <CodeSnippet codeContent={htmlCodeContent} language="html" />
    </div>
  );
};

export default CodeSection;
