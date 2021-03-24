import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Button from 'components/Button/Button';

export default function ButtonCode({
  children,
  copyText,
  onCopy,
  buttonType,
  size,
  rounded,
  hasIcon,
  buttonChildren,
  rippleEffect,
  ...rest
}) {
  const [color, setColor] = useState('lightBlue');
  const [type, setType] = useState('react');

  const codeToShow = `import React from "react";
${
  hasIcon
    ? 'import Button from "@material-tailwind/react/Button";\nimport Icon from "@material-tailwind/react/Icon";'
    : 'import Button from "@material-tailwind/react/Button";'
}

export default function Button() {
  return (
    <Button
      color="${color}"
      buttonType="${buttonType}"
      size="${size}"
      rounded={${rounded}}
      ${rippleEffect}
    >
      ${buttonChildren}
    </Button>
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
        <div className="flex justify-center">
          <Button
            {...rest}
            color={color}
            buttonType={buttonType}
            size={size}
            rounded={rounded}
          >
            {children}
          </Button>
        </div>
      </DocsSnippet>
    </>
  );
}
