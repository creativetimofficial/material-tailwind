import React from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Image from 'components/Image/Image';

export default function ButtonsCode({
    copyText,
    onCopy,
    src,
    rounded,
    raised,
    alt,
}) {
    const codeToShow = `import React from "react";
import Image from "@material-tailwind/react/Image";

export default function Image() {
  return (
    <Image
      src="image-link-here"
      rounded={${rounded}}
      raised={${raised}}
      alt="${alt}"
    />
  )
}`;

    return (
        <>
            <DocsSnippet
                copyText={copyText}
                onCopy={onCopy}
                codeToShow={codeToShow}
            >
                <div className="flex justify-center w-full">
                    <div className="w-72">
                        <Image
                            src={src}
                            rounded={rounded}
                            raised={raised}
                            alt={alt}
                        />
                    </div>
                </div>
            </DocsSnippet>
        </>
    );
}
