import Button from "./Button";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <>
      <nav className="w-full  flex items-center justify-start">
        <div className="flex w-1/2">
          <img src="/my_unsplash_logo.svg" />
          <Searchbar />
        </div>
        <Button>Add photo</Button>
      </nav>
    </>
  );
}
export default Navbar;
