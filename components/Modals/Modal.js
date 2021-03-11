import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, size = 'Regular', active, toggler }) => {
  let modalSize;

  if (size === 'sm') {
    modalSize = 'max-w-sm rounded-lg shadow-xl';
  } else if (size === 'lg') {
    modalSize = 'max-w-6xl rounded-lg shadow-xl';
  } else {
    modalSize = 'max-w-3xl rounded-xl shadow-4xl';
  }

  // <div class="border-0 p-6 rounded-xl shadow-4xl relative flex flex-col w-full bg-white outline-none focus:outline-none"><div class="flex items-center justify-between mb-6"><h5 class="text-2xl font-bold mt-0 mb-0 ">Modal Title</h5><button class="p-1 bg-transparent absolute top-4 right-4 text-black text-3xl leading-none outline-none focus:outline-none"><span class="material-icons text-blck text-2xl block">close</span></button></div><div class="relative flex-auto"><p class="text-base leading-relaxed text-gray-600 font-normal mt-0 mb-6">I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.</p></div><div class="flex items-center justify-end"><button class="bg-transparent text-red-500 font-medium text-sm tracking-wider py-2.5 px-6 rounded outline-none focus:outline-none mr-2 mb-1 hover:bg-red-50 focus:bg-red-50 active:bg-red-100 transition-all duration-300" type="button">Close</button><button class="text-white font-medium py-2.5 px-6 text-sm tracking-wider rounded outline-none focus:outline-none mr-1 mb-1 bg-green-500 hover:bg-green-700 focus:bg-green-400 active:bg-green-800 transition-all duration-300" type="button">Save Changes</button></div></div>

  return (
    <>
      <div
        className={`${
          active
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } grid place-items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-500`}
        onClick={toggler}
      >
        <div
          className={`transform ${
            active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          } w-auto my-6 mx-auto ${modalSize} transition-all duration-500`}
        >
          <div className="border-0 py-7 px-8 rounded-lg shadow-xl flex flex-col w-full bg-white outline-none focus:outline-none">
            {children}
          </div>
        </div>
      </div>
      <div
        className={`${
          active
            ? 'opacity-25 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } fixed inset-0 z-40 bg-black transition-all duration-500`}
      />
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  active: PropTypes.bool,
  toggler: PropTypes.func,
};

export default Modal;
