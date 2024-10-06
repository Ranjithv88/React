import Card from "./components/card/Card";
import Loading from "./components/loading/Loading";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Store from "./components/store/Store";
import About from "./components/about/About";
import React, { lazy, Suspense, useEffect } from "react";
import { Client } from "@stomp/stompjs";
// import { StompJsSockJsClient } from '@stomp/stompjs';
import ReconnectingWebSocket from "reconnecting-websocket";
import Slider from "./components/slider/Slider";
import ScrollTracker from "./components/scroll/ScrollTracker";
import AnimatedList from "./components/listanimetion/AnimatedList";
import Header from "./components/header/Header";
import DivSlider from "./components/slider/DivSlider";
import Home from "./components/home/Home";
import ImageCrop from "./components/imageCrop/ImageCrop";
import CardEditor from "./components/cardEditor/CardEditor";

// const Home = lazy(() =>
//   wait(10000).then(() => import("./components/home/Home"))
// );


const LazyComponent = React.lazy(() => import("./components/loading/Loading"));
function App() {
  
  return (
    <>
      {/* <ScrollTracker /> */}
     {/* <DivSlider /> */}
      {/* <Card/> */}
      {/* <Loading /> */}
      {/* <Header /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
      {/* <Home /> */}
      {/* <ImageCrop /> */}
      {/* <CardEditor/> */}
    </>
  );
}

export default App;
