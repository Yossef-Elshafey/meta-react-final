import { SlEnvolope } from "react-icons/sl";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { SiCodewars } from "react-icons/si";

const Sections = () => {
  const sections = ["Projects", "Contact Me"];
  return (
    <div className="wrapper">
      {sections.map((e, index) => (
        <a className="hover:underline" key={index} href="/">
          <li>{e}</li>
        </a>
      ))}
    </div>
  );
};

const Icons = () => {
  const icons = [
    { icon: <SlEnvolope />, location: "mailto:yssef0472@gmail.com" },
    { icon: <AiFillGithub />, location: "https://github.com/Yossef-Elshafey" },
    {
      icon: <AiFillLinkedin />,
      location: "https://www.linkedin.com/in/yossef-abdelfattah-84434a203/",
    },
    {
      icon: <SiCodewars />,
      location: "https://www.codewars.com/users/Yosssef%20Elshafey",
    },
  ];
  return (
    <div className="wrapper">
      {icons.map((e, index) => (
        <a
          className="icons-holder"
          href={e.location}
          rel="noopener noreferrer"
          target="_blank"
          key={index}
        >
          <i className="text-2xl ">{e.icon}</i>
        </a>
      ))}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-black sticky top-0 ">
      <ul>
        <Icons />
        <Sections />
      </ul>
    </nav>
  );
};

export default Navbar;
