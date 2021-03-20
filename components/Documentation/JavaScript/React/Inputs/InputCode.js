import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Input from 'components/Input/Input';

export default function InputCode({
  copyText,
  onCopy,
  placeholder,
  size,
  outline,
  errorMessage,
  successMessage,
  ...rest
}) {
  const [color, setColor] = useState('lightBlue');
  const [type, setType] = useState('react');

  const codeToShow = `import React from "react";
import Input from "@material-tailwind/react/Input";

export default function Input() {
  return (
    <Input
      type="text"
      color="${color}"
      size="${size}"
      outline={${outline}}
      placeholder="${placeholder}"${
    errorMessage ? `\n      error="${errorMessage}"` : ''
  }${successMessage ? `\n      success="${successMessage}"` : ''}
    />
  )
}`;

  return (
    <>
      <DocsSnippet
        copyText={copyText}
        onCopy={onCopy}
        activeColor={color}
        activeFramework={type}
        codeToShow={codeToShow}
        onColorClick={(color) => setColor(color)}
        onFrameworkClick={(type) => setType(type)}
      >
        <div
          className={`w-72 mx-auto ${
            errorMessage || successMessage ? 'mb-10' : ''
          }`}
        >
          <Input
            type="text"
            color={color}
            size={size}
            outline={outline}
            placeholder={placeholder}
            {...rest}
          />
        </div>
      </DocsSnippet>
    </>
  );
}
