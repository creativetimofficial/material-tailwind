import React, { useState } from 'react';
import Modal from 'components/Modals/Modal';
import ModalHeader from 'components/Modals/ModalHeader';
import ModalBody from 'components/Modals/ModalBody';
import ModalFooter from 'components/Modals/ModalFooter';
import Buttons from 'components/Buttons/Buttons';

export default function Modals({size, color, modalSize}) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Buttons
        color={color}
        type="button"
        onClick={() => setShowModal(true)}
        data-md-ripple-light={true}
      >
        Open {modalSize} Modal
      </Buttons>

      <Modal size={size} active={showModal} toggler={() => setShowModal(false)}>
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
          <Buttons color="red" buttonType="link" onClick={() => setShowModal(false)}>
            Close
          </Buttons>

          <Buttons color="green" onClick={() => setShowModal(false)}>
            Save Changes
          </Buttons>
        </ModalFooter>
      </Modal>
    </>
  );
}