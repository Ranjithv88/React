// src/components/CardEditor.js
import React, { useState, useRef } from 'react';
import Dropzone from 'react-dropzone';
import { Rnd } from 'react-rnd';
import html2canvas from 'html2canvas';
import { SketchPicker } from 'react-color';

const CardEditor = () => {
  const [image, setImage] = useState(null);
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const canvasRef = useRef();

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const addElement = () => {
    setElements([...elements, { id: elements.length, x: 0, y: 0, width: 100, height: 100, color: '#ff0000' }]);
  };

  const changeColor = (color) => {
    if (selectedElement !== null) {
      const newElements = [...elements];
      newElements[selectedElement].color = color.hex;
      setElements(newElements);
    }
  };

  const downloadCanvasAsImage = () => {
    html2canvas(canvasRef.current).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'card-template.png';
      link.click();
    });
  };

  const downloadCanvasAsHtml = () => {
    const htmlContent = canvasRef.current.outerHTML;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'card-template.html';
    link.click();
  };
  
  return (
    <div className="card-editor">
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {image ? <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} /> : 'Drop an image or click to upload'}
          </div>
        )}
      </Dropzone>
      <button onClick={addElement}>Add Element</button>
      {selectedElement !== null && (
        <SketchPicker color={elements[selectedElement].color} onChangeComplete={changeColor} />
      )}
      <button onClick={downloadCanvasAsImage}>Download as Image</button>
      <button onClick={downloadCanvasAsHtml}>Download as HTML</button>
      <div
        className="canvas"
        ref={canvasRef}
        style={{ position: 'relative', width: '100%', height: '500px', border: '1px solid black' }}
      >
        {elements.map((el, index) => (
          <Rnd
            key={el.id}
            bounds="parent"
            size={{ width: el.width, height: el.height }}
            position={{ x: el.x, y: el.y }}
            onClick={() => setSelectedElement(index)}
            onDragStop={(e, d) => {
              const newElements = [...elements];
              newElements[el.id].x = d.x;
              newElements[el.id].y = d.y;
              setElements(newElements);
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              const newElements = [...elements];
              newElements[el.id].width = ref.style.width;
              newElements[el.id].height = ref.style.height;
              newElements[el.id].x = position.x;
              newElements[el.id].y = position.y;
              setElements(newElements);
            }}
          >
            <div style={{ backgroundColor: el.color, width: '100%', height: '100%', border: '1px solid red' }}>
              Element {el.id}
            </div>
          </Rnd>
        ))}
      </div>
    </div>
  );
};

export default CardEditor;
