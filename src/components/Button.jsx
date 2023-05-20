function Button({ children }) {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <>
      <button
        onClick={handleClick}
        className="ml-auto px-6 py-2 rounded-md bg-accent text-sm hover:opacity-80 font-primary-font font-medium text-white"
      >
        {children}
      </button>
    </>
  );
}
export default Button;
