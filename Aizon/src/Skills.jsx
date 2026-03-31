import { FaGithub,FaNodeJs,FaPython,FaRobot} from "react-icons/fa";
import { SiFastapi,SiMongodb,SiTypescript,SiJavascript,SiPostgresql,SiFirebase,SiReact,SiFlutter, SiExpress} from 'react-icons/si';
import { GiBrain } from 'react-icons/gi'
import { TbApi } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
function Skills() {
    const navigate = useNavigate();
    return(
       <>   
       <div className='home'>
                <div className='header'>
                    <h2 style={{marginRight : "2px"}}>RITIK</h2>
                    <div className='header-nav'>
                    <button className='header-button' onClick={()=>{navigate("/")}}>Home</button>
                    <button className='header-button' onClick={()=>{navigate("/about")}}>About</button>
                    <button className='header-button'onClick={()=>{navigate("/projects")}}>Projects</button>
                    <button className='header-button' onClick={()=>{navigate("/skills")}}>Skills</button>
                    <button className='header-button'onClick={()=>{navigate("/contact")}} >Contact</button>
                    </div>
                </div>
        <div className='skills'>
        <h1 style={{fontSize : 50,fontWeight : "bold",fontFamily :"sans-serif"}}><center>My Skills</center></h1>
         <div className="mark">
          <div className="point"></div>
          <h1 style={{fontSize : 30}}>AI/ML</h1>  
          </div>
        <div className="frontend-icon">
            <div style={{backgroundColor :"gold"}} className="skill-icon">
                <GiBrain color="black" size={30}/>
                <p>LLM Engineering</p>
              </div> 
               <div style={{backgroundColor :"gold"}} className="skill-icon">
                <GiBrain color="black" size={30}/>
                <p>Deep Learning</p>
              </div> 
               <div style={{backgroundColor :"gold"}} className="skill-icon">
                <GiBrain color="black" size={30}/>
                <p>NLP</p>
              </div> 

               <div style={{backgroundColor : "lightgreen"}} className="skill-icon">
                <FaRobot color="black" size={30}/>
                <p>Agentic AI</p>
              </div> 
        </div>
        <div className="mark">
          <div className="point"></div>
          <h1 style={{fontSize : 30}}>Frontend</h1>  
          </div>
        <div className="frontend-icon">
            <div style={{backgroundColor :"#cefafe"}} className="skill-icon">
                <SiFlutter color="#61DAFB" size={30}/>
                <p>Flutter</p>
              </div> 
               <div style={{backgroundColor : "#f1f5f9"}} className="skill-icon">
                <SiReact color="#61DAFB" size={30}/>
                <p>React JS</p>
              </div> 
            <div style={{backgroundColor : "gold"}} className="skill-icon">
                <SiJavascript color="black" size={30}/>
                <p>Java Script</p>
              </div> 
              <div style={{backgroundColor : "gold"}} className="skill-icon">
                <SiTypescript color="black" size={30}/>
                <p>Type Script</p>
              </div> 
        </div>
         <div className="mark">
          <div className="point"></div>
          <h1 style={{fontSize : 30}}>Backend</h1>  
          </div>
        <div className="frontend-icon">
            <div style={{backgroundColor : "#cbfbf1"}} className="skill-icon">
                <SiFastapi color="#009689" size={30}/>
                <p>Fast API</p>
              </div> 
               <div style={{backgroundColor : "gold"}} className="skill-icon">
                <SiExpress color="#1447e6" size={30}/>
                <p>Express JS</p>
              </div> 
            <div style={{backgroundColor : "lightgreen"}} className="skill-icon">
                <FaNodeJs color="green" size={30}/>
                <p>Node JS</p>
              </div> 
              <div  style={{backgroundColor : "lightblue"}} className="skill-icon">
                <TbApi color="black" size={30}/>
                <p>REST APIs</p>
              </div> 
        </div>
         <div className="mark">
          <div className="point"></div>
          <h1 style={{fontSize : 30}}>DataBase</h1>  
          </div>
        <div className="frontend-icon">
            <div  style={{backgroundColor :"lightgreen"}} className="skill-icon">
                <SiPostgresql color="green" size={30}/>
                <p>Postgre SQL</p>
              </div> 
               <div  style={{backgroundColor : "gold"}} className="skill-icon">
                <SiFirebase color="black" size={30}/>
                <p>FireBase</p>
              </div> 
            <div  style={{backgroundColor : "lightgreen"}} className="skill-icon">
                <SiMongodb color="green" size={30}/>
                <p>MongoDB</p>
              </div> 
        </div>
        </div>
        </div>
      </>
    )
}

export default Skills;
