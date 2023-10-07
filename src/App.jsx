
import {Routes,Route} from "react-router-dom"
import Games from "./components/Games"
export default function App(){
  return(
    <>
    <Routes>
    <Route path="/games" element= {<Games/>} />

    </Routes>
      <h1>this is the file</h1>
    
    </>
  
  )
}