import { useState } from "react";
import Navbar from "./components/Navbar";
function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  function handleHover() {
    setShowOverlay(!showOverlay);
  }

  return (
    <>
      <div className="max-w-screen max-h-screen m-6 lg:m-8">
        <Navbar />
        <div className="w-full mt-12 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="grid gap-4">
              <div
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                className="h-auto max-w-full rounded-lg bg-[url('/adrien-stachowiak-sUBlt91FXTw-unsplash.jpg')] bg-cover   relative flex"
              >
                <img
                  className="h-auto max-w-full rounded-lg invisible"
                  src="/Awesome Get off My Computer Wallpapers - WallpaperAccess.png"
                />

                {showOverlay ? (
                  <>
                    <div className="absolute w-full h-full bg-gray-900 opacity-60 top-0 left-0"></div>
                    <button className=" absolute top-3 right-3 border border-red-500 text-sm px-4 rounded-lg text-red-500 font-secondary-font">
                      delete
                    </button>
                    <h3 className="absolute bottom-2 left-3 font-primary-font text-white font-bold text-lg">
                      Adrien Stachwoiak image title or something
                    </h3>
                  </>
                ) : null}
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/Awesome Get off My Computer Wallpapers - WallpaperAccess.png"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/Escape [1680x1050].jpeg"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/Ghost Rider[1920x1080].jpeg"
                />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="/man.jpg" />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/plants.jpg"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/Sunset 1080P, 2K, 4K, 5K HD wallpapers free download.jpeg"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/Wallpaper 4K Para Pc Windows 10 Ideas.jpeg"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/wallpapersden.com_76045-3840x2160.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
