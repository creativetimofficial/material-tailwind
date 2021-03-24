import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Frameworks from 'components/Documentation/Frameworks.js';
import Pagination from 'components/Pagination/Pagination';
import PaginationItem from 'components/Pagination/PaginationItem';
import Icon from 'components/Icon/Icon';

export default function AlertsCode({ copyText, onCopy }) {
  const [color, setColor] = useState('lightBlue');
  const [type] = useState('react');
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState();
  const onFrameworkClick = Frameworks(type, setShowModal, setModalText);

  const codeToShow = `import React from "react";
import Pagination from "@material-tailwind/react/Pagination";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";

export default function Pagination() {
  return (
    <Pagination>
      <PaginationItem href="#last" ripple="dark">
        <Icon name="keyboard_arrow_left" size="md" />
      </PaginationItem>
      <PaginationItem color="${color}" href="#1" ripple="light">
        1
      </PaginationItem>
      <PaginationItem href="#2" ripple="dark">
        2
      </PaginationItem>
      <PaginationItem href="#3" ripple="dark">
        3
      </PaginationItem>
      <PaginationItem href="#4" ripple="dark">
        4
      </PaginationItem>
      <PaginationItem href="#5" ripple="dark">
        5
      </PaginationItem>
      <PaginationItem href="#last" ripple="dark">
        <Icon name="keyboard_arrow_right" size="md" />
      </PaginationItem>
    </Pagination>
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
          <Pagination>
            <PaginationItem href="#last" ripple="dark">
              <Icon name="keyboard_arrow_left" size="md" />
            </PaginationItem>
            <PaginationItem color={color} href="#1" ripple="light">
              1
            </PaginationItem>
            <PaginationItem href="#2" ripple="dark">
              2
            </PaginationItem>
            <PaginationItem href="#3" ripple="dark">
              3
            </PaginationItem>
            <PaginationItem href="#4" ripple="dark">
              4
            </PaginationItem>
            <PaginationItem href="#5" ripple="dark">
              5
            </PaginationItem>
            <PaginationItem href="#last" ripple="dark">
              <Icon name="keyboard_arrow_right" size="md" />
            </PaginationItem>
          </Pagination>
        </div>
      </DocsSnippet>
    </>
  );
}
