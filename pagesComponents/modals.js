import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import ModalHeader from 'components/Modal/ModalHeader';
import ModalBody from 'components/Modal/ModalBody';
import ModalFooter from 'components/Modal/ModalFooter';
import Button from 'components/Button/Button';

export default function Modals({ size, color, modalSize }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Button
                color={color}
                type="button"
                onClick={() => setShowModal(true)}
                ripple="light"
            >
                Open {modalSize} Modal
            </Button>

            <Modal
                size={size}
                active={showModal}
                toggler={() => setShowModal(false)}
            >
                <ModalHeader toggler={() => setShowModal(false)}>
                    Modal Title
                </ModalHeader>
                <ModalBody>
                    <p className="text-base leading-relaxed text-gray-600 font-normal">
                        I always felt like I could do anything. That’s the main
                        thing people are controlled by! Thoughts- their
                        perception of themselves! They're slowed down by their
                        perception of themselves. If you're taught you can’t do
                        anything, you won’t do anything. I was taught I could do
                        everything.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="red"
                        buttonType="link"
                        onClick={() => setShowModal(false)}
                        ripple="dark"
                    >
                        Close
                    </Button>

                    <Button
                        color="green"
                        onClick={() => setShowModal(false)}
                        ripple="light"
                    >
                        Save Changes
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
