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
  const [color, setColor] = useState('pink');
  const [type, setType] = useState('react');

  const codeToShow = `import React from "react";
import Dropdowns from "@md-tailwind/react/Dropdowns"
import DropdownItems from "@md-tailwind/react/DropdownItems"
import "@md-ripple-effect";

export default function Dropdowns() {
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
      <DropdownItems>Action</DropdownItems>
      <DropdownItems>Another Action</DropdownItems>
      <DropdownItems>Something Else</DropdownItems>
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
            <DropdownItems>Action</DropdownItems>
            <DropdownItems>Another Action</DropdownItems>
            <DropdownItems>Something Else</DropdownItems>
          </Dropdowns>
        </div>
      </DocsSnippet>
    </>
  );
}
