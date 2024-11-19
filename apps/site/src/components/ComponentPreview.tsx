'use client';

import React from 'react';

interface ComponentPreviewProps {
  componentPath: string;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({ componentPath }) => {
  // const Component = React.lazy(() => import(componentPath));
  const Component = React.lazy(() => import(`${componentPath}`));

  console.log('componentPath', componentPath);
  console.log('Component', Component);
  return (
    <React.Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <Component />
    </React.Suspense>
  );
};

export default ComponentPreview;
