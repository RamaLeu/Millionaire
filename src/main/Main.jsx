import React, { useState } from 'react';
import data from '../data/Data'
import './main.css'
import Game from '../game/Game'
import dyingAnim from '../resources/images/dyingAnim.gif'
import dyingSound from '../resources/sound/dyingSound.mp3'
import video from '../resources/video/video.mp4'
import titleSound from '../resources/sound/intro.mp3'




function Main(){
  let [start, setStart] = useState(true);
  let [gameState, setOver] =useState(false);
  let [gameVictory, setWin] =useState(false);
  

  const startGame = () => {
    setStart(false);
  }
  const gameOver = () => {
    setOver(true);
  }

  const setHalfVolume = () => {
    setTimeout(() => {      let myAudio = document.getElementById("audio");  
    myAudio.volume=0.2 ; }, 1);
  }

  const winGame = () => {
    setWin(true);
  }




  return(
    <div className="mainThing">
    {start === true &&
        <div className="startText">
        <p><h2>WHO WANTS TO BE A WEB DEVELOPER</h2></p>
        <audio className="audio" autoPlay="autoplay">
        <source src= {titleSound} type="audio/mpeg"/>
        </audio>
        <button onClick={() => startGame()} classname="startButton">Start</button>
        </div>}
    <div id="area">
      {start === false && gameState === false && gameVictory===false && <Game target={gameOver} victory={winGame}/>}
      {gameState ===true && <div>
      <img src = {dyingAnim}/>
      <audio id="audio" autoPlay="autoplay" onLoadedData={setHalfVolume()}>
      <source src= {dyingSound} type="audio/mpeg"/>
      </audio>
        <p><h1>GAME OVER</h1></p>
        </div>}
      {gameVictory===true && <div>
        <video width="600" height="500" autoplay="autoplay">
        <source src={video} type="video/mp4"/></video>
        <div className="victoryText">
        <p><h1>YOU WIN</h1></p>
        </div>
        </div>}
    </div>
    </div>
  )
}

export default Main;