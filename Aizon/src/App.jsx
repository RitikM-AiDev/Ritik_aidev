import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark , Setdark] = useState(true);
  const handle_theme = () =>{
    Setdark(!dark);

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

      {/* HERO */}
      <section id="home" className="hero">
        <div className="container">
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
              className="primary-btn"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ritikm-aidev/"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              <FaLinkedinIn />
              LinkedIn
            </a>

            <a
              href="mailto:ritik.aidev@gmail.com"
              className="secondary-btn"
            >
              <MdEmail />
              Email
            </a>
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
            {[1, 2, 3, 4].map((project) => (
              <div className="project-card" key={project}>
                <div className="project-top">
                  <div className="project-icon">
                    <Code2 />
                  </div>

                  <ChevronRight className="right-arrow" style={{cursor : "pointer"}} />
                </div>

                <h3>Project {project}</h3>

                <p>
                  AI powered application showcasing modern machine learning
                  and scalable architecture.
                </p>

                <div className="tech-stack">
                  {["Python", "TensorFlow", "React"].map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section dark-section">
        <div className="container">
          <h2 className="section-title">Skills</h2>

          <div className="skills-grid">
            {[
              "Python",
              "TensorFlow",
              "PyTorch",
              "React",
              "Node.js",
              "Docker",
              "AWS",
              "MongoDB",
            ].map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
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