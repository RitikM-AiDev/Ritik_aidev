import { useNavigate } from 'react-router-dom'
function Contact() {
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
                <div className='body-writing'>
                    <h1>Contact</h1>
                </div>
        </div>
      </>
    )
}

export default Contact;
