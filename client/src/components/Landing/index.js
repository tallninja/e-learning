import React, { Component } from "react";

import Card from "../Card/Card";

class Landing extends Component {
  render() {
    return (
      <div className="ui four stackable cards">
        <Card
          image="maths.jpeg"
          subject="Mathematics"
          color="red"
          description="The only way to learn mathematics is to do mathematics."
        />
        <Card
          image="chem.jpg"
          subject="Chemistry"
          color="yellow"
          description="Think like a proton, and stay positive"
        />
        <Card
          image="phyc.jpeg"
          subject="Physics"
          color="blue"
          description="Physics is simple but subtle."
        />
        <Card
          image="bio.jpeg"
          subject="Biology"
          color="green"
          description="Biologists are just a bunch of cells talking about other cells."
        />
        <Card
          image="eng.png"
          subject="English"
          color="purple"
          description="The English language is a work in progress, have fun with it."
        />
        <Card
          image="kisw.jpeg"
          subject="Kiswahili"
          color="orange"
          description="Mtaka cha mvunguni sharti ainame."
        />
        <Card
          image="hist.jpeg"
          subject="History"
          color="brown"
          description="Thers's an old saying about those who forget history, I don't remember it, but it's good."
        />
        <Card
          image="geo.jpeg"
          subject="Geography"
          color="black"
          description="In our changing world nothing changes more than geography."
        />
        <Card
          image="cre.jpeg"
          subject="CRE"
          color="teal"
          description="I want to be so full of christ that when a mosquito bites me it flies away singing 'There is power in the Blood !'."
        />
        <Card
          image="ire.jpeg"
          subject="IRE"
          color="olive"
          description="Wash your heart Everyday with Salah and warm it up with Zikr"
        />
        <Card
          image="buss.jpeg"
          subject="Business"
          color="pink"
          description="An accountant is someone who knows the cost of everything and the value of nothing."
        />
        <Card
          image="computer.jpeg"
          subject="Computer Studies"
          color="olive"
          description="The computer was born to solve problems that did not exist before"
        />
      </div>
    );
  }
}

export default Landing;
