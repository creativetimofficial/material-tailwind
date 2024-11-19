'use client';

import React from 'react';

interface ComponentPreviewProps {
  componentPath: string;
}

function ComponentPreview({ componentPath }: ComponentPreviewProps) {
  // const Component = React.lazy(() => import(componentPath));
  const Component = React.lazy(() => import(`${componentPath}`));

  return (
    <React.Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <Component />
    </React.Suspense>
  );
};

export default ComponentPreview;
