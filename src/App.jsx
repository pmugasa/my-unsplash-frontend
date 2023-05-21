import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import axios from "axios";
import ImageList from "./components/ImageList";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);

  //fetch data from the backend
  useEffect(() => {
    const baseUrl = "/images";
    function getData() {
      axios
        .get(baseUrl)
        .then((res) => {
          setImages(res.data);
        })
        .catch((err) => console.error(err));
    }

    getData();
  }, []);

  //search image
  function search(query) {
    const updatedImages = images.filter((image) => {
      return image.label.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredImages(updatedImages);
  }
  //delete image
  function deleteImage(id) {
    const baseUrl = "/images/" + id;
    axios
      .delete(baseUrl)
      .then((res) => {
        alert(res.data.message);
        const updatedImages = images.filter((image) => image.id !== id);
        setImages(updatedImages);
      })
      .catch((err) => alert(err));
  }

  return (
    <>
      {showModal && (
        <Modal
          closeModal={setShowModal}
          images={images}
          setImages={setImages}
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
            {filteredImages.length > 0
              ? filteredImages.map((image) => {
                  return (
                    <ImageList
                      image={image}
                      key={image.id}
                      deleteImage={deleteImage}
                    />
                  );
                })
              : images.map((image) => {
                  return (
                    <ImageList
                      image={image}
                      key={image.id}
                      deleteImage={deleteImage}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
