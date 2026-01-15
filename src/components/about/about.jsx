import { Link } from "react-router-dom";

export default function About() {

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };


    return (
        <div className="section-container">
            <h3 className="section-header header">ABOUT ME</h3>
            <div className="section-body">
                <div className="card-notes">
                    An aspiring web developer with a diploma in Digital Design and Development with a strong foundation in frontend and backend development. 
                    Proficient in JavaScript-based technologies including ReactJS and ExpressJS, MongoDB and AWS EC2 deployment.
                </div>
                <div className="mg-tp-1">
                    <div className="card-notes">
                        Prior to national service, I interned at Tech JDI as a fullstack developer focusing on front-end development. 
                        My main work was on creating reusable UI components using NextJS framework
                        and also setting up a backend server using ExpressJS framework. 
                        My daily taskings included participating in daily scrum meetings, conducting code reviews, and collaborating closely with UI/UX designers and other developers to deliver features efficiently.
                    </div>
                </div>
                <div className="mg-tp-1">
                    <div className="card-notes">
                        Outside of work, I enjoy many other activities such as reading and scale modelling! 
                        <Link to="/about" ><button className='btn-home url-link animated-link' onClick={handleLinkClick}>Read more &rarr;</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}