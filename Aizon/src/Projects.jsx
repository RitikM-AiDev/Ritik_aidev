import { useNavigate } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";

import desktop_assistant_project from './assets/desko.png'
import mailer_agent_project from './assets/mailer_agent.png'
import Notogen_project from './assets/Notogen_project.png'
import brain_tumor_detection from './assets/proj1.png'
import assistant from './assets/assistant.png'
import csv_logo from './assets/csv_logo.png'

function Projects() {

    const navigate = useNavigate();

    return (
        <>
            <div className='home'>

                {/* HEADER */}
                <div className='header'>
                    <h2 style={{ marginRight: "2px" }}>RITIK</h2>

                    <div className='header-nav'>
                        <button className='header-button' onClick={() => navigate("/")}>Home</button>
                        <button className='header-button' onClick={() => navigate("/about")}>About</button>
                        <button className='header-button' onClick={() => navigate("/projects")}>Projects</button>
                        <button className='header-button' onClick={() => navigate("/skills")}>Skills</button>
                        <button className='header-button' onClick={() => navigate("/contact")}>Contact</button>
                    </div>
                </div>

                {/* PROJECTS */}
                <div className="projects">

                    <div className="mark-project">
                        <h1 style={{ fontSize: 30 }}>Dream. Build. Code. Repeat</h1>
                    </div>

                    {/* PROJECT 1 */}
                    <div className="project-icon">
                        <div className='pic-icon'>
                            <img src={assistant} alt="Assistant Bot" />
                        </div>

                        <div className='right-proj'>
                            <h3>Agentic AI Project</h3>
                            <h1>My Assistant Bot</h1>

                            <a href='https://ritik-aidev-vgram-bot.hf.space' target='_blank' rel="noopener noreferrer">
                                LIVE PROJECT LINK
                            </a>

                            <p>
                                AI-powered personal assistant that answers questions about my skills, projects, and experience using React UI and Agentic AI backend.
                            </p>

                            <a href='https://github.com/RitikM-AiDev/VMARG_BOT' target='_blank' rel="noopener noreferrer">
                                <button className='project-button-git'><FaGithub /> GitHub Link</button>
                            </a>
                        </div>
                    </div>

                    {/* PROJECT 2 */}
                    <div className="project-icon">
                        <div className='pic-icon'>
                            <img src={desktop_assistant_project} alt="Desktop Assistant" />
                        </div>

                        <div className='right-proj'>
                            <h3>Agentic AI Project with Fullstack Web</h3>
                            <h1>DESKTOP ASSISTANT</h1>

                            <a href='https://desko-eqco.onrender.com/' target='_blank' rel="noopener noreferrer">
                                LIVE PROJECT LINK
                            </a>

                            <p>
                                AI-powered desktop assistant built with React, FastAPI, and Agentic AI. Automates tasks and provides smart conversational help.
                            </p>

                            <a href='https://github.com/RitikM-AiDev/AI-Agentic---desktop-assistant' target='_blank' rel="noopener noreferrer">
                                <button className='project-button-git'><FaGithub /> GitHub Link</button>
                            </a>
                        </div>
                    </div>

                    {/* PROJECT 3 */}
                    <div className="project-icon">
                        <div className='pic-icon'>
                            <img src={brain_tumor_detection} alt="Brain Tumor Detector" />
                        </div>

                        <div className='right-proj'>
                            <h3>Deep Learning Project</h3>
                            <h1>BRAIN TUMOR DETECTOR</h1>

                            <a href='https://brain-tumor-ai.up.railway.app/' target='_blank' rel="noopener noreferrer">
                                LIVE PROJECT LINK
                            </a>

                            <p>
                                Detects and classifies brain tumors from MRI scans using deep learning and generates reports.
                            </p>

                            <a href='https://github.com/RitikM-AiDev/brain-tumor-ai' target='_blank' rel="noopener noreferrer">
                                <button className='project-button-git'><FaGithub /> GitHub Link</button>
                            </a>
                        </div>
                    </div>

                    {/* PROJECT 4 */}
                    <div className="project-icon">
                        <div className='pic-icon'>
                            <img src={mailer_agent_project} alt="Mailer Agent" />
                        </div>

                        <div className='right-proj'>
                            <h3>Agentic AI Project</h3>
                            <h1>PERSONALISED MAILER AGENT</h1>

                            <p>
                                AI-powered mail assistant that sorts emails, drafts replies, and automates communication.
                            </p>

                            <a href='https://github.com/RitikM-AiDev/Agentic-automated-Personal-Email-Agent' target='_blank' rel="noopener noreferrer">
                                <button className='project-button-git'><FaGithub /> GitHub Link</button>
                            </a>
                        </div>
                    </div>

                    {/* PROJECT 5 */}
                    <div className="project-icon">
                        <div className='pic-icon'>
                            <img src={Notogen_project} alt="Notogen App" />
                        </div>

                        <div className='right-proj'>
                            <h3>Mobile App With Agentic AI</h3>
                            <h1>NOTOGEN - AI NOTES MAKER</h1>

                            <p>
                                Converts lecture recordings into structured notes using AI to improve learning efficiency.
                            </p>

                            <a href='https://github.com/RitikM-AiDev/Notogen-AI_Notes_Maker' target='_blank' rel="noopener noreferrer">
                                <button className='project-button-git'><FaGithub /> GitHub Link</button>
                            </a>
                        </div>
                    </div>

                    {/* PROJECT 6 */}
                    <div className="project-icon">
                        <div className='pic-icon'>
                            <img src={csv_logo} alt="CSV Analyzer" />
                        </div>

                        <div className='right-proj'>
                            <h3>Agentic AI Project</h3>
                            <h1>CSV ANALYSER</h1>

                            <a href='https://ritik-aidev-csv-analyser.hf.space' target='_blank' rel="noopener noreferrer">
                                LIVE PROJECT LINK
                            </a>

                            <p>
                                Analyzes CSV files and suggests the best charts, generating a full HTML report.
                            </p>

                            <a href='https://github.com/RitikM-AiDev/AI-Automated---CSV_Analyser' target='_blank' rel="noopener noreferrer">
                                <button className='project-button-git'><FaGithub /> GitHub Link</button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects;
