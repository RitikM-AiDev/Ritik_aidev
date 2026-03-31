import { FaFilePdf, FaGithub, FaLinkedinIn, FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import logo from './assets/ritiklogo.png';
function App() {
    const navigate = useNavigate();
    return(
       <>   
       <div className='home'> 
                <div className='header'>
                    <h4 style={{marginRight : "2px"}}>RITIK M - AI&ML ENGINEER</h4>
                    <div className='header-nav'>
                    <button className='header-button' onClick={()=>{navigate("/")}}>Home</button>
                    <button className='header-button' onClick={()=>{navigate("/about")}}>About</button>
                    <button className='header-button' onClick={()=>{navigate("/projects")}}>Projects</button>
                    <button className='header-button' onClick={()=>{navigate("/skills")}}>Skills</button>
                    <button className='header-button' onClick={()=>{navigate("/contact")}}>Contact</button>
                    </div>
                </div>
                <div className='body-writing'>
                    <div className="wordshome">
                    <img src={logo} style={{background : "none"}} width={200}></img>
                    <h1>RITIK M</h1>
                    <p style={{color : "#4a5565",fontSize :30}}>Artificial Intelligence & Machine Learning Engineer</p>
                    <div className="gapper">
                    <p style={{color : "#6a7282", fontSize : 20}}>Passionate About Making AI Applications that  is beautiful , Functional and </p>
                    <p style={{color : "#6a7282", fontSize : 20}}>finding Solutions to Real world Problems</p>
                    </div>
                    </div>
                    <div className="icons">
                        <a href="https://github.com/ritikm-aidev" target="_blank" rel="noreferrer">
                        <div className="github"> <FaGithub/></div>
                        </a>
                        <a href="https://www.linkedin.com/in/ritikm-aidev/" target="_blank" rel="noreferrer">
                        <div className="linkedin"> <FaLinkedinIn/></div>
                        </a>
                        <a href="mailto:ritik.aidev@gmail.com" target="_blank" rel="noreferrer">
                        <div className="email"> <MdEmail/></div>
                        </a>
                    </div>
                    <div className="resumefull">
                    <a style={ {textDecoration: "none"}} href="/resume.pdf" download="Ritik_Resume.pdf">
                        <div className="resume"> <FaFilePdf/></div>
                    </a>
                    <p style={{color :"black"}}>Resume</p>
                    </div>
            
                </div>
        </div>
      </>
    )
}

export default App;
