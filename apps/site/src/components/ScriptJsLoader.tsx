"use client";

// ScriptLoader.tsx
import { useEffect } from 'react';

const ScriptLoader = ({ src }: { src: string }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);

  return null; // This component only loads the script, nothing is rendered
};

export default ScriptLoader;
