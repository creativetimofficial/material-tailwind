import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet';
import Frameworks from 'components/Documentation/Frameworks';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import Button from 'components/Button/Button';
import InputIcon from 'components/Input/InputIcon';
import H5 from 'components/Typography/Heading5';

export default function LoginCardCode({ copyText, onCopy }) {
    const [type] = useState('react');
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState();
    const onFrameworkClick = Frameworks(type, setShowModal, setModalText);

    const codeToShow = `import React from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import H5 from "@material-tailwind/react/Heading5";

export default function Card() {
  return (
    <Card>
        <CardHeader color="lightBlue" size="lg">
            <H5 color="white">Login</H5>
        </CardHeader>

        <CardBody>
            <div className="mt-4 mb-8 px-4">
                <InputIcon
                    type="text"
                    color="lightBlue"
                    placeholder="First Name"
                    iconName="account_circle"
                />
            </div>
            <div className="mb-8 px-4">
                <InputIcon
                    type="email"
                    color="lightBlue"
                    placeholder="Email Address"
                    iconName="email"
                />
            </div>
            <div className="mb-4 px-4">
                <InputIcon
                    type="password"
                    color="lightBlue"
                    placeholder="password"
                    iconName="lock"
                />
            </div>
        </CardBody>
        <CardFooter>
            <div className="flex justify-center">
                <Button
                    color="lightBlue"
                    buttonType="link"
                    size="lg"
                    ripple="dark"
                >
                    Get Started
                </Button>
            </div>
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
                                        At the moment we do not support the
                                        choosen framework ({modalText}) for this
                                        component.
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
                <div className="flex justify-center bg-gray-100 rounded">
                    <div className="w-96 pb-10 pt-16">
                        <Card>
                            <CardHeader color="lightBlue" size="lg">
                                <H5 color="white">Login</H5>
                            </CardHeader>

                            <CardBody>
                                <div className="mt-4 mb-8 px-4">
                                    <InputIcon
                                        type="text"
                                        color="lightBlue"
                                        placeholder="First Name"
                                        iconName="account_circle"
                                    />
                                </div>
                                <div className="mb-8 px-4">
                                    <InputIcon
                                        type="email"
                                        color="lightBlue"
                                        placeholder="Email Address"
                                        iconName="email"
                                    />
                                </div>
                                <div className="mb-4 px-4">
                                    <InputIcon
                                        type="password"
                                        color="lightBlue"
                                        placeholder="password"
                                        iconName="lock"
                                    />
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div className="flex justify-center">
                                    <Button
                                        color="lightBlue"
                                        buttonType="link"
                                        size="lg"
                                        ripple="dark"
                                    >
                                        Get Started
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </DocsSnippet>
        </>
    );
}
