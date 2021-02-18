import React from 'react';

const RegularModal = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="text-white font-medium text-sm py-2.5 px-6 rounded leading-normal outline-none focus:outline-none mr-1 mb-1 bg-pink-500 shadow-md tracking-wider hover:shadow-xl"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open Regular Modal
      </button>
      {showModal ? (
        <>
          <div
            className="grid place-items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 py-7 px-8 rounded shadow-xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between mb-8">
                  <h5 className="text-2xl font-normal mt-0 mb-0 ">
                    Modal Title
                  </h5>
                  <button
                    className="p-1 bg-transparent absolute top-2 right-2 text-black text-3xl leading-none outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="material-icons text-black text-2xl block">
                      close
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto">
                  <p className="text-base leading-relaxed text-gray-600 font-normal mt-0 mb-12">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end">
                  <button
                    className="bg-transparent text-red-500 font-medium text-sm tracking-wider py-2.5 px-6 rounded outline-none focus:outline-none mr-2 mb-1 hover:bg-red-50"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white font-medium py-2.5 px-6 text-sm tracking-wider rounded outline-none focus:outline-none mr-1 mb-1 bg-green-500 hover:bg-green-700"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default RegularModal;
