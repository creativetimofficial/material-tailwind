import React, { useState, useRef } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Frameworks from 'components/Documentation/Frameworks.js';
import Button from 'components/Button/Button';
import Popover from 'components/Popover/Popover';
import PopoverContainer from 'components/Popover/PopoverContainer';
import PopoverHeader from 'components/Popover/PopoverHeader';
import PopoverBody from 'components/Popover/PopoverBody';

export default function AlertsCode({ copyText, onCopy, placement }) {
  const [color, setColor] = useState('lightBlue');
  const [type] = useState('react');
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState();
  const buttonRef = useRef();
  const onFrameworkClick = Frameworks(type, setShowModal, setModalText);

  const codeToShow = `import React, { useRef } from "react";
import Button from "@material-tailwind/react/Button";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverHeader from "@material-tailwind/react/PopoverHeader";
import PopoverBody from "@material-tailwind/react/PopoverBody";

export default function Popover() {
  const buttonRef = useRef();

  return (
    <>
      <Button color="${color}" ref={buttonRef} ripple="light">
        Popover ${placement}
      </Button>

      <Popover placement="${placement}" ref={buttonRef}>
        <PopoverContainer>
          <PopoverHeader>Popover ${placement}</PopoverHeader>
          <PopoverBody>
            And here's some amazing content. It's very engaging. Right?
          </PopoverBody>
        </PopoverContainer>
      </Popover>
    </>
  );
}`;

  return (
    <>
      {showModal ? (
        <>
          <div
            className="block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h5 className="text-2xl font-normal mt-0 mb-0 ">
                    Component not supported
                  </h5>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4">
                    At the moment we do not support the choosen framework (
                    {modalText}) for this component.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <DocsSnippet
        copyText={copyText}
        onCopy={onCopy}
        activeColor={color}
        activeFramework={type}
        codeToShow={codeToShow}
        onColorClick={(color) => setColor(color)}
        onFrameworkClick={onFrameworkClick}
      >
        <div className="flex justify-center">
          <Button color={color} ref={buttonRef} ripple="light">
            Popover {placement}
          </Button>

          <Popover placement={placement} ref={buttonRef}>
            <PopoverContainer>
              <PopoverHeader>Popover {placement}</PopoverHeader>
              <PopoverBody>
                And here's some amazing content. It's very engaging. Right?
              </PopoverBody>
            </PopoverContainer>
          </Popover>
        </div>
      </DocsSnippet>
    </>
  );
}
