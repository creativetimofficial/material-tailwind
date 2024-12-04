'use client';

import React from 'react';

interface ComponentPreviewProps {
  componentPath: string;
}

function ComponentPreview({ componentPath }: ComponentPreviewProps) {
  console.log('componentPath', componentPath);
  const Component = React.lazy(async () => await import(`${componentPath}`));

  return (
    <React.Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <Component />
    </React.Suspense>
  );
};

export default ComponentPreview;
