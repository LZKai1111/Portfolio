import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Pic1 from "../assets/about_1.jpg";
import Pic2 from "../assets/about_2.jpg";
import Pic3 from "../assets/about_3.jpg";

export default function About() {
    return(
        <>
            <Navbar />
            <div className="section-wrapper mg-tp-10">
                <div className="content-row mg-bot-5">
                    <div className="mg-rg-1">
                        <h1>Hi there, I am Zikai</h1>
                        <p>I am a fullstack developer with prior internship experience in frontend and backend development.
                            I am proficient in JavaScript-based technologies such as MERN stack, deploying AWS EC2 instances and collaborating using Git.
                            I bring strong communication, coordination and execution skills which I have further enhanced during two years of national service.
                        </p>
                    </div>
                    <div className="about-img-div">
                        <img src={Pic1} className="card-image"/>
                        <p>With my tour guide in Kulen mountain, Cambodia</p>
                    </div>
                </div>

                <h1 className="align-center justify-center">&darr;</h1>

                <div className="mg-tp-5">
                    <h1>My intern experience</h1>
                    <p>
                        I had 5 months of internship experience at Tech JDI, spending three months in Ho Chi Minh City Vietnam and two months in Singapore, working as a full-stack developer.
                        Throughout the internship, I contributed to an internal web application used by the company to support daily operations.
                    </p>
                    <p>
                        My work is primarily focused on frontend development using NextJS where I worked closely with a senior UI designer to translate design mockups into responsive, production-ready components.
                        While frontend was my primary focus, I occasionally worked on backend using ExpressJS to support frontend features, such as creating API endpoints and handling basic request logic.
                        Git was another tool I used to collaborate with other developers where I learnt to work with branches, resolve merge conflicts and review changes before integration. 
                        I was also exposed to server setup on AWS EC2, including basic environment configuration and running the application in a production-like environment.
                    </p>
                </div>

                <div className="content-row mg-tp-10">
                    <div className="about-img-div">
                        <img src={Pic2} className="card-image" />
                    </div>
                    <div className="align-center">
                        <p>
                            Outside work hours, I preferred spending my time exploring new places. 
                            During christmas that year, my fellow interns and I (first from the left) planned long-distance bike trip from Ho Chi Minh City to Vung Tau!
                            Vung Tau is a coastal city that is popular for seaside resort which is a few hours away from Ho Chi Minh City.
                            It was a great way to understand local culture, navigating unfamiliar environments and get to grow independently.
                        </p>
                    </div>
                </div>


                <div className="content-row mg-tp-10">
                    <div>
                        <h1>Hobbies</h1>
                        <p>
                            Outside of work, I enjoy many different hobbies such as reading, scale modeling and backpacking.
                            As for reading, I enjoy a variety of generes, ranging from themes of human nature that explores behaviour and societal structures to fiction like fantasy
                            which allow for creativity and imagination.
                            Reading has helped me to broaden my perspective and improve how I think and approach problems.
                        </p>
                        <p>
                            I also enjoy backpacking which is a form of budget travelling that promotes indenpendence, adaptability and cultural awareness.
                            The photo on the right was my first backpacking trip to Taiwan where my friend (left) and I (middle) met a solo backpacker from Malaysia (right)!
                            We are able meet up at different parts of the country and explore together till the end of the trip.
                            It has allowed me to learn to dependent on myself, foster deeper connections and increase my confidence through connecting to people of diverse culture. 
                        </p>
                    </div>
                    <div className="about-img-div">
                        <img src={Pic3} className="card-image"/>
                    </div>
                </div>

                <div className="mg-tp-10 mg-bot-10">
                    <p>
                        Outside of work, I explore new technologies through personal projects and occasionally practice competitive programming to sharpen my problem-solving skills. 
                        I have also been learning Spring Boot to strengthen my understanding of backend development.
                    </p>

                </div>

            </div>
            <Footer />
        </>
    )
}