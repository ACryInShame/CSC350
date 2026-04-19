// Louis J D'Agusto
// April 18th 2026
// Week 5 Assignment - Photo shoot Game

import './App.css'
import { useState, useEffect } from 'react'
import Image from "../src/components/Image"

//images for animals
import deer from "./assets/deer.png";
import rabbit from "./assets/rabbit.png";
import horse from "./assets/horse.png";

//Sound effect when animal is clicked
import cameraSound from "./assets/camera.wav";


export default function App()
{
  //vars
  const Animals = [deer, horse, rabbit]; //Array of all the animals
  const Sound = new Audio(cameraSound); //sound effect when animal is clicked


  //All used states
  const [Score, setScore] = useState(0);                            //User Score
  const [Position, setPosition] = useState ({top:"60%", left:"0%"});//Animal Position
  const [Round, setRound] = useState(0);                            //Current Round in game
  const [CurrentAnimal, setCurrentAnimal] = useState(Animals[0]);   //Current animal in round


  //Move Animal
  useEffect(() =>
  {
    const Interval = setInterval(() =>
    {
      setPosition((prev) =>
      {
        let Speed = 1; // sets how far the animals moves each interval
        let NewLeft = parseFloat(prev.left) + Speed;
        let NewTop = prev.top;

        if (NewLeft > 100)
        {
          setRound(prev => prev +1 ); //update round count
          setCurrentAnimal(GetRandomAnimal()); //update to new animal
          NewLeft = -20; // reset to left side, just off screen
          NewTop = Math.floor(Math.random()*60) + 20 + "%"; // set new virtical position

          console.log("ROUND TRIGGER");
        }

        return {
          top: NewTop,
          left: NewLeft + "%"
        };
      });

    }, 30); // lower = faster as this sets the timer interval

    return () => clearInterval(Interval);
  }, []);

  //called when animal is clicked
  const HandleClick = ()=>
  {
    setScore (prev => prev +1);
    Sound.currentTime=0; //restart sound if user is fast clicking
    Sound.play();
  };

  //called at the end of each round after animal moves off screen.
  //returns a random animal from the Animal array which is then updated in the DOM in the return below
  const GetRandomAnimal = () =>
  {
    const index = Math.floor(Math.random() * Animals.length);
    return Animals[index];
  };

  return (
    <div className='container'>
      <h1>Round: {Round}</h1>
      <h1>Score: {Score}</h1>

      <span className='Animal' style={{top:Position.top ,left:Position.left}} onClick={HandleClick}>
          <Image src={CurrentAnimal} alt={"Animal Walking"} size={150} /> {/*animal sized to 150*150 to keep it simple*/}
      </span>
    </div>
  )
}