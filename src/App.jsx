import { useState } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

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
  const [searchedImages, setSearchedImages] = useState(images);
  //delete image
  function deleteImage(url) {
    const updatedImages = searchedImages.filter(
      (image) => image.photoUrl !== url
    );
    setSearchedImages(updatedImages);
  }

  //search image
  function search(query) {
    const updatedImages = images.filter((image) => {
      return image.label.toLowerCase().includes(query.toLowerCase());
    });
    setSearchedImages(updatedImages);
  }

  return (
    <>
      {showModal && (
        <Modal
          closeModal={setShowModal}
          setSearchedImages={setSearchedImages}
          searchedImages={searchedImages}
        />
      )}

      <div className="max-w-screen h-full m-6 lg:m-8  relative ">
        {/* modal overlay*/}

        <Navbar
          showModal={showModal}
          setShowModal={setShowModal}
          search={search}
        />

        <div className="w-full mt-12 ">
          <div className="columns-2 sm:columns-3 gap-4">
            {searchedImages.map((image) => {
              return (
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
                      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] top-0 left-0 rounded-md"></div>
                      <button
                        onClick={() => deleteImage(image.photoUrl)}
                        className=" absolute top-3 right-3 border border-red-500 text-sm px-4 rounded-lg font-medium text-red-500 hover:bg-red-500 hover:text-white font-secondary-font"
                      >
                        delete
                      </button>
                      <h3 className="absolute white-space-pre-line w-96  bottom-2 left-3 font-primary-font text-white font-medium text-sm">
                        {image.label}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
