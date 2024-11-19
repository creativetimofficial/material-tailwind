"use client";

import React, { useState, useEffect } from 'react';

interface CodeSnippetProps {
  codeContent: string;
  language: string;
}


function getHtmlCodeContent(codeContent: string) {
  const regex = /__html:\s*`([\s\S]*?)`/;
  const match = codeContent.match(regex);

  if (match && match[1]) {
    const htmlContent = match[1];
    return htmlContent;
  } else {
    console.log('No HTML content found');
    return '';
  }
}

function CodeSnippet({ codeContent, language }: CodeSnippetProps) {

  return (
    <pre className={`language-${language} p-4 bg-gray-100 rounded`}>
      {
        language === 'html' ? (
          <code>{getHtmlCodeContent(codeContent)}</code> 
        ) : (
          <code>{codeContent}</code>
        )
      }
    </pre>
  );
};

export default CodeSnippet;
