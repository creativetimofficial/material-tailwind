"use client";
import ComponentPreview from './ComponentPreview';

import CodeSnippet from './CodeSnippet';
import { useTheme } from 'next-themes';
import { twMerge } from 'tailwind-merge';

async function PreviewWithCode({relativePath, language, className}: {relativePath: string, language: string, className?: string}) {

  const { resolvedTheme } = useTheme();
  const containerStyles = twMerge(
    "border-surface rounded-lg border mt-4 lg:max-w-[calc(80rem-480px-2rem-52px)] max-w-full",
    className,
  );
  
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

  const codeContent = codeModule.default;
  console.log('relativePath', relativePath);

  return (
    <>
    <div className={containerStyles} data-theme={resolvedTheme}>
      <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-md p-4 lg:overflow-hidden">
        <ComponentPreview componentPath={`./docs/${relativePath}`} />
      </div>
      <CodeSnippet codeBlock={codeContent} language={language} />
      </div>
    </>
  );
};

export default PreviewWithCode;
