import avatar from "../imgs/Profile_avatar_placeholder_large.png";

const Landing = () => {
  return (
    <section id="landing-sec">
      <div>
        <img src={avatar} alt="" className="rounded-full w-[200px]" />
        <p>Hello , Im Joe</p>
        <h2 className="text-white text-2xl">A frontend developer</h2>
        <h2 className="text-white text-2xl">specialized in React</h2>
      </div>
    </section>
  );
};
export default Landing;
