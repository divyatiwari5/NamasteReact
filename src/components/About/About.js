import User from "../User/User";
import UserClass from "../User/UserClass";

const About = () => {
    return(
        <div className="about-us">
            <h1>About us</h1>
            <h2>This is about our food company!!!</h2>
            <User name="Divya"/>
            <UserClass name="DTiwari" />
        </div>
    )
}

export default About;