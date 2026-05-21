import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ritik_photo from './assets/ritik_photo.jpeg';
import Popup from './Popup.jsx';
import desktop_assistant_project from "./assets/desko.png";
import mailer_agent_project from "./assets/mailer_agent.png";
import Notogen_project from "./assets/Notogen_project.png";
import brain_tumor_detection from "./assets/proj1.png";
import assistant from "./assets/assistant.png";
import csv_logo from "./assets/csv_logo.png";
import {
  Code2,
  Brain,
  Zap,
  Sparkles,
  ChevronRight,
  Menu,
  X,
  Pointer

} from "lucide-react";
import {
    FaMoon,
    FaSun
} from "react-icons/fa"
import { useEffect, useState } from "react";

export default function App() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark , Setdark] = useState(()=>{
       const saved_theme = localStorage.getItem("theme");
       return saved_theme === "dark";
  }
  );
  //  useEffect(()=>{
  //    const saved_theme = localStorage.getItem("theme");
  //    
  // },[])

  useEffect(()=>{
    if(dark){
       localStorage.setItem("theme", "dark")
    }
    else{
      localStorage.setItem("theme","light")
    }
   
  },[dark])
  const [popup,setPopup] = useState(false);
  const [header,setHeader] = useState(true);
   const [selectedProject, setSelectedProject] = useState(null);
   const array = [
  {
    title: "Agentic AI Project",
    name: "My Assistant Bot",
    image: assistant,
    live: "https://ritik-aidev-vgram-bot.hf.space",
    github: "https://github.com/RitikM-AiDev/VMARG_BOT",
    description: `
My Assistant Bot is an AI-powered personal assistant that provides information about me.
It intelligently answers questions about my skills, projects, and experience.
The chatbot features a React-based interactive interface for smooth user interaction
and is supported by a secure Agentic AI backend.
It also guides users to relevant resources, projects, and career insights, making it a complete personal assistant experience.
`
  },

  {
    title: "Agentic AI Project with Fullstack Web",
    name: "Desktop Assistant",
    image: desktop_assistant_project,
    live: "https://desko-eqco.onrender.com/",
    github: "https://github.com/RitikM-AiDev/AI-Agentic---desktop-assistant",
    description: `
AI-powered desktop assistant that acts as your personal digital companion.
Built with frontend using JS and React for an interactive and responsive interface,
backend using FastAPI for handling requests efficiently,
and AI with Agentic AI to process natural language, perform tasks, and provide instant answers.
Always available, it helps you manage your day, automate routine tasks,
and communicate seamlessly with a smart, conversational interface.
`
  },

  {
    title: "Deep Learning Project",
    name: "Brain Tumor Detector",
    image: brain_tumor_detection,
    live: "https://brain-tumor-ai.up.railway.app/",
    github: "https://github.com/RitikM-AiDev/brain-tumor-ai",
    description: `
AI-powered brain tumor detection and classification system that analyzes MRI scans using deep learning.
The system automatically identifies tumor type and generates a detailed diagnostic report.
Built with frontend using JS and React for image upload and result display,
backend using FastAPI for processing and API endpoints,
and AI with Agentic AI for tumor classification and report generation.
`
  },

  {
    title: "Agentic AI Project",
    name: "Personalized Mailer Agent",
    image: mailer_agent_project,
    live: "",
    github: "https://github.com/RitikM-AiDev/Agentic-automated-Personal-Email-Agent",
    description: `
AI-powered personalised mailer agent that intelligently sorts emails into formal and informal categories,
drafts responses, and sends emails automatically.
Built with frontend using JS and React for smooth user interaction,
backend using FastAPI for secure email handling,
and AI with Agentic AI to analyze content context, prioritize messages,
and automate communication efficiently.
Ideal for users who want smarter inbox management and professional automated email assistance.
`
  },

  {
    title: "Mobile App With Agentic AI",
    name: "Notogen - AI Notes Maker",
    image: Notogen_project,
    live: "",
    github: "https://github.com/RitikM-AiDev/Notogen-AI_Notes_Maker",
    description: `
AI-powered mobile app that reduces classroom note-taking time, allowing students to focus on learning.
Students record lectures, and NLP algorithms convert speech into structured, clear notes.
Built with frontend using JS and React for mobile responsiveness,
backend using FastAPI for processing and storage,
and AI with Agentic AI to analyze, compare with teacher notes, highlight errors, and provide corrections.
Ideal for improving learning efficiency and accuracy.
`
  },

  {
    title: "Agentic AI Project",
    name: "CSV Analyzer",
    image: csv_logo,
    live: "https://ritik-aidev-csv-analyser.hf.space",
    github: "https://github.com/RitikM-AiDev/AI-Automated---CSV_Analyser",
    description: `
AI-powered CSV analyzer that automatically examines your CSV files and suggests the best types of charts to visualize the data.
It generates a complete HTML report that can be opened directly in a browser,
showing suggested charts and a clear summary.
Built with a React frontend for file upload and display,
and a backend powered by Agentic AI for intelligent analysis and report generation.
`
  }
];
  const handle_popup = (project) =>{
        setSelectedProject(project);
        setHeader(false)
        setPopup(true);
        
  }
 
  const handle_theme = () =>{
    Setdark(!dark);
  }
  const handle_close = () =>{
    setPopup(false);
    setSelectedProject(null);
    setHeader(true)
  }
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className={dark ? "app dark-theme" : "app light-theme"}>
      {/* NAVBAR */}
      { header &&
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-wrapper">
            <div className="logo-circle">R</div>

            <div>
              <h1 className="logo-name">RITIK M</h1>

              <p className="logo-role">AI & ML ENGINEER</p>
            </div>
          </div>
          {/* DESKTOP NAV */}
          <div className="desktop-nav" style={{fontSize : 20,fontWeight : "bold"}}>
            {["home", "about", "projects", "skills", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="nav-button"
                  >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              )
            )}
          </div>
            {dark ? <FaMoon id="theme-icon" size={30} onClick={handle_theme} style={{cursor : "pointer"}}/> : <FaSun id="theme-icon" size={30} onClick={handle_theme} style={{cursor : "pointer"}}/>}

          {/* MOBILE BUTTON */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mobile-menu">
            
            {["home", "about", "projects", "skills", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="mobile-nav-button"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              )
            )}
          </div>
        )}
      </nav>
      }

      {/* HERO */}
      <section id="home" className="hero">
        <div className="container">
          <div className="container-flex">
          <div className="profile">
          <div className="hero-badge">
            <Sparkles size={18} />
            Available for Opportunities
          </div>

          <h1 className="hero-title">RITIK M</h1>

          <p className="hero-subtitle">
            Artificial Intelligence & Machine Learning Engineer
          </p>

          <p className="hero-description">
            Passionate about building AI applications that are beautiful,
            functional and solve real-world problems.
          </p>

          <div className="hero-buttons">
            <a
              href="https://github.com/ritikm-aidev"
              target="_blank"
              rel="noreferrer"
              className="primary-btn-git"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ritikm-aidev/"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn-linkedin"
            >
              <FaLinkedinIn />
              LinkedIn
            </a>

            <a
              href="mailto:ritik.aidev@gmail.com"
              className="secondary-btn-mail"
            >
              <MdEmail />
              Email
            </a>
          </div>
          </div>
              <div className="relative w-80 h-80 perspective-1000">
  {/* Ambient glow */}
  {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-40 animate-pulse"></div> */}
  
  {/* 3D Container */}
  <div className="relative w-full h-full transform-gpu hover:scale-105 transition-transform duration-500 ease-out"
       style={{ transformStyle: 'preserve-3d' }}>
    {/* Shadow layers for depth */}
    {/* <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-md translate-y-2 translate-x-2"></div> */}
    {/* <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 blur-lg translate-y-3 translate-x-3"></div> */}
    
    {/* Main image with 3D border */}
    <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 shadow-[0_15px_40px_rgba(139,92,246,0.5)]"
         style={{ transform: 'translateZ(20px)' }}>
      {/* Inner shadow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-white/20 to-transparent opacity-60"></div>
      
      {/* Image container */}
      <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-inner">
        <img 
          className="w-full h-full object-cover scale-110" 
          src={ritik_photo} 
          alt="Ritik"
        />
        
        {/* Glossy highlight overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-40 mix-blend-overlay"></div>
        
        {/* Edge highlight */}
        <div className="absolute inset-0 rounded-full border border-white/10"></div>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section dark-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>

          <div className="card-grid">
            <div className="card">
              <div className="icon-box">
                <Brain />
              </div>

              <h3>AI/ML Expertise</h3>

              <p>
                Building intelligent systems using machine learning,
                deep learning and modern AI frameworks.
              </p>
            </div>

            <div className="card">
              <div className="icon-box">
                <Code2 />
              </div>

              <h3>Full Stack Development</h3>

              <p>
                Creating scalable web applications with modern frontend
                and backend technologies.
              </p>
            </div>

            <div className="card">
              <div className="icon-box">
                <Zap />
              </div>

              <h3>Problem Solving</h3>

              <p>
                Transforming complex problems into elegant and impactful
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
        
      {/* PROJECTS */}
    <section id="projects" className="section">
  <div className="container">
    <h2 className="section-title">Projects</h2>

    <div className="projects-grid">
      {array.map((project, index) => (
        <div className="project-card" key={index}>
          
          <div className="project-top">
            <div className="project-icon">
              <Code2 />
            </div>

            <ChevronRight
              onClick={() => handle_popup(project)}
              className="right-arrow"
              style={{ cursor: "pointer" }}
            />
          </div>
          <h3>{project.name}</h3>
          <h4>{project.title}</h4>
          <h6>Press Arrow button to see !</h6>

        </div>
      ))}
    </div>

    {/* Popup OUTSIDE map (correct) */}
    <Popup
      isOpen={popup}
      onClose={handle_close}
      project={selectedProject}
      darkMode={dark}
    />
  </div>
</section>

      {/* SKILLS */}
      <section id="skills" className="section dark-section">
        <div className="container">
          <h2 className="section-title">Skills</h2>

          <div className="skills-grid">
            { [
  {
    type: "AI/ML",
    skill: "LLM Engineering"
  },
  {
    type: "AI/ML",
    skill: "Deep Learning"
  },
  {
    type: "AI/ML",
    skill: "NLP"
  },
  {
    type: "AI/ML",
    skill: "Agentic AI"
  },

  {
    type: "Frontend",
    skill: "Flutter"
  },
  {
    type: "Frontend",
    skill: "React JS"
  },
  {
    type: "Frontend",
    skill: "JavaScript"
  },
  {
    type: "Frontend",
    skill: "TypeScript"
  },

  {
    type: "Backend",
    skill: "FastAPI"
  },
  {
    type: "Backend",
    skill: "Express JS"
  },
  {
    type: "Backend",
    skill: "Node JS"
  },
  {
    type: "Backend",
    skill: "REST APIs"
  },

  {
    type: "Database",
    skill: "PostgreSQL"
  },
  {
    type: "Database",
    skill: "Firebase"
  },
  {
    type: "Database",
    skill: "MongoDB"
  }
].map((skill, index) => (
              <div className="skill-card" key={index}>
                <h2 style={{fontWeight : "bolder" , color : dark ? "lightgreen" : "blue" }}>{skill.type}</h2><br/>
                <h7 style={{fontWeight : "bold"}}>{skill.skill}</h7>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container contact-section">
          <h2 className="section-title">Get In Touch</h2>

          <p className="contact-text">
            Open to projects, collaborations and opportunities.
          </p>

          <a
            href="mailto:ritik.aidev@gmail.com"
            className="primary-btn"
          >
            <MdEmail />
            Say Hello
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Ritik M • Built with React & CSS
      </footer>
    </div>
  );
}