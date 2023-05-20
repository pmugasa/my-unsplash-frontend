import { useState } from "react";

function ModalDelete({ closeModal }) {
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("image deleted");
    closeModal(false);
  }
  return (
    <>
      <div className="w-full h-full overflow-auto top-0 right-0 absolute z-10 bg-[rgba(0,0,0,0.5)] flex items-center justify-center ">
        <div className="w-[20rem] sm:w-[38rem] h-60 px-4 rounded-md bg-white opacity-none -right-1/2 shadow drop-shadow-xl">
          <form onSubmit={handleSubmit} className="opacity-100">
            <h3 className="font-primary-font font-medium text-xl  text-[#4F4F4F] mt-6">
              Are you sure?
            </h3>

            <div className="mt-4">
              <label
                htmlFor="password"
                className="block  font-primary-font font-medium text-[#4F4F4F] text-[14px]"
              >
                Password
              </label>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="label"
                placeholder="*******************"
                className="border mt-2 border-[#4F4F4F] h-8 w-full text-xs outline-none focus:ring-accent focus:ring focus:border-none placeholder:text-xs placeholder:px-2 rounded-md"
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
                className="px-4 py-2 text-white text-sm font-primary-font font-bold bg-red-500 hover:bg-red-400  rounded-lg "
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalDelete;
