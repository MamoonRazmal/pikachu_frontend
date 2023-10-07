import React, { useEffect, useState, useRef } from "react";
import "./styles.css";
import photo from "./images.jpeg";
import smoke from "./smoke.jpeg";
import Gameover from "./Gameover";

export default function Games() {
  const p1ref = useRef();
  const p2ref = useRef();
  const fire = useRef();
  const main = useRef();
  let mo = 30;
  let timer;
  let mo2 = 5; // Speed for p2 movement

  const url = "http://localhost:3000/api/pokimon/4/info";
  const url2 = "http://localhost:3000/api/pokimon/5/info";
  const [p1, setP1] = useState([]);
  const [p2, setp2] = useState([]);
  const [livep2, setLivep2] = useState(1000); // Initialize p2's health
  const [gameOver, setGameOver] = useState(false); // Game Over flag

  // Fetching p1 and p2 data
  const fetchinfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setP1(d));
  };

  const fetchinfo2 = () => {
    return fetch(url2)
      .then((res) => res.json())
      .then((d) => setp2(d));
  };

  useEffect(() => {
    fetchinfo2();
    fetchinfo();
    gamestart();
    setLivep2(p1.Defense)
    // Start the interval for p2 movement
    const id = setInterval(() => {
      moveP2();
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(id);
    };
  }, []);

  // Function to move p2
  const moveP2 = () => {
    if (!gameOver) {
      p2ref.current.style.left = `${parseInt(p2ref.current.style.left) - mo2}px`;
  
    //   if (
    //     parseInt(p1ref.current.style.left) < parseInt(p2ref.current.style.left) + 5 &&
    //     parseInt(p1ref.current.style.left) > parseInt(p2ref.current.style.left) - 5 &&
    //     parseInt(p1ref.current.style.top) < parseInt(p2ref.current.style.top) + 5 &&
    //     parseInt(p1ref.current.style.top) > parseInt(p2ref.current.style.top) - 5
    //   ) {

     // )
     // )
     if(parseInt(p1ref.current.style.left)>parseInt(p2ref.current.style.left)-5 &parseInt(p1ref.current.style.left)<parseInt(p2ref.current.style.left)+5|parseInt(p1ref.current.style.left)===parseInt(p2ref.current.style.left+2)&(parseInt(p1ref.current.style.top)>parseInt(p2ref.current.style.top)-5&parseInt(p1ref.current.style.top)<parseInt(p2ref.current.style.top)+5|parseInt(p1ref.current.style.top)===parseInt(p2ref.current.style.top))){
       


        // Collision occurred, p1 wins
        setGameOver(true);
        clearInterval(timer); // Stop the interval for p2's movement
        p2ref.current.style.backgroundImage = `url(${smoke})`;
        main.current.tabIndex = -1;
        console.log("Game Over! p1 wins!");
      }
    }
  };
  // Event handler for p1 movement
  const movie = (e) => {
    console.log('Key pressed:', e.key)
    if (!gameOver) {
      if (e.key === 'd') {
        p1ref.current.style.left = `${parseInt(p1ref.current.style.left) + mo}px`;
      } else if (e.key === "a") {
        p1ref.current.style.left = `${parseInt(p1ref.current.style.left) - mo}px`;
      } else if (e.key === "s") {
        p1ref.current.style.top = `${parseInt(p1ref.current.style.top) + mo}px`;
      } else if (e.key === "w") {
        p1ref.current.style.top = `${parseInt(p1ref.current.style.top) - mo}px`;
      }
    }
  };

  return (
    <>
      {gameOver && <Gameover />} {/* Render a Game Over component when the game is over */}
      <div className="bg-up" ref={main} onKeyDown={(e) =>movie(e)} tabIndex="0">
        <label>
          P1:<progress value={livep2} max="150">70 %</progress>
        </label>
        <label>
          P2:<progress value={livep2} max="150">70 %</progress>
        </label>
        <div className="circle" ref={p1ref} style={{ position: "absolute", left: "200px", top: "00px" }}>
          <div className="bullet" ref={fire} style={{ position: "relative", left: "40px", top: "0px" }}></div>
        </div>

        <div className="square" ref={p2ref} style={{ left: '400px', top: '200px' }}></div>

        <h4>HP {p1.HP}</h4>
        <h4>Attack {p1.Attack}</h4>
        <h4>Defence {p1.Defense}</h4>
        <h4>Speed {p1.Speed}</h4>

        <h4>HP {p2.HP}</h4>
        <h4>Attack {p2.Attack}</h4>
        <h4>Defence {p2.Defense}</h4>
        <h4>Speed {p2.Speed}</h4>
      </div>
    </>
  );

  function gamestart() {
    p2ref.current.style.left = '400px';
    p2ref.current.style.top = '200px';
  }
}