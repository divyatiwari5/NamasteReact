import { useContext } from "react";
import User from "../User/User";
import UserClass from "../User/UserClass";
import { AppContext, UserContext } from "../../utility/userContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  const { appName } = useContext(AppContext);

  return (
    <div className="about-us">
      <h1>About {loggedInUser} {appName}</h1>
      <h2>This is about our food company!!!</h2>
      <User name="Divya" />
      <UserClass name="DTiwari" />
    </div>
  );
};

export default About;
