import { FaFile, FaFileAlt, FaFilePdf, FaGithub, FaLinkedinIn, FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from './assets/ritiklogo.png'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate();
    return(
       <>   
       <div className='home'>
                <div className='header'>
                    <h2 style={{marginRight : "2px"}}>RITIK</h2>
                    <div className='header-nav'>
                    <button className='header-button' onClick={()=>{navigate("/")}}>Home</button>
                    <button className='header-button' onClick={()=>{navigate("/about")}}>About</button>
                    <button className='header-button'  onClick={()=>{navigate("/projects")}}>Projects</button>
                    <button className='header-button' onClick={()=>{navigate("/skills")}}>Skills</button>
                    <button className='header-button' onClick={()=>{navigate("/contacts")}}>Contact</button>
                    </div>
                </div>
                <div className='body-writing'>
                    <div className="wordsabout">
                    <h1>About Me</h1>
                    <div className="aboutpara">
                        <p>I am a passionate Python developer and aspiring AI engineer with </p>
                        <p> hands-on experience in algorithms, data structures, and </p>
                        <p>deep learning concepts. I have a strong curiosity for understanding </p>
                        <p> complex problems and turning them into practical solutions. </p>
                        <p>I enjoy exploring new ideas, learning continuously, and </p>
                        <p > applying my knowledge to create projects that are both innovative</p> 
                        <p>and impactful. With a dedication to growth and problem-solving, </p>
                        <p >I aim to contribute to meaningful work that bridges creativity and</p>
                        <p>technology, while constantly challenging myself to reach new heights. </p>
                    </div>
                    </div>
                </div>
        </div>
      </>
    )
}

export default About;
