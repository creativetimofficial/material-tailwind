import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Textarea from 'components/Textarea/Textarea';

export default function TextareaCode({
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
import Textarea from "@material-tailwind/react/Textarea";

export default function Textarea() {
  return (
    <Textarea
        color="${color}"
        size="${size}"
        outline={${outline}}
        placeholder="${placeholder}"${
        errorMessage ? `\n        error="${errorMessage}"` : ''
    }${successMessage ? `\n        success="${successMessage}"` : ''}
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
                    className={`w-full p-10  mx-auto ${
                        errorMessage || successMessage ? 'mb-10' : ''
                    }`}
                >
                    <Textarea
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
