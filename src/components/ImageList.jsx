function ImageList({ image, deleteImage }) {
  return (
    <>
      <div className="mb-4 h-auto max-w-full" key={image.id}>
        <div className="h-auto  rounded-lg  bg-cover  flex group  relative">
          <img
            className="h-auto w-full rounded-lg object-cover "
            src={image.photoUrl}
          />

          <div className="hidden group-hover:block  absolute z-1 bg-[rgba(0,0,0,0.4)] h-full w-full p-4 flex-col space-y-4">
            <button
              onClick={() => deleteImage(image.id)}
              className=" border border-red-500 text-sm px-4 rounded-lg  font-medium text-red-500  hover:border-2"
            >
              delete
            </button>
            <p className="white-space-pre-line w-full h-full truncate  font-primary-font text-white font-bold text-md">
              {image.label}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageList;
