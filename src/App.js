import React from "react";
import "./App.css";
import TimeLine from "./Components/timeline/TimeLine";
import Nav from "./Components/Nav";
import GalleryLightBox from "./Components/gallery/GalleryLightBoxDev";
import Navbar from "./Components/navbar/Navbar";

function App() {

  return (
      <div>
          <Navbar />
          {/*<Nav />*/}
          <TimeLine />
          {/*<GalleryLightBox/>*/}
      </div>
  );
}

export default App;
