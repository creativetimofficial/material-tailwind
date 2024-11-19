"use client";

import React, { useState, useEffect } from 'react';

interface CodeSnippetProps {
  codePath: string;
  language: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ codePath, language }) => {
  const [code, setCode] = useState('');

  console.log('codePath', codePath);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const res = await fetch(`/api/code?filePath=${codePath}`);
        if (!res.ok) {
          throw new Error('Failed to fetch code');
        }
        const data = await res.text();
        setCode(data);
      } catch (error) {
        console.error('Error fetching code:', error);
        setCode('Error loading code');
      }
    };

    fetchCode();

    console.log('useEffect triggered');
    return;
  }, [codePath]);

  return (
    <pre className={`language-${language} p-4 bg-gray-100 rounded`}>
      <code>{code}</code>
    </pre>
  );
};

export default CodeSnippet;
