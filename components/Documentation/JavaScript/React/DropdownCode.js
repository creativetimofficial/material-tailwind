import React, { useState } from 'react';
import Dropdown from 'components/Dropdown/Dropdown';
import DropdownItem from 'components/Dropdown/DropdownItem';
import DropdownLink from 'components/Dropdown/DropdownLink';
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
import DropdownLink from "@material-tailwind/react/DropdownLink"

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
      <DropdownItem color="${color}" ripple="light">
        Action
      </DropdownItem>
      <DropdownLink
          href="#"
          color={color}
          ripple="light"
          onClick={(e) => e.preventDefault()}
      >
          Another Action
      </DropdownLink>
      <DropdownItem color="${color}" ripple="light">
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
                <div
                    className={
                        blockLevel === 'block={true}'
                            ? 'w-full'
                            : 'flex justify-center '
                    }
                >
                    <Dropdown
                        {...rest}
                        color={color}
                        placement={placement}
                        buttonText={buttonText}
                        buttonType={buttonType}
                        size={size}
                        rounded={rounded}
                    >
                        <DropdownItem color={color} ripple="light">
                            Action
                        </DropdownItem>
                        <DropdownLink
                            href="#"
                            color={color}
                            ripple="light"
                            onClick={(e) => e.preventDefault()}
                        >
                            Another Action
                        </DropdownLink>
                        <DropdownItem color={color} ripple="light">
                            Something Else
                        </DropdownItem>
                    </Dropdown>
                </div>
            </DocsSnippet>
        </>
    );
}
