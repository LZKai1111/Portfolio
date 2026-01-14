import { SocialIcon } from "react-social-icons"
import "./style.css"
import CopyToClipboard from "../CopytoClipboard/CopytoClipboard"

export default function Intro() {
    return (
        <div className="intro-page">
            <div className="intro-container">
                <h1>Hello!</h1>
                <h1>I'm Zikai</h1>
                <h1>A frontend engineer with fullstack powers! Speicalize in web development and focused on building creative and scalable solutions.</h1>
                    <div className="contact-container">
                        <p>Get in touch</p>
                        <div className="social-container">  
                            <SocialIcon 
                                network="whatsapp" 
                                style={{ height: 35, width: 35 }} 
                                label="+65 9022 8572" target="_blank" 
                                url="https://wa.me/6590228572" 
                                rel="noopener noreferrer"
                            />
                        </div>
                        <div className="social-container">  
                            <SocialIcon 
                                network="email" 
                                style={{ height: 35, width: 35 }}
                                url="mailto:liangzikai1111@gmail.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            />
                        </div>
                        <div className="social-container">  
                            <SocialIcon 
                                network="linkedin" 
                                style={{ height: 35, width: 35 }}
                                url="https://www.linkedin.com/in/liang-zikai/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            />
                        </div>
                        <div className="social-container">
                            <SocialIcon 
                                network="github" 
                                style={{ height: 35, width: 35 }} 
                                url="https://github.com/LZKai1111" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            />
                        </div>
                    </div>
                    <div>
                        HP:
                        <CopyToClipboard text={"+65 9022 8572"} />
                    </div>
                    <div>
                        Email:
                        <CopyToClipboard text={"liangzikai1111@gmail.com"} />
                    </div>
                    <a
                    href="/Zikai_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="url-link animated-link"
                    >
                    Download Resume (PDF)
                    </a>
            </div>
        </div>
    )
}