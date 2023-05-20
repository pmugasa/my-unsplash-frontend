import { useState } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import ModalDelete from "./components/ModalDelete";
function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const images = [
    {
      label: "a truck parked in a field with mountains in the background",
      photoUrl: "https://source.unsplash.com/2ICHBMyhbCs",
    },
    {
      label: "Thinking in the sky",
      photoUrl: "https://source.unsplash.com/tZH8xyGGMHE",
    },
    {
      label:
        "The silhouette of a man walks past a store front that reads, 'Hot Corned Beef'",
      photoUrl: "https://source.unsplash.com/oYyO-NS7oxc",
    },
    {
      label: "The programmer doing his thing",
      photoUrl: "https://source.unsplash.com/IGvHWIZxQ8Q",
    },
    {
      label: "Skateboarding in the rainy day",
      photoUrl: "https://source.unsplash.com/54IuUIToijY",
    },
  ];
  function handleHover() {
    setShowOverlay(!showOverlay);
  }

  return (
    <>
      {showModal && <Modal closeModal={setShowModal} />}
      {deleteModal && <ModalDelete closeModal={setDeleteModal} />}
      <div className="max-w-screen h-full m-6 lg:m-8  relative ">
        {/* modal overlay*/}

        <Navbar showModal={showModal} setShowModal={setShowModal} />

        <div className="w-full mt-12 ">
          <div className="columns-2 sm:columns-3 gap-4">
            {images.map((image) => {
              return (
                <>
                  <div className="mb-4" key={image.photoUrl}>
                    <div
                      className={
                        `bg-[url('${image.photoUrl}')] ` +
                        "h-auto max-w-full rounded-lg  bg-cover relative flex group"
                      }
                    >
                      <img
                        className="h-auto max-w-full rounded-lg "
                        src={image.photoUrl}
                      />

                      <div className="hidden group-hover:block">
                        <div className="absolute w-full h-full bg-gray-900 opacity-60 top-0 left-0"></div>
                        <button
                          onClick={() => setDeleteModal(true)}
                          className=" absolute top-3 right-3 border border-red-500 text-sm px-4 rounded-lg font-medium text-red-500 hover:bg-red-500 hover:text-white font-secondary-font"
                        >
                          delete
                        </button>
                        <h3 className="absolute bottom-2 left-3 font-primary-font text-white font-medium text-sm">
                          {image.label}
                        </h3>
                      </div>
                    </div>
                  </div>
                  ;
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
