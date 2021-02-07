import React, { Component } from "react";

import Card from "./Card";

class Landing extends Component {
  render() {
    return (
      <div className="ui three stackable cards">
        <Card
          image="maths.jpeg"
          subject="Mathematics"
          color="red"
          description="The only way to learn mathematics is to do mathematics."
        />
        <Card
          image="chem.jpg"
          subject="Chemistry"
          color="red"
          description="Think like a proton, and stay positive"
        />
        <Card
          image="phyc.jpeg"
          subject="Physics"
          color="red"
          description="Physics is simple but subtle."
        />
        <Card
          image="bio.jpeg"
          subject="Biology"
          color="red"
          description="Biologists are just a bunch of cells talking about other cells."
        />
        <Card
          image="eng.png"
          subject="English"
          color="red"
          description="The English language is a work in progress, have fun with it."
        />
        <Card
          image="kisw.jpeg"
          subject="Kiswahili"
          color="red"
          description="Mtaka cha mvunguni sharti ainame."
        />
        <Card
          image="hist.jpeg"
          subject="History"
          color="red"
          description="Thers's an old saying about those who forget history, I don't remember it, but it's good."
        />
        <Card
          image="geo.jpeg"
          subject="Geography"
          color="red"
          description="In our changing world nothing changes more than geography."
        />
      </div>
    );
  }
}

export default Landing;
