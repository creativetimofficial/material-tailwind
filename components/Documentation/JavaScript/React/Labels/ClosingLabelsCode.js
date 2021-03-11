import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Frameworks from 'components/Documentation/Frameworks.js';
import Buttons from 'components/Buttons/Buttons';

const divBgColors = {
  blueGray: 'bg-blue-gray-100',
  gray: 'bg-gray-100',
  brown: 'bg-brown-100',
  deepOrange: 'bg-deep-orange-100',
  orange: 'bg-orange-100',
  amber: 'bg-amber-100',
  yellow: 'bg-yellow-100',
  lime: 'bg-lime-100',
  lightGreen: 'bg-light-green-100',
  green: 'bg-green-100',
  teal: 'bg-teal-100',
  cyan: 'bg-cyan-100',
  lightBlue: 'bg-light-blue-100',
  blue: 'bg-blue-100',
  indigo: 'bg-indigo-100',
  deepPurple: 'bg-deep-purple-100',
  purple: 'bg-purple-100',
  pink: 'bg-pink-100',
  red: 'bg-red-100',
};

const spanBgColors = {
  blueGray: 'bg-blue-gray-900',
  gray: 'bg-gray-900',
  brown: 'bg-brown-900',
  deepOrange: 'bg-deep-orange-900',
  orange: 'bg-orange-900',
  amber: 'bg-amber-900',
  yellow: 'bg-yellow-900',
  lime: 'bg-lime-900',
  lightGreen: 'bg-light-green-900',
  green: 'bg-green-900',
  teal: 'bg-teal-900',
  cyan: 'bg-cyan-900',
  lightBlue: 'bg-light-blue-900',
  blue: 'bg-blue-900',
  indigo: 'bg-indigo-900',
  deepPurple: 'bg-deep-purple-900',
  purple: 'bg-purple-900',
  pink: 'bg-pink-900',
  red: 'bg-red-900',
};

const textColors = {
  blueGray: 'text-blue-gray-700',
  gray: 'text-gray-700',
  brown: 'text-brown-700',
  deepOrange: 'text-deep-orange-700',
  orange: 'text-orange-700',
  amber: 'text-amber-700',
  yellow: 'text-yellow-700',
  lime: 'text-lime-700',
  lightGreen: 'text-light-green-700',
  green: 'text-green-700',
  teal: 'text-teal-700',
  cyan: 'text-cyan-700',
  lightBlue: 'text-light-blue-700',
  blue: 'text-blue-700',
  indigo: 'text-indigo-700',
  deepPurple: 'text-deep-purple-700',
  purple: 'text-purple-700',
  pink: 'text-pink-700',
  red: 'text-red-700',
};

export default function ClosingAlertsCode({ copyText, onCopy }) {
  const [color, setColor] = useState('pink');
  const [type] = useState('react');
  const [showLabel, setShowLabel] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState();

  const onFrameworkClick = Frameworks(type, setShowModal, setModalText);

  const closeLabel = (event) => {
    let delay;

    const parentClassName = event.target.parentNode;

    parentClassName.classList.add('opacity-0');

    Array.from(parentClassName.classList).map((el) =>
      el.includes('duration') ? (delay = el.split('-')[1]) : null,
    );

    setTimeout(
      () => setShowLabel(false),
      delay ? parseInt(delay, 10) + 100 : 250,
    );
  };

  let codeToShow = `import React from "react";
import ClosingLabels from "@md-tailwind/react/ClosingLabels";

export default function ClosingLabels() {
  return (
    <ClosingLabels key={key} color="${color}">Label</ClosingLabels>
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
        <div className="flex">
          {showLabel ? (
            <div
              className={`flex items-center justify-between py-1 pl-3 pr-1 rounded-full ${divBgColors[color]} last:mr-0 mr-1 transition-all duration-300`}
            >
              <span
                className={`text-xs font-semibold ${textColors[color]} uppercase mr-2`}
              >
                Label
              </span>
              <span
                className={`${spanBgColors[color]} text-white text-lg leading-none rounded-full w-5 h-5 cursor-pointer grid place-items-center`}
                onClick={closeLabel}
              >
                &times;
              </span>
            </div>
          ) : (
            <Buttons color={color} onClick={() => setShowLabel(true)}>
              Revert Changes
            </Buttons>
          )}
        </div>
      </DocsSnippet>
    </>
  );
}
