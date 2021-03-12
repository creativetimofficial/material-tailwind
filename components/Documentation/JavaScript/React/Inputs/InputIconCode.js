import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import InputIcon from 'components/Input/InputIcon';

export default function InputIconCode({
  copyText,
  onCopy,
  placeholder,
  size,
  outline,
}) {
  const [color, setColor] = useState('pink');
  const [type, setType] = useState('react');

  const codeToShow = `import React from "react";
import InputIcon from "@md-tailwind/react/InputIcon";

export default function Input() {
  return (
    <InputIcon
      type="text"
      color="${color}"
      size="${size}"
      outline={${outline}}
      placeholder="${placeholder}"
      iconFamily="material-icons"
      iconName="person"
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
        <div className="w-72 mx-auto">
          <InputIcon
            type="text"
            color={color}
            size={size}
            outline={outline}
            placeholder={placeholder}
            iconFamily="material-icons"
            iconName="person"
          />
        </div>
      </DocsSnippet>
    </>
  );
}
