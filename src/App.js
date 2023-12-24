import React,{useState} from "react";
import ImageSerach from "./components/ImageSearch";
import ImageList from "./components/ImageList";
import "./index.css";
const App=()=>{
  const [images,setImages]=useState([])

  return (
    <div className="container-div">
          <ImageSerach  setImages={setImages} images={images}/> 
          <ImageList images={images}/>
    </div>
  );
}

export default App;