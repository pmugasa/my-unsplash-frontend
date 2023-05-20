import Button from "./Button";
import Searchbar from "./Searchbar";

function Navbar({ showModal, setShowModal, search }) {
  return (
    <>
      <nav className="w-full  flex items-center justify-start">
        <div className="flex w-1/2">
          <img src="/my_unsplash_logo.svg" />
          <div className="hidden sm:block">
            <Searchbar search={search} />
          </div>
        </div>
        <Button showModal={showModal} setShowModal={setShowModal}>
          Add photo
        </Button>
      </nav>
    </>
  );
}
export default Navbar;
