import { useState, useEffect } from "react";
import axios from "axios";

function Modal({ closeModal, setImages, images }) {
  const [label, setLabel] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [error, setError] = useState("");
  const baseUrl = "http://localhost:3001/images";

  //handling errors
  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError("");
      }, 4000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [error]);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      label: label,
      photoUrl: photoUrl,
    };
    axios
      .post(baseUrl, formData)
      .then((res) => {
        setImages([...images, res.data]);
        setLabel("");
        setPhotoUrl("");
        closeModal(false);
      })
      .catch((err) => setError(err.message));
  }
  return (
    <>
      <div className="w-full h-full overflow-auto top-0 right-0 absolute z-10 bg-[rgba(0,0,0,0.5)] flex items-center justify-center ">
        <div className="w-[20rem] sm:w-[38rem] h-80 px-4 rounded-md bg-white opacity-none -right-1/2 shadow drop-shadow-xl">
          <form onSubmit={handleSubmit} className="opacity-100">
            <h3 className="font-primary-font font-medium text-xl  text-[#4F4F4F] mt-6 ">
              Add a new photo
            </h3>
            {error && (
              <p className="text-[12px]  text-red-500 font-sans text-center font-medium ">
                {error}
              </p>
            )}
            <div className="mt-4">
              <label
                htmlFor="label"
                className="block  font-primary-font font-medium text-[#4F4F4F] text-[14px]"
              >
                Label
              </label>

              <input
                required
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                type="text"
                id="label"
                placeholder="Suspendisse elit massa"
                className="border mt-2 border-[#4F4F4F] h-8 w-full outline-none focus:ring-accent focus:ring focus:border-none placeholder:text-xs text-xs placeholder:px-2 rounded-md"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="photo-url"
                className="block  font-primary-font font-medium text-[#4F4F4F] text-[14px]"
              >
                Add photo URL
              </label>
              <input
                required
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                type="text"
                id="photo-url"
                placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib="
                className="border mt-2 border-[#4F4F4F] h-8 w-full text-xs outline-none focus:ring-accent focus:ring focus:border-none placeholder:text-xs placeholder:px-2  truncate rounded-md"
              />
            </div>
            <div className="mt-8 flex items-center justify-end space-x-4">
              <button
                type="button"
                onClick={() => closeModal(false)}
                className="text-[#BDBDBD] font-primary-font font-bold text-sm hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white text-sm font-primary-font font-bold bg-accent hover:bg-green-400 rounded-lg "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Modal;
