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
    fetch(`/api/code?filePath=${codePath}`)
      .then((res) => res.text())
      .then((data) => setCode(data));
  });

  return (
    <pre className={`language-${language} p-4 bg-gray-100 rounded`}>
      <code>{code}</code>
    </pre>
  );
};

export default CodeSnippet;
