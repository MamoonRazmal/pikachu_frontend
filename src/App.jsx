
import {Routes,Route} from "react-router-dom"
import Game from "./components/Game"
export default function App(){
  return(
    <>
    <Routes>
    <Route path="/game" element= {<Game/>} />

    </Routes>
      <h1>this is the file</h1>
    
    </>
  
  )
}