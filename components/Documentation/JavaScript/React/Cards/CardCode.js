import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet';
import Frameworks from 'components/Documentation/Frameworks';
import Card from 'components/Card/Card';
import CardImage from 'components/Card/CardImage';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import H6 from 'components/Typography/Heading6';
import Paragraph from 'components/Typography/Paragraph';
import Buttons from 'components/Buttons/Buttons';

export default function CardCode({ copyText, onCopy }) {
  const [type] = useState('react');
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState();

  const onFrameworkClick = Frameworks(type, setShowModal, setModalText);

  const codeToShow = `import React from "react";
import Card from "@md-tailwind/Card";
import CardImage from "@md-tailwind/react/CardImage";
import CardBody from "@md-tailwind/react/CardBody";
import CardFooter from "@md-tailwind/react/CardFooter";
import H6 from "@md-tailwind/react/Heading6";
import Paragraph from "@md-tailwind/react/Paragraph";
import Buttons from "@md-tailwind/react/Buttons";
import "material-ripple-effects";

export default function Card() {
  return (
    <Card>
      <CardImage
        src="https://images.unsplash.com/photo-1612831455740-a2f6212eeeb2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80"
        alt="Card Image"
      />

      <CardBody>
        <H6 color="gray">Card Title</H6>
        <Paragraph color="gray">
          Don't be scared of the truth because we need to restart the human
          foundation in truth And I love you like Kanye loves Kanye I love
          Rick Owens’ bed design but the back is...
        </Paragraph>
      </CardBody>

      <CardFooter>
        <Buttons color="lightBlue" size="lg" data-ripple-light={true}>
          Read More
        </Buttons>
      </CardFooter>
    </Card>
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
        activeFramework={type}
        codeToShow={codeToShow}
        onFrameworkClick={onFrameworkClick}
      >
        <div className="flex justify-center">
          <Card>
            <CardImage
              src="https://images.unsplash.com/photo-1612831455740-a2f6212eeeb2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80"
              alt="Card Image"
            />

            <CardBody>
              <H6 color="gray">Card Title</H6>
              <Paragraph color="gray">
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </Paragraph>
            </CardBody>

            <CardFooter>
              <Buttons color="lightBlue" size="lg" data-ripple-light={true}>
                Read More
              </Buttons>
            </CardFooter>
          </Card>
        </div>
      </DocsSnippet>
    </>
  );
}
