import React from 'react';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import Buttons from 'components/Buttons/Buttons';

const RegularModal = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Buttons
        color="pink"
        type="button"
        onClick={() => setShowModal(true)}
        data-md-ripple-light={true}
      >
        Open Regular Modal
      </Buttons>

      <Modal active={showModal} toggler={() => setShowModal(false)}>
        <ModalHeader toggler={() => setShowModal(false)}>
          Regular Modal
        </ModalHeader>
        <ModalBody>
          <p className="text-base leading-relaxed text-gray-600 font-normal mt-0 mb-12">
            I always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves! They're
            slowed down by their perception of themselves. If you're taught you
            can’t do anything, you won’t do anything. I was taught I could do
            everything.
          </p>
        </ModalBody>
        <ModalFooter>
          <Buttons color="red" type="link" onClick={() => setShowModal(false)}>
            Close
          </Buttons>

          <Buttons color="green" onClick={() => setShowModal(false)}>
            Save Changes
          </Buttons>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default RegularModal;
