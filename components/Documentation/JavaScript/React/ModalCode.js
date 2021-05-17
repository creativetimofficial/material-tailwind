import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Frameworks from 'components/Documentation/Frameworks.js';
import Modal from 'components/Modal/Modal';
import ModalHeader from 'components/Modal/ModalHeader';
import ModalBody from 'components/Modal/ModalBody';
import ModalFooter from 'components/Modal/ModalFooter';
import Button from 'components/Button/Button';

export default function AlertsCode({ copyText, onCopy, size, modalSize }) {
    const [color, setColor] = useState('lightBlue');
    const [type] = useState('react');
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState();
    const [showModalCode, setShowModalCode] = React.useState(false);
    const onFrameworkClick = Frameworks(type, setShowModal, setModalText);

    const codeToShow = `import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <Button
                color="${color}"
                type="button"
                onClick={(e) => setShowModalCode(true)}
                ripple="light"
            >
                Open ${modalSize} Modal
            </Button>

            <Modal size="${size}" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    Modal Title
                </ModalHeader>
                <ModalBody>
                    <p className="text-base leading-relaxed text-gray-600 font-normal">
                        I always felt like I could do anything. That’s the main thing people
                        are controlled by! Thoughts- their perception of themselves! They're
                        slowed down by their perception of themselves. If you're taught you
                        can’t do anything, you won’t do anything. I was taught I could do
                        everything.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="red"
                        buttonType="link"
                        onClick={(e) => setShowModalCode(false)}
                        ripple="dark"
                    >
                        Close
                    </Button>

                    <Button
                        color="green"
                        onClick={(e) => setShowModalCode(false)}
                        ripple="light"
                    >
                        Save Changes
                    </Button>
                </ModalFooter>
            </Modal>
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
                activeColor={color}
                activeFramework={type}
                codeToShow={codeToShow}
                onColorClick={(color) => setColor(color)}
                onFrameworkClick={onFrameworkClick}
            >
                <div className="flex justify-center">
                    <Button
                        color={color}
                        type="button"
                        onClick={(e) => setShowModalCode(true)}
                        ripple="light"
                    >
                        Open {modalSize} Modal
                    </Button>

                    <Modal
                        size={size}
                        active={showModalCode}
                        toggler={() => setShowModalCode(false)}
                    >
                        <ModalHeader toggler={() => setShowModalCode(false)}>
                            Regular Modal
                        </ModalHeader>
                        <ModalBody>
                            <p className="text-base leading-relaxed text-gray-600 font-normal">
                                I always felt like I could do anything. That’s
                                the main thing people are controlled by!
                                Thoughts- their perception of themselves!
                                They're slowed down by their perception of
                                themselves. If you're taught you can’t do
                                anything, you won’t do anything. I was taught I
                                could do everything.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="red"
                                buttonType="link"
                                onClick={(e) => setShowModalCode(false)}
                                ripple="dark"
                            >
                                Close
                            </Button>

                            <Button
                                color="green"
                                onClick={(e) => setShowModalCode(false)}
                                ripple="light"
                            >
                                Save Changes
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </DocsSnippet>
        </>
    );
}
