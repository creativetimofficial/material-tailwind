import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Frameworks from 'components/Documentation/Frameworks.js';
import Buttons from 'components/Buttons/Buttons';

const colors = {
  blueGray: 'bg-blue-gray-500',
  gray: 'bg-gray-500',
  brown: 'bg-brown-500',
  deepOrange: 'bg-deep-orange-500',
  orange: 'bg-orange-500',
  amber: 'bg-amber-500',
  yellow: 'bg-yellow-500',
  lime: 'bg-lime-500',
  lightGreen: 'bg-light-green-500',
  green: 'bg-green-500',
  teal: 'bg-teal-500',
  cyan: 'bg-cyan-500',
  lightBlue: 'bg-light-blue-500',
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  deepPurple: 'bg-deep-purple-500',
  purple: 'bg-purple-500',
  pink: 'bg-pink-500',
  red: 'bg-red-500',
};

export default function ClosingAlertsCode({ copyText, onCopy }) {
  const [color, setColor] = useState('pink');
  const [type] = useState('react');
  const [showAlert, setShowAlert] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState();

  const onFrameworkClick = Frameworks(type, setShowModal, setModalText);

  const closeAlert = (event) => {
    let delay;

    const parentClassName = event.target.parentNode.parentNode;

    parentClassName.classList.add('opacity-0');

    Array.from(parentClassName.classList).map((el) =>
      el.includes('duration') ? (delay = el.split('-')[1]) : null,
    );

    setTimeout(
      () => setShowAlert(false),
      delay ? parseInt(delay, 10) + 100 : 250,
    );
  };

  let codeToShow = `import React from "react";
import ClosingAlerts from "@md-tailwind/react/ClosingAlerts";

export default function ClosingAlerts() {
  return (
    <>
      <ClosingAlerts key={key} color="${color}">MD Tailwind Closing Alerts</ClosingAlerts>
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
        {showAlert ? (
          <div
            className={`flex items-center gap-3 text-white p-4 pr-12 border-0 rounded relative mb-4 ${colors[color]} transition-all duration-300`}
          >
            <span className="font-medium uppercase">{color}!</span> This is a{' '}
            {color.toLowerCase()} closing alert - check it out!
            <button
              className="absolute right-4 top-1/3 transform -translate-y-1/3 w-6 h-6 bg-transparent text-2xl outline-none focus:outline-none"
              onClick={(e) => closeAlert(e)}
            >
              <span className="leading-none text-4xl">&times;</span>
            </button>
          </div>
        ) : (
          <Buttons color={color} onClick={() => setShowAlert(true)}>
            Revert Changes
          </Buttons>
        )}
      </DocsSnippet>
    </>
  );
}
