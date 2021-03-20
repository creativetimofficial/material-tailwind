import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Buttons from 'components/Buttons/Buttons';

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
  const [color, setColor] = useState('lightBlue');
  const [type, setType] = useState('react');

  const codeToShow = `import React from "react";
import Buttons from "@material-tailwind/react/Buttons";
${
  hasIcon
    ? 'import Icon from "@material-tailwind/react/Icon"; \nimport Ripple from "material-ripple-effects";'
    : 'import Ripple from "material-ripple-effects";'
}

export default function Buttons() {
  const ripple = new Ripple();

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
        <div className="flex justify-center">
          <Buttons
            {...rest}
            color={color}
            buttonType={buttonType}
            size={size}
            rounded={rounded}
          >
            {children}
          </Buttons>
        </div>
      </DocsSnippet>
    </>
  );
}
