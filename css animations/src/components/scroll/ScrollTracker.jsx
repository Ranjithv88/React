import React, { useEffect, useState } from "react";
import "./scroll.scss";

function ScrollTracker() {
  return (
    <div className="scroll">
      <div className="logo">
        <h2>LOGO</h2>
      </div>
      <p id="p1">Home</p>
      <p id="p2">Dining</p>
      <p id="p3">Gallery</p>
      <p id="p4">About</p>
      <p id="p5">Service</p>
      <p id="p6">Booking</p>
      <p id="p7">accommodation</p>
      <p id="p8">Profile</p>
    </div>
  );
}

export default ScrollTracker;
