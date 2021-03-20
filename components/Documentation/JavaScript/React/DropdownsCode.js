import React, { useState } from 'react';
import Dropdowns from 'components/Dropdowns/Dropdowns';
import DropdownItems from 'components/Dropdowns/DropdownItems';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';

export default function DropdownsCode({
  children,
  copyText,
  onCopy,
  buttonType,
  size,
  rounded,
  placement,
  buttonText,
  ripple,
  ...rest
}) {
  const [color, setColor] = useState('lightBlue');
  const [type, setType] = useState('react');

  const codeToShow = `import React from "react";
import Dropdowns from "@material-tailwind/react/Dropdowns"
import DropdownItems from "@material-tailwind/react/DropdownItems"
import Ripple from "material-ripple-effects";

export default function Dropdowns() {
  const ripple = new Ripple();

  return (
    <Dropdowns
      color="${color}"
      placement="${placement}"
      buttonText="${buttonText}"
      buttonType="${buttonType}"
      size="${size}"
      rounded={${rounded}}
      ${ripple}
    >
      <DropdownItems href="#" onClick={(e) => e.preventDefault()}>Action</DropdownItems>
      <DropdownItems href="#" onClick={(e) => e.preventDefault()}>Another Action</DropdownItems>
      <DropdownItems href="#" onClick={(e) => e.preventDefault()}>Something Else</DropdownItems>
    </Dropdowns>
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
          <Dropdowns
            {...rest}
            color={color}
            placement={placement}
            buttonText={buttonText}
            buttonType={buttonType}
            size={size}
            rounded={rounded}
          >
            <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
              Action
            </DropdownItems>
            <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
              Another Action
            </DropdownItems>
            <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
              Something Else
            </DropdownItems>
          </Dropdowns>
        </div>
      </DocsSnippet>
    </>
  );
}
