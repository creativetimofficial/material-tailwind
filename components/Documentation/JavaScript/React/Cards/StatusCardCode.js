import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet';
import Frameworks from 'components/Documentation/Frameworks';
import Card from 'components/Card/Card';
import CardRow from 'components/Card/CardRow';
import CardHeader from 'components/Card/CardHeader';
import CardStatus from 'components/Card/CardStatus';
import CardStatusFooter from 'components/Card/CardStatusFooter';
import Icon from 'components/Icon/Icon';

export default function StatusCardCode({ copyText, onCopy }) {
    const [type] = useState('react');
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState();
    const onFrameworkClick = Frameworks(type, setShowModal, setModalText);

    const codeToShow = `import React from "react";
import Card from "@material-tailwind/react/Card";
import CardRow from "@material-tailwind/react/CardRow";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardStatus from "@material-tailwind/react/CardStatus";
import CardStatusFooter from "@material-tailwind/react/CardStatusFooter";
import Icon from "@material-tailwind/react/Icon";

export default function Card() {
    return (
        <Card>
            <CardRow>
                <CardHeader color="lightBlue" size="lg" iconOnly>
                    <Icon name="groups" size="5xl" color="white" />
                </CardHeader>

                <CardStatus title="Users" amount="350,000" />
            </CardRow>

            <CardStatusFooter color="green" amount="97%" date="Since one week">
                <Icon color="green" name="arrow_upward" />
            </CardStatusFooter>
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
                            <CardRow>
                                <CardHeader
                                    color="lightBlue"
                                    size="lg"
                                    iconOnly
                                >
                                    <Icon
                                        name="groups"
                                        size="5xl"
                                        color="white"
                                    />
                                </CardHeader>

                                <CardStatus title="Users" amount="350,000" />
                            </CardRow>

                            <CardStatusFooter
                                color="green"
                                amount="97%"
                                date="Since one week"
                            >
                                <Icon color="green" name="arrow_upward" />
                            </CardStatusFooter>
                        </Card>
                    </div>
                </div>
            </DocsSnippet>
        </>
    );
}
