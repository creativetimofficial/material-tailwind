import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Radio from 'components/Radio/Radio';

export default function RadioButtonCode({ copyText, onCopy }) {
    const [color, setColor] = useState('lightBlue');
    const [type, setType] = useState('react');

    const codeToShow = `import React from "react";
import Radio from "@material-tailwind/react/Radio"

export default function RadioButton() {
    return (
        <Radio
            color="${color}"
            text="Option 1"
            id="option-1"
            name="option"
        />
        <Radio
            color="${color}"
            text="Option 2"
            id="option-2"
            name="option"
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
                    <div className="mr-10">
                        <Radio
                            color={color}
                            text="Option 1"
                            id="option-1"
                            name="option"
                        />
                    </div>
                    <div>
                        <Radio
                            color={color}
                            text="Option 2"
                            id="option-2"
                            name="option"
                        />
                    </div>
                </div>
            </DocsSnippet>
        </>
    );
}
