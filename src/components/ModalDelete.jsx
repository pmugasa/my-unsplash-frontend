function ModalDelete({ closeModal }) {
  return (
    <>
      <div className="w-full h-full overflow-auto top-0 right-0 absolute z-10 bg-[rgba(0,0,0,0.5)] flex items-center justify-center ">
        <div className="w-[20rem] sm:w-[38rem] h-60 px-4 rounded-md bg-white opacity-none -right-1/2 shadow drop-shadow-xl">
          <div className="opacity-100">
            <h3 className="font-primary-font font-medium text-xl  text-[#4F4F4F] mt-6">
              Are you sure?
            </h3>

            <div className="mt-8 flex items-center justify-end space-x-4">
              <button
                type="button"
                onClick={() => closeModal(false)}
                className="text-[#BDBDBD] font-primary-font font-bold text-sm hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => delete image.id}
                className="px-4 py-2 text-white text-sm font-primary-font font-bold bg-red-500 hover:bg-red-400  rounded-lg "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDelete;
