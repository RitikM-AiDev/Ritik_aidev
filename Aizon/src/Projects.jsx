import { useNavigate } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import desktop_assistant_project from './assets/desktop_assistant.png'
import mailer_agent_project from './assets/mailer_agent.png'
import Notogen_project from './assets/Notogen_project.png'
import brain_tumor_detection from './assets/proj1.png'
import assistant from './assets/assistant.png'
import csv_logo from './assets/csv_logo.png'
function Projects() {
    const navigate = useNavigate();
    return(
       <>   
       <div className='home'>
                <div className='header'>
                    <h2 style={{marginRight : "2px"}}>RITIK</h2>
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
                          <h1 style={{fontSize : 30}}>Dream. Build. Code. Repeat</h1>  
                          </div>
                        <div className="project">
                              <div className="project-icon">
                                <div className='pic-icon'>
                                <img src={brain_tumor_detection}></img>
                                </div>
                                <div className='right-proj'>
                                <h3>Deep Learning Project</h3>
                                <h1>BRAIN TUMOR DETECTOR</h1>
                                <a href='https://brain-tumor-ai.up.railway.app/' target='_blank'>LIVE PROJECT LINK</a>
                                <p>AI-powered brain tumor detection and classification system that analyzes MRI scans using deep learning. The system automatically identifies tumor type and generates a detailed diagnostic report. Built with frontend using JS and React for image upload and result display, backend using FastAPI for processing and API endpoints, and AI with Agentic AI for tumor classification and report generation.</p>
                                <a className='project-git' href='https://github.com/RitikM-AiDev/brain-tumor-ai' target='_blank'><button className='project-button-git' ><FaGithub/>GitHub Link</button></a>
                                </div>
                            </div>
                           <div className="project-icon">
                            <div className='pic-icon'>
                                <img src={mailer_agent_project}></img>
                            </div>
                            <div className='right-proj'>
                                <h3>AI Productivity Project</h3>
                                <h1>PERSONALISED MAILER AGENT</h1>
                                <p>AI-powered personalised mailer agent that intelligently sorts emails into formal and informal categories, drafts responses, and sends emails automatically. Built with frontend using JS and React for smooth user interaction, backend using FastAPI for secure email handling, and AI with Agentic AI to analyze content context, prioritize messages, and automate communication efficiently. Ideal for users who want smarter inbox management and professional automated email assistance.</p>
                                <a className='project-git' href='https://github.com/RitikM-AiDev/Agentic-automated-Personal-Email-Agent' target='_blank'>
                                    <button className='project-button-git'><FaGithub/>GitHub Link</button>
                                </a>
                            </div>
                        </div>
                            <div className="project-icon">
                        <div className='pic-icon'>
                            <img src={desktop_assistant_project}></img>
                        </div>
                        <div className='right-proj'>
                            <h3>AI Productivity Project</h3>
                            <h1>DESKTOP ASSISTANT</h1>
                            <a href='https://desko-eqco.onrender.com/' target='_blank'>LIVE PROJECT LINK</a>
                            <p>AI-powered desktop assistant that acts as your personal digital companion. Built with frontend using JS and React for an interactive and responsive interface, backend using FastAPI for handling requests efficiently, and AI with Agentic AI to process natural language, perform tasks, and provide instant answers. Always available, it helps you manage your day, automate routine tasks, and communicate seamlessly with a smart, conversational interface.</p>
                            <a className='project-git' href='https://github.com/RitikM-AiDev/AI-Agentic---desktop-assistant' target='_blank'>
                                <button className='project-button-git'><FaGithub/>GitHub Link</button>
                            </a>
                        </div>
                        </div>
                            <div className="project-icon">
                        <div className='pic-icon'>
                            <img src={Notogen_project}></img>
                        </div>
                         <div className="project-icon">
                                <div className='pic-icon'>
                                <img src={csv_logo}></img>
                                </div>
                                <div className='right-proj'>
                                <h3>Agentic AI Project</h3>
                                <h1>CSV Analyser - Know What Graphs You can Draw For Your CSVs</h1>
                                <a href='https://ritik-aidev-csv-analyser.hf.space' target='_blank'>LIVE PROJECT LINK</a>
                                <p>
                                AI-powered CSV analyzer that automatically examines your CSV files and suggests the best types of charts to visualize the data. 
                                It generates a complete HTML report that can be opened directly in a browser, showing suggested charts and a clear summary. 
                                Built with a React frontend for file upload and display, and a backend powered by Agentic AI for intelligent analysis and report generation.
                                </p>
                                <a className='project-git' href='https://github.com/RitikM-AiDev/AI-Automated---CSV_Analyser' target='_blank'><button className='project-button-git' ><FaGithub/>GitHub Link</button></a>
                                </div>
                            </div>
                           <div className="project-icon">
                            <div className='pic-icon'>
                                <img src={assistant} alt="Project Screenshot" />
                            </div>
                            <div className='right-proj'>
                                <h3>Agentic AI Project</h3>
                                <h1>My Assistant Bot</h1>
                                <a href='https://ritik-aidev-vgram-bot.hf.space' target='_blank'>LIVE PROJECT LINK</a>
                                
                                <p>
                                    My Assistant Bot is an AI-powered personal assistant that provides information about me. 
                                    It intelligently answers questions about my skills, projects, and experience. 
                                    The chatbot features a React-based interactive interface for smooth user interaction 
                                    and is supported by a secure Agentic AI backend. 
                                    It also guides users to relevant resources, projects, and career insights, making it a complete personal assistant experience.
                                </p>

                                <a className='project-git' href='https://github.com/RitikM-AiDev/VMARG_BOT' target='_blank'>
                                    <button className='project-button-git'><FaGithub /> GitHub Link</button>
                                </a>
                            </div>
                        </div>
                        <div className='right-proj'>
                            <h3>AI Education Project</h3>
                            <h1>NOTOGEN - AI INTEGRATED NOTES MAKER</h1>
                            <p>AI-powered mobile app that reduces classroom note-taking time, allowing students to focus on learning. Students record lectures, and NLP algorithms convert speech into structured, clear notes. Built with frontend using JS and React for mobile responsiveness, backend using FastAPI for processing and storage, and AI with Agentic AI to analyze, compare with teacher notes, highlight errors, and provide corrections. Ideal for improving learning efficiency and accuracy.</p>
                            <a className='project-git' href='https://github.com/RitikM-AiDev/Notogen-AI_Notes_Maker' target='_blank'>
                                <button className='project-button-git'><FaGithub/>GitHub Link</button>
                            </a>
                        </div>
                    </div>
                        </div>
                          </div>
        </div>
      </>
    )
}

export default Projects;
