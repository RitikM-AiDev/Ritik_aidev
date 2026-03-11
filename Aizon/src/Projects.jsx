import { useNavigate } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import desktop_assistant_project from './assets/desktop_assistant.png'
import mailer_agent_project from './assets/mailer_agent.png'
import Notogen_project from './assets/Notogen_project.png'
function Projects() {
    const navigate = useNavigate();
    return(
       <>   
       <div className='home'>
                <div className='header'>
                    <h2 style={{margin : 40}}>AIZON</h2>
                    <div className='header-nav'>
                    <button className='header-button' onClick={()=>{navigate("/")}}>Home</button>
                    <button className='header-button' onClick={()=>{navigate("/about")}}>About</button>
                    <button className='header-button' onClick={()=>{navigate("/projects")}}>Projects</button>
                    <button className='header-button' onClick={()=>{navigate("/skills")}}>Skills</button>
                    <button className='header-button'onClick={()=>{navigate("/contact")}} >Contact</button>
                    </div>
                </div>
                <div className="projects">
                 <div className="mark-project">
                          <h1 style={{fontSize : 60}}>Where My Ideas Became Reality !!</h1>  
                          </div>
                        <div className="project">
                            <div style={{backgroundColor :"white"}} className="project-icon">
                                <img src={mailer_agent_project}></img>
                                <h2>Personalised Mailer Agent</h2>
                                <a className='project-git' href='https://github.com/RitikM-AiDev/Agentic-automated-Personal-Email-Agent'><button className='project-button-git' ><FaGithub/>GitHub Link</button></a>
                                <p>A minimal illustration showing AI agents sorting emails into formal and informal categories, ideal for showcasing intelligent message handling and sending mail as your personal agent in a clean, professional layout.</p>
                            </div>
                            <div style={{backgroundColor :"white"}} className="project-icon">
                                <img src={desktop_assistant_project}></img>
                                <h2>DeskTop Assistant</h2>
                                <a className='project-git' href='https://github.com/RitikM-AiDev/AI-Agentic---desktop-assistant' target='_blank'><button className='project-button-git' ><FaGithub/>GitHub Link</button></a>
                                <p>Your personal AI assistant that lives on your desktop — a smart, conversational chatbot you can talk to anytime, ask anything, and get tasks done seamlessly, hands-free.Always available, always ready — your trusted digital companion.</p>
                            </div>
                             <div style={{backgroundColor :"white"}} className="project-icon">
                                <img src={Notogen_project}></img>
                                <h2>Notogen-AI Integrated Notes Maker Mobile APP</h2>
                                <a className='project-git' href='https://github.com/RitikM-AiDev/Notogen-AI_Notes_Maker' target='_blank'><button className='project-button-git' ><FaGithub/>GitHub Link</button></a>
                                <p>NOTOGEN reduces classroom note-taking time by letting students focus on learning instead of writing. After class, students record what they learned, and NLP converts speech into clear notes. The system compares them with teacher notes, highlights mistakes, and provides corrections.</p>
                            </div>
                        </div>
                          </div>
        </div>
      </>
    )
}

export default Projects;
