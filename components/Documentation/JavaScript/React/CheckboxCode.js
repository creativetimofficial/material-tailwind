import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Checkbox from 'components/Checkbox/Checkbox';

export default function CheckboxCode({ copyText, onCopy }) {
    const [color, setColor] = useState('lightBlue');
    const [type, setType] = useState('react');

    const codeToShow = `import React from "react";
import Checkbox from "@material-tailwind/react/Checkbox"

export default function Checkbox() {
    return (
        <Checkbox
            color="${color}"
            text="Checkbox"
            id="checkbox"
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
                <div className="flex justify-center py-5">
                    <Checkbox color={color} text="Checkbox" id="checkbox" />
                </div>
            </DocsSnippet>
        </>
    );
}
