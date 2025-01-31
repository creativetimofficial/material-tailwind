'use client';

import React from 'react';

interface ComponentPreviewProps {
  componentPath: string;
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error loading component:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="p-4 text-center text-red-500">Failed to load component.</div>;
    }

    return this.props.children;
  }
}

function ComponentPreview({ componentPath }: ComponentPreviewProps) {
  const Component = React.lazy(async () => await import(`${componentPath}`));

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
        <Component />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default ComponentPreview;
