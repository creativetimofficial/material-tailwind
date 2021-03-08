import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Buttons from 'components/Buttons/Buttons';
import 'ripple/ripple';

export default function ButtonsCode({
  children,
  copyText,
  onCopy,
  buttonType,
  size,
  rounded,
  ripple,
  hasIcon,
  buttonChildren,
  ...rest
}) {
  const [color, setColor] = useState('pink');
  const [type, setType] = useState('react');

  const codeToShow = `import React from "react";
import Buttons from "@md-tailwind/react/Buttons";
${
  hasIcon
    ? 'import Icon from "@md-tailwind/react/Icon"; \nimport "@md-ripple-effect";'
    : 'import "@md-ripple-effect";'
}

export default function Buttons() {
  return (
    <Buttons
      color="${color}"
      buttonType="${buttonType}"
      size="${size}"
      rounded={${rounded}}
      ${ripple}
    >
      ${buttonChildren}
    </Buttons>
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
        <Buttons
          {...rest}
          color={color}
          buttonType={buttonType}
          size={size}
          rounded={rounded}
        >
          {children}
        </Buttons>
      </DocsSnippet>
    </>
  );
}
