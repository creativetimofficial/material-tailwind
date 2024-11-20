import ComponentPreview from './ComponentPreview';

import CodeSnippet from './CodeSnippet';

async function PreviewWithCode({relativePath, language}: {relativePath: string, language: string}) {

  let codeModule;

  if (language === "html") {
    codeModule = await import(
      `!!raw-loader!../components/docs-html/${relativePath}`
    );
  } else {
    codeModule = await import(
      `!!raw-loader!../components/docs/${relativePath}`
    );
  }

  // const tsxModule = await import(
  //   `!!raw-loader!../components/docs/${relativePath}`
  // );
  // const htmlModule = await import(
  //   `!!raw-loader!../components/docs-html/${relativePath}`
  // );

  const codeContent = codeModule.default;

  return (
    <>
      <ComponentPreview componentPath={`./docs/${relativePath}`} />
      <CodeSnippet codeBlock={codeContent} language={language} />
    </>
  );
};

export default PreviewWithCode;
