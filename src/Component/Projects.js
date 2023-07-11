import { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const AppendProjects = ({ project }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show-x", entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      });
    });

    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      observer.observe(box);
    });
  }, []);
  return (
    <>
      <img
        loading="lazy"
        src={project.getImageSrc()}
        alt=""
        className="rounded-md xl:min-h-[250px] max-h-[300px] w-full "
      />
      <div className="p-2 bg-stone-100/95">
        <h2 className="text-cyan-500 text-xl">{project.title}</h2>
        <p className="text-slate-500">{project.description}</p>
        <a
          href="/"
          className="inline-block hover:translate-x-4 transition-transform"
        >
          See More
          <AiOutlineArrowRight className="inline ml-2" />
        </a>
      </div>
    </>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "React Space",
      description:
        "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
      getImageSrc: () => require("../imgs/photo1.jpg"),
    },
    {
      title: "React Infinite Scroll",
      description:
        "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
      getImageSrc: () => require("../imgs/photo2.jpg"),
    },
    {
      title: "Photo Gallery",
      description:
        "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
      getImageSrc: () => require("../imgs/photo3.jpg"),
    },
    {
      title: "Event planner",
      description:
        "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
      getImageSrc: () => require("../imgs/photo4.jpg"),
    },
  ];

  return (
    <>
      <section className="xl:h-screen  container mx-auto grid  xl:grid-cols-2 gap-4   ">
        <h3 className="text-3xl mt-4 self-center xl:col-span-2 ">
          Featured Projects
        </h3>
        {projects.map((e, index) => (
          <div className="box  min-h-fit " key={index}>
            <AppendProjects project={e} />
          </div>
        ))}
      </section>
    </>
  );
};
export default Projects;
