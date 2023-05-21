function ImageList({ image, deleteImage }) {
  return (
    <>
      <div className="mb-4" key={image.id}>
        <div
          className={
            `bg-[url('${image.photoUrl}')] ` +
            "h-auto max-w-full rounded-lg  bg-cover relative flex group"
          }
        >
          <img className="h-auto max-w-full rounded-lg " src={image.photoUrl} />

          <div className="hidden group-hover:block">
            <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] top-0 left-0 rounded-md"></div>
            <button
              onClick={() => deleteImage(image.id)}
              className=" absolute top-3 right-3 border border-red-500 text-sm px-4 rounded-lg font-medium text-red-500 hover:bg-red-500 hover:text-white font-secondary-font"
            >
              delete
            </button>
            <p className="absolute white-space-pre-line w-96  bottom-2 left-3 font-primary-font text-white font-medium text-sm">
              {image.label}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageList;
