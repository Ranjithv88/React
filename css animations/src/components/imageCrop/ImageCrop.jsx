import React, { useState, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

function ImageCrop() {
  const [selectedImage, setSelectedImage] = useState("");
  const canvas = document.getElementById('my-canvas');

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setSelectedImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(()=>{
    
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("scream");
   ctx.drawImage(img, 10,10);
  },[selectedImage])
  const handleCrop=() => {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'canvas-image.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
      <input type="file" onChange={handleImageSelect} />
      <div className="crop">
        <img src={selectedImage} style={{ maxWidth: "100%", }}id="scream" />
        <canvas
          id="my-canvas"
          width="600"
          height="500"
          style={{border:"4px solid red"}}
        ></canvas>
      </div>
      <button id="download-button" onClick={handleCrop}>Download Image</button>
    </div>
  );
}

export default ImageCrop;
