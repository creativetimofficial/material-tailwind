import React, { useState } from 'react';
import Dropdown from 'components/Dropdown/Dropdown';
import DropdownItem from 'components/Dropdown/DropdownItem';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';

export default function DropdownCode({
    children,
    copyText,
    onCopy,
    buttonType,
    size,
    rounded,
    placement,
    buttonText,
    rippleEffect,
    blockLevel,
    ...rest
}) {
    const [color, setColor] = useState('lightBlue');
    const [type, setType] = useState('react');

    const codeToShow = `import React from "react";
import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"

export default function Dropdown() {
  return (
    <Dropdown
      color="${color}"
      placement="${placement}"
      buttonText="${buttonText}"
      buttonType="${buttonType}"
      size="${size}"
      rounded={${rounded}}
      ${blockLevel}
      ${rippleEffect}
    >
      <DropdownItem
        href="#"
        color="${color}"
        onClick={(e) => e.preventDefault()}
      >
        Action
      </DropdownItem>
      <DropdownItem
        href="#"
        color="${color}"
        onClick={(e) => e.preventDefault()}
      >
        Another Action
      </DropdownItem>
      <DropdownItem
        href="#"
        color="${color}"
        onClick={(e) => e.preventDefault()}
      >
        Something else
      </DropdownItem>
    </Dropdown>
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
                    <Dropdown
                        {...rest}
                        color={color}
                        placement={placement}
                        buttonText={buttonText}
                        buttonType={buttonType}
                        size={size}
                        rounded={rounded}
                    >
                        <DropdownItem
                            color={color}
                            href="#"
                            onClick={(e) => e.preventDefault()}
                        >
                            Action
                        </DropdownItem>
                        <DropdownItem
                            color={color}
                            href="#"
                            onClick={(e) => e.preventDefault()}
                        >
                            Another Action
                        </DropdownItem>
                        <DropdownItem
                            color={color}
                            href="#"
                            onClick={(e) => e.preventDefault()}
                        >
                            Something Else
                        </DropdownItem>
                    </Dropdown>
                </div>
            </DocsSnippet>
        </>
    );
}
