import { useEffect,useState,useRef } from "react"
import "./styles.css";
import photo from './images.jpeg'
import smoke from './smoke.jpeg';
import Gameover from "./Gameover";
export default function Game(){
    const p1ref=useRef()
    const p2ref=useRef()
    const fire=useRef()
    const main=useRef();
   // let ref2;
   let mo=0;
   let timer;
  // const[]
  // const url="http://localhost:3000/api/pokimonall"
    const url="http://localhost:3000/api/pokimon/4/info"
    const url2="http://localhost:3000/api/pokimon/5/info"
    const[p1,setP1]=useState([])
    const[p2,setp2]=useState([])
    const [intervalId, setIntervalId] = useState(null);
    const[livep2,setlivep2]=useState([])
    //const[interveld,setinterveld]=useState([])
    //setinterveld=true;
    const[bote_dance,setBote_dance]=useState(1)
    const[time,setTime]=useState()
    const[ref2,setref2]=useState()
    const[x,setx]=useState([])
    let blood;
    let c=1;
    const fetchinfo=()=>{
        return fetch(url).then((res)=>res.json()).then((d)=>setP1(d))

    }
    const fetchinfo2=()=>{
        return fetch(url2).then((res)=>res.json()).then((d)=>setp2(d))

    }
    
    useEffect(()=>{
       // const image = new Image();
       // changeImageSrc()
       // boot()
        setx(p2ref.current.style.left)
        fetchinfo2()
        fetchinfo();
        gamestart()
        setBote_dance(1)
        const id = setInterval(() => {
            blood=p2.Defense 
            let ran=Math.floor(Math.random()*100)
            let ran1=Math.floor(Math.random()*100)
            if(parseInt(p1ref.current.style.left)>parseInt(p2ref.current.style.left)-5 &parseInt(p1ref.current.style.left)<parseInt(p2ref.current.style.left)+5|parseInt(p1ref.current.style.left)===parseInt(p2ref.current.style.left+2)&(parseInt(p1ref.current.style.top)>parseInt(p2ref.current.style.top)-5&parseInt(p1ref.current.style.top)<parseInt(p2ref.current.style.top)+5|parseInt(p1ref.current.style.top)===parseInt(p2ref.current.style.top))){
                setlivep2(blood)
                blood=blood+p2.Defense 
                stopInterval()
                setBote_dance(0);
              //  console.log("not hit but noooot interveld",bote_dance);
                if(blood>100){
                    stopInterval()
                    stopInterval
                  //  clearInterval(p);
               p2ref.current.style.backgroundImage=`url(${smoke})`
              
               console.log("now kaboom and value of      boot+dance",bote_dance);
             //  main.current.tabIndex=-1
                    
              // setinterveld=false;
             // return   clearInterval(p);
               //setBote_dance(0);
              //clearInterval(bote_dance);
               console.log("after the crash",bote_dance);
            }
    
            }
            else{
                console.log("value of p2ref is",parseInt(p2ref.current.style.top))
                console.log("value of p2ref is",parseInt(p1ref.current.style.top))
               // console.log("not kaboom and random number is ",ran)
            }
            
            if( (parseInt(p2ref.current.style.left)&(parseInt(p2ref.current.style.top)))>500){
           //    console.log("now is not biiger")
                p2ref.current.style.left='400px';
                p2ref.current.style.top='200px';
                setref2(parseInt(p2ref.current.style.left));
            }
            else if( (parseInt(p2ref.current.style.left))>300){
             //   console.log("now is not super biiger")
                p2ref.current.style.left=parseInt(p2ref.current.style.left)-ran1-p2.Speed+'px'
                 p2ref.current.style.top='200px';
                 setref2(parseInt(p2ref.current.style.left));
             }
    
    
    
                else  {
                    p2ref.current.style.top=parseInt(p2ref.current.style.top)+ran+'px'
                    p2ref.current.style.left=parseInt(p2ref.current.style.left)+ran1+p2.Speed+'px'
                 //   p2ref.current.style.left=parseInt(p2ref.current.style.left)-ran1-p2.Speed+'px'
                
                }
        
                if (bote_dance===0) {
                  //  clearInterval(p);
                   console.log("this messge is broadcast from if",bote_dance)
                }
        
            console.log('Interval is running...');
          }, 1000);
          setIntervalId(id);
        //   return () => {
        //     clearInterval(id);
         // };
      //  boot();
       // inputref.current.style.left="90px";
      //  inputref.current.style.position='absolute';
    },[])
    const stopInterval = () => {
        // Clear the interval using the stored interval ID
        clearInterval(intervalId);
        setIntervalId(null); // Reset the interval ID in state
      };
    const changeImageSrc = () => {
        setImageSrc('images.jpeg');
      }
    console.log(p1ref)
    //console.log(typeof(data));
   // const interveld;
    
   let p
   // bote_dance=true;
        console.log ("value of boot",bote_dance)
        p = setInterval(boot,4000);
   
    // else{
       
    //  clearInterval(p);
    //  p=null
    //      console.log("this messge is broadcast from else and valsue of bote_dance ",bote_dance)

    //  }  





    return(
        <>
      <div className="bg-up" ref={main} onKeyDown={(e) =>movie(e)} tabIndex="0" >
        <label>
      P1:<progress value={livep2} max="150">70 %</progress>
      </label>
      <label >
      P2:<progress value={livep2} max="150">70 %</progress>
      </label>
        <div className="circle" ref={p1ref}style={{position:'absolute',left:'200px',top:"00px"}}>
      
        <div className="bullet" ref={fire} style={{ position:'relative',left:'40px',top:"0px"}}></div>
       
        </div>
        
        <div className="square" ref={p2ref}style={{left:'400px',top:"200px"}}>
        </div>
      
        {/* <img  src={'images.png'} alt="Example" style={{position:"relative",top:"1000px"}} /> */}
      
     <h4>HP {p1.HP}</h4>
     <h4>Attack {p1.Attack}</h4>
     <h4>Defence {p1.Defense}</h4>
      {/* <h4>SuperAttack {data.Sp. Attack}</h4>
     <h4>SuperDefence {data.Sp. Defence}</h4>  */}
     <h4>Speed {p1.Speed}</h4> 


     <h4>HP {p2.HP}</h4>
     <h4>Attack {p2.Attack}</h4>
     <h4>Defence {p2.Defense}</h4>
      {/* <h4>SuperAttack {data.Sp. Attack}</h4>
     <h4>SuperDefence {data.Sp. Defence}</h4>  */}
     <h4>Speed {p2.Speed}</h4> 
     <h4>value r2 is {ref2}</h4>
    
     </div>
   
       </>)
        // function boot(){
        //    // p2ref.current.style.left=parseInt(p2ref.current.style.left)+mo+p2.Speed+'px';
        
        //     console.log(p2ref.current) 
        
        //   }
    

       
    function movie(e){
       let c=0;
     
       





      //  function boot(){as};
     //  let setinterveld=true;
        


     //   console.log('this key is pressed',e)
        if(e.key==='d'){
           // setimgs("./images.jpeg")
            
       //     console.log("this is the value of image i think",imgs)
                     p1ref.current.style.left=parseInt(p1ref.current.style.left)+mo+p2.Speed+'px';
            
         //   fire.current.src={photo}
            
           // console.log('this is fire ref',fire.current) 
          //  inputref.current.style.left=80;
          //  setx({x}+1)
        //  mo=+1
          // image.src="./Images.jepg"
         
       
        }
        else if(e.key==='a'){
          //  inputref.current.style.left="500px";
          p1ref.current.style.left=parseInt(p1ref.current.style.left)-mo-p2.Speed+'px';
    
        }
        else if(e.key==='s'){
            //  inputref.current.style.left="500px";
            p1ref.current.style.top=parseInt(p1ref.current.style.top)+mo+p2.Speed+'px';
      
          }
          else if(e.key==='w'){
            //  inputref.current.style.left="500px";
            p1ref.current.style.top=parseInt(p1ref.current.style.top)-mo-p2.Speed+'px';
          
      
          }
         
          else if(e.key==='p'){
            //  inputref.current.style.left="500px";
          
           //  else{
           //    clearInterval(bote_dance);
          //     bote_dance=null;
          //   }
            
            
          //  console.log("the d is pressed")
           
           

      
          }
          else if(e.key==='h'){
            const intervelds=setInterval(bulletRun,1000);
           // bulletRun()
          //  shoot();
            function bulletRun(){
                
                fire.current.style.position='fixed';
                console.log("value of fire.current.style.left ",fire.current.style.position)
                console.log("value of  speed",mo)

                if( parseInt(fire.current.style.left)>1000){
                    console.log("value of fire.current.style.left df ",fire.current.style.left)
                    fire.current.style.left=parseInt(p1ref.current.style.left)-p2.Speed+'px';
                    fire.current.style.position='absolute';
                   // setref2(parseInt(fire.current.style.left));
                }
                    else { 
                    //    console.log("p2.Speed",p2.Speed)
                       // fire.current.style.left='0px';
                       // setx(p1.Speed)
                        fire.current.style.left=parseInt(fire.current.style.left)+p2.Speed+'px'}
                     //   fire.current.style.top=parseInt(fire.current.style.top)-p1.Speed+'px';

            

              }
            //  inputref.current.style.left="500px";
           // p1ref.current.style.top=parseInt(p1ref.current.style.top)-mo-p1.Speed+'px';
      
          }
          
    }


    function boot(){

      
      }

    

    
}
function gamestart(){
    // circle.style.position='absolute';
    // circle.style.left=0;
    // circle.style.top=0;

    // //square.style.position='absolute';
    // square.style.left=30;
    // square.style.top=0;
   
}


  function shoot(){
    return(
        <h1>this isth</h1>
    )
    }
   


  
  