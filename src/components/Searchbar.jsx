import { useState } from "react";

function Searchbar() {
  const [inputText, setInputText] = useState();

  return (
    <>
      <div className="hidden sm:flex sm:h-8  sm:p-2 border sm:w-54 lg:w-72  border-[#BDBDBD] rounded-md items-center justify-start">
        <img src="/search.svg" className="sm:h-4" />
        <input
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          type="text"
          placeholder="Search by name"
          className="outline-none w-full placeholder:text-sm placeholder:font-primary-font sm:ml-4"
        />
      </div>
    </>
  );
}
export default Searchbar;
